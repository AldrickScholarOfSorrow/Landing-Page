// Importa o React (necessário para JSX)
import React from "react";

// Componente principal da aplicação
function LandingPage() {
  return (
    // Div principal ocupa toda a tela em coluna (flex-col)
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="flex-grow flex flex-col items-center justify-center pt-24">
        {/* Espaço extra para compensar o header fixo (pt-24) */}

        {/* Placeholder da imagem central */}
        <div className="w-2/5 aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center">
          <span className="text-gray-500">[ Imagem Principal ]</span>
        </div>

        {/* Pequeno espaçamento abaixo da imagem */}
        <div className="my-12 w-3/4 border-t border-gray-200"></div>

        {/* ===== SEÇÃO "SOBRE NÓS" ===== */}
        <section id="sobre" className="max-w-3xl text-center px-4 pb-16">
          <h2 className="text-3xl font-semibold mb-6">Sobre o projeto</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Este projeto tem como objetivo criar uma plataforma que coleta e
            apresenta dados sobre conflitos globais em tempo real. Ele foi
            desenvolvido como parte de um projeto acadêmico e servirá como base
            para um sistema futuro de análise e visualização de dados. 
            Seu foco é o treino de uso pratico de multiplas ferramentas e sistemas
            para desenvolver um projeto de maneira individual dentro de prazos menores
          </p>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}

export default LandingPage;
