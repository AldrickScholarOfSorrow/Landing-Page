import React, { useState, useEffect } from "react";

// Lista de regiões para seleção aleatória
const regions = [
  "Oriente Médio",
  "África Subsaariana",
  "Sudeste Asiático",
  "América do Sul",
  "Leste Europeu",
  "Norte da África",
  "Ásia Central",
];

function Global() {
  const [activeConflicts, setActiveConflicts] = useState(0);
  const [hottestRegion, setHottestRegion] = useState("");

  // Gera os dados aleatórios quando o componente é montado
  useEffect(() => {
    const conflictCount = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
    const region = regions[Math.floor(Math.random() * regions.length)];

    setActiveConflicts(conflictCount);
    setHottestRegion(region);
  }, []);

  return (
    <div className="flex flex-col items-center text-primary dark:text-dark-text py-12 transition-colors">
      <h2 className="text-3xl font-bold mb-8">Visão Global</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card para Número de Conflitos Ativos */}
        <div className="bg-background dark:bg-dark-primary p-6 rounded-lg shadow-lg border border-secondary/20 dark:border-dark-secondary/50 text-center">
          <h3 className="text-lg font-semibold text-secondary dark:text-dark-secondary mb-2">Número de Conflitos Ativos</h3>
          <p className="text-5xl font-bold text-primary dark:text-dark-text">{activeConflicts}</p>
        </div>

        {/* Card para Região Mais Ativa */}
        <div className="bg-background dark:bg-dark-primary p-6 rounded-lg shadow-lg border border-secondary/20 dark:border-dark-secondary/50 text-center">
          <h3 className="text-lg font-semibold text-secondary dark:text-dark-secondary mb-2">Onde mais acontece?</h3>
          <p className="text-3xl font-bold text-primary dark:text-dark-text">{hottestRegion}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-secondary/80 dark:text-dark-text/60">
        *Dados meramente ilustrativos para fins de demonstração.
      </p>
    </div>
  );
}

export default Global;