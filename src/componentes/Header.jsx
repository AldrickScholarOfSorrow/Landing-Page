import React from "react";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 flex items-center gap-8 px-8 py-4"
    >
      {/* Placeholder da logo (pode trocar por uma imagem depois) */}
      <div className="text-xl font-bold">LOGO</div>

      {/* Link que leva até a seção "Sobre Nós" */}
      <nav>
        <a
          href="#sobre"
          className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Sobre o projeto
        </a>
      </nav>
    </header>
  );
}

export default Header;
