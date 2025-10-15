import React, { useState } from "react";
import ConflictCard from "../componentes/ConflictCard";

const initialConflicts = [
  {
    id: 1,
    title: "Conflito de Exemplo",
    description: "Esta é uma descrição inicial para o conflito. Futuramente, os dados virão de um banco de dados.",
    date: "24/07/2024",
  },
];

function Conflitos() {
  const [conflicts, setConflicts] = useState(initialConflicts);

  const addConflict = () => {
    const newConflict = {
      id: Date.now(), // ID único baseado no tempo
      title: `Novo Conflito #${conflicts.length + 1}`,
      description: "Este é um novo conflito adicionado dinamicamente para teste.",
      date: new Date().toLocaleDateString('pt-BR'),
    };
    setConflicts(prevConflicts => [newConflict, ...prevConflicts]); // Adiciona no início da lista
  };

  return (
    <div className="relative min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {conflicts.map((conflict) => (
          <ConflictCard key={conflict.id} conflict={conflict} />
        ))}
      </div>

      {/* Botão para adicionar novo conflito */}
      <button
        onClick={addConflict}
        className="fixed bottom-8 right-8 bg-button dark:bg-dark-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-button-hover dark:hover:bg-dark-primary transition-transform transform hover:scale-110"
        aria-label="Adicionar Conflito"
      >
        <span className="text-3xl font-light">+</span>
      </button>
    </div>
  );
}

export default Conflitos;