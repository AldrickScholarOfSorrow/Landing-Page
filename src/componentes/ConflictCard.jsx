import React from "react";

function ConflictCard({ conflict, onEdit, onDelete }) { // onEdit já está aqui
  // Desestrutura as propriedades do objeto conflict para facilitar o uso
  const { nome, data_inicio, regiao, paises, descricao } = conflict;

  return (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg border border-secondary/20 dark:border-dark-secondary/50 flex flex-col h-full">
      {/* Cabeçalho do Card com Título e Data */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-primary dark:text-dark-text">{nome}</h3>
        <span className="text-sm text-secondary/80 dark:text-dark-text/60 whitespace-nowrap ml-4">{data_inicio}</span>
      </div>
      
      {/* Informações de Região e Países */}
      <div className="text-sm text-secondary dark:text-dark-text/80 mb-4 border-t border-gray-200 dark:border-gray-700 pt-3">
        <p><span className="font-semibold">Região:</span> {regiao}</p>
        <p><span className="font-semibold">Países:</span> {paises ? paises.join(', ') : 'N/A'}</p>
      </div>

      {/* Descrição do Conflito */}
      <p className="text-base text-primary dark:text-dark-text flex-grow">
        {descricao}
      </p>

      {/* Seção de Ações com Botões */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
        <button onClick={onEdit} className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          Editar
        </button>
        <button onClick={onDelete} className="text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors">
          Deletar
        </button>
      </div>
    </div>
  );
}

export default ConflictCard;
