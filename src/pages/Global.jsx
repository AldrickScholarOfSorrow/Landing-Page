import React, { useState, useEffect } from "react";

function Global() {
  const [stats, setStats] = useState({ total_conflitos: 0, regiao_mais_ativa: "..." });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://landing-page-sigma-eosin.vercel.app/api/conflicts/stats"); // Esta já estava correta, sem a barra
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStats(data);
      } catch (e) {
        setError("Não foi possível carregar as estatísticas.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center text-primary dark:text-dark-text py-12 transition-colors">
      <h2 className="text-3xl font-bold mb-8">Visão Global</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card para Número de Conflitos Ativos */}
        <div className="bg-background dark:bg-dark-primary p-6 rounded-lg shadow-lg border border-secondary/20 dark:border-dark-secondary/50 text-center">
          <h3 className="text-lg font-semibold text-secondary dark:text-dark-secondary mb-2">Número de Conflitos Ativos</h3>
          <p className="text-5xl font-bold text-primary dark:text-dark-text">
            {loading ? "..." : stats.total_conflitos}
          </p>
        </div>

        {/* Card para Região Mais Ativa */}
        <div className="bg-background dark:bg-dark-primary p-6 rounded-lg shadow-lg border border-secondary/20 dark:border-dark-secondary/50 text-center">
          <h3 className="text-lg font-semibold text-secondary dark:text-dark-secondary mb-2">Onde mais acontece?</h3>
          <p className="text-3xl font-bold text-primary dark:text-dark-text">
            {loading ? "..." : stats.regiao_mais_ativa}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Global;