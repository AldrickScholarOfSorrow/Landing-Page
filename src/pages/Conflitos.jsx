import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ConflictCard from "../componentes/ConflictCard";

const API_URL = "https://landing-page-sigma-eosin.vercel.app/api/conflicts/";

const worldRegions = [
  "África",
  "América Central e Caribe",
  "América do Norte",
  "América do Sul",
  "Ásia",
  "Europa",
  "Oriente Médio",
  "Oceania",
];

function Conflitos() {
  const [conflicts, setConflicts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado local apenas para o formulário
  const [isFormVisible, setIsFormVisible] = useState(false); // Controla a visibilidade do formulário
  const [editingConflict, setEditingConflict] = useState(null); // Guarda o conflito que está sendo editado
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false); // Controla o modal de deleção
  const [conflictToDeleteId, setConflictToDeleteId] = useState(null); // Guarda o ID do conflito a ser deletado
  const [newConflictData, setNewConflictData] = useState({ // Estado para os dados do novo conflito
    nome: '',
    regiao: '', // O valor inicial será o da primeira opção do select
    paises: '', // O usuário digitará os países separados por vírgula
    data_inicio: '',
    descricao: '',
  });

  useEffect(() => {
    const fetchConflicts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConflicts(data);
      } catch (error) {
        console.error("Erro ao buscar conflitos:", error);
        setError("Não foi possível carregar os conflitos. Verifique se o servidor backend está rodando.");
      } finally {
        setLoading(false);
      }
    };
    fetchConflicts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConflictData(prevData => ({ ...prevData, [name]: value }));
  };

  // Lida com a mudança no input de data, formatando-o
  const handleDateChange = (e) => {
    let value = e.target.value;
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Adiciona as barras para o formato dd/mm/aaaa
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}/${value.slice(5, 9)}`;
    }

    setNewConflictData(prevData => ({ ...prevData, data_inicio: value }));
  };

  // Lida com a submissão do formulário
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const conflictPayload = {
      ...newConflictData,
      paises: newConflictData.paises.split(',').map(p => p.trim()), // Transforma a string em um array
    };

    const isEditing = !!editingConflict;
    const url = isEditing
      ? `${API_URL}${editingConflict.id}`
      : API_URL;
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conflictPayload),
      });

      if (response.ok) {
        const updatedOrNewConflict = await response.json();
        if (isEditing) {
          setConflicts(prev => prev.map(c => c.id === editingConflict.id ? updatedOrNewConflict : c));
        } else {
          setConflicts(prev => [updatedOrNewConflict, ...prev]);
        }
      } else {
        throw new Error("Falha ao salvar o conflito.");
      }
    } catch (error) {
      console.error("Erro ao salvar conflito:", error);
    }

    setIsFormVisible(false); // Esconde o formulário
    setEditingConflict(null); // Limpa o estado de edição
    setNewConflictData({ nome: '', regiao: '', paises: '', data_inicio: '', descricao: '' }); // Limpa o formulário
  };

  // Abre o formulário para edição
  const handleEdit = (conflictToEdit) => {
    setEditingConflict(conflictToEdit);
    setNewConflictData({ ...conflictToEdit, paises: conflictToEdit.paises.join(', ') });
    setIsFormVisible(true);
  };

  // Lida com a deleção de um conflito
  const handleDelete = (conflictId) => {
    setConflictToDeleteId(conflictId); // Guarda o ID do conflito
    setIsDeleteModalVisible(true); // Abre o modal de confirmação
  };

  // Função que realmente executa a deleção após confirmação
  const confirmDelete = async () => {
    if (!conflictToDeleteId) return;
  
    try {
      const response = await fetch(`${API_URL}${conflictToDeleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setConflicts(prev => prev.filter(c => c.id !== conflictToDeleteId));
      } else {
        throw new Error("Falha ao deletar o conflito.");
      }
    } catch (error) {
      console.error("Erro ao deletar conflito:", error);
    } finally {
      // Limpa o estado e fecha o modal independentemente do resultado
      setIsDeleteModalVisible(false);
      setConflictToDeleteId(null);
    }
  };

  // Renderização condicional baseada nos estados de loading e error
  if (loading) {
    return <div className="text-center py-10">Carregando conflitos...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {conflicts.length > 0 ? (
          conflicts.map((c) => (
          <ConflictCard 
            key={c.id}
            // Passe o objeto de conflito inteiro diretamente.
            conflict={c}
            onDelete={() => handleDelete(c.id)}
            onEdit={() => handleEdit(c)}
          />
        ))) : (
          <p className="col-span-full text-center">Nenhum conflito encontrado.</p>
        )}
      </div>

      {/* 
        Usamos createPortal para renderizar o botão e os modais diretamente no body.
        Isso evita qualquer problema de "stacking context" (z-index) com os elementos pais.
      */}
      {createPortal(
        <>
          {/* Botão para adicionar novo conflito */}
          <button
            onClick={() => {
              setEditingConflict(null);
              setNewConflictData({ nome: '', regiao: '', paises: '', data_inicio: '', descricao: '' });
              setIsFormVisible(true);
            }}
            className="fixed bottom-8 right-8 bg-button dark:bg-dark-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-button-hover dark:hover:bg-dark-primary transition-transform transform hover:scale-110 z-50"
            aria-label="Adicionar Conflito"
          >
            <span className="text-3xl font-light">+</span>
          </button>

          {/* Modal do Formulário */}
          {isFormVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-primary dark:text-dark-text">
                  {editingConflict ? "Editar Conflito" : "Adicionar Novo Conflito"}
                </h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="space-y-4">
                    <input type="text" name="nome" value={newConflictData.nome} onChange={handleInputChange} placeholder="Nome do Conflito" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                    <textarea name="descricao" value={newConflictData.descricao} onChange={handleInputChange} placeholder="Descrição sucinta do conflito" required rows="3" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
                    <select name="regiao" value={newConflictData.regiao} onChange={handleInputChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                      <option value="" disabled>Selecione uma região</option>
                      {worldRegions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                    <input type="text" name="paises" value={newConflictData.paises} onChange={handleInputChange} placeholder="Países (separados por vírgula)" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                    <input
                      type="text" 
                      name="data_inicio" 
                      value={newConflictData.data_inicio} onChange={handleDateChange} placeholder="Data de Início (dd/mm/aaaa)" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" maxLength="10" />
                  </div>
                  <div className="flex justify-end space-x-4 mt-8">
                    <button 
                      type="button" 
                      onClick={() => {
                        setIsFormVisible(false);
                        setEditingConflict(null);
                      }}
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
                    >
                      Cancelar
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-button dark:bg-dark-secondary text-white rounded hover:bg-button-hover dark:hover:bg-dark-primary"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Modal de Confirmação de Deleção */}
          {isDeleteModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4 text-primary dark:text-dark-text">
                  Confirmar Deleção
                </h2>
                <p className="text-secondary dark:text-dark-text/80 mb-8">
                  Tem certeza que deseja deletar este conflito? Esta ação não pode ser desfeita.
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsDeleteModalVisible(false);
                      setConflictToDeleteId(null);
                    }}
                    className="px-6 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="button"
                    onClick={confirmDelete}
                    className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </div>
  );
}

export default Conflitos;