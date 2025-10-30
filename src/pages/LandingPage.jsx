// Importa o React (necessário para JSX)
import React from "react";
import peacekeepersImage from "../assets/images/un-peacekeepers.jpg";

// O layout com Header e Footer é controlado pelo App.jsx
function LandingPage() {
  return (
    // Container principal com padding e centralização
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Container do layout em coluna com espaçamento entre os elementos */}
      <div className="flex flex-col items-center justify-center gap-12">
        
        {/* ===== SEÇÃO "SOBRE NÓS" (agora sempre acima) ===== */}
        <section id="sobre" className="w-full text-primary dark:text-dark-text">
          <h2 className="text-3xl font-semibold mb-6 text-center">Sobre o Projeto</h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-secondary dark:text-dark-text/80 transition-colors space-y-4 text-center">
            <p>
              Este site foi criado para tornar o acesso à informação sobre conflitos armados mais aberto, direto e confiável. A partir de dados públicos e atualizados — de fontes como ACLED e RestCountries — você pode explorar resumos objetivos sobre países e eventos ao redor do mundo.
            </p>
            <p>
              O propósito é simples: oferecer fatos sem moldura, para que cada pessoa possa observar, refletir e tirar suas próprias conclusões. A informação só é livre quando pode ser interpretada sem intermediários.
            </p>
            <p>
              Desenvolvido de forma independente, este projeto é um convite à curiosidade crítica — para quem busca compreender o mundo com clareza, sem ruído e sem precisar se registrar para isso.
            </p>
          </div>
        </section>
        
        {/* Imagem (agora sempre abaixo) */}
        <div className="w-full max-w-4xl">
          <img
            src={peacekeepersImage}
            alt="Soldados de paz da ONU (Capacetes Azuis) fazem patrulha em Bakouma, na República Centro-Africana."
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
