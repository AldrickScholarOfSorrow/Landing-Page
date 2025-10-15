// Importa o React (necessário para JSX)
import React from "react";
import peacekeepersImage from "../assets/images/un-peacekeepers.jpg";

// O layout com Header e Footer é controlado pelo App.jsx
function LandingPage() {
  return (
    // Container para o conteúdo específico da Landing Page
    <div className="flex flex-col items-center justify-center text-primary dark:text-dark-text py-12 transition-colors">
      {/* Imagem central */}
      <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg mb-4">
        <img
          src={peacekeepersImage}
          alt="Soldados de paz da ONU (Capacetes Azuis) fazem patrulha em Bakouma, na República Centro-Africana, em meio ao contexto de violência de grupos armados durante as eleições."
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pequeno espaçamento abaixo da imagem */}
      <div className="my-12 w-3/4 border-t border-secondary/20 dark:border-dark-secondary/20 transition-colors"></div>

      {/* ===== SEÇÃO "SOBRE NÓS" ===== */}
      <section id="sobre" className="max-w-3xl text-center px-4 pb-16">
        <h2 className="text-3xl font-semibold mb-6">Sobre o Projeto</h2>
        <div className="text-lg leading-relaxed text-secondary dark:text-dark-text/80 transition-colors space-y-4">
          <p>
            Este site foi criado com o objetivo de oferecer acesso rápido, prático e confiável a informações sobre conflitos armados ao redor do mundo. A partir de dados atualizados de fontes públicas, como as APIs ACLED e Restcountries, você pode explorar resumos simples sobre os países envolvidos.
          </p>
          <p>
            A proposta é facilitar o entendimento de temas complexos por meio de uma apresentação clara, objetiva e acessível — tudo em português e sem a necessidade de cadastro.
          </p>
          <p>
            O site foi desenvolvido de forma independente, com foco em quem busca se informar de maneira rápida e descomplicada.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
