import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-lime-800 text-white z-50 flex items-center justify-between px-8 py-4"
    >
      {/* Logo como link para a página inicial */}
      <Link to="/" className="text-xl font-bold hover:text-lime-200 transition-colors">
        LOGO
      </Link>

      {/* Links de navegação */}
      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className="font-medium px-4 py-2 rounded-md bg-stone-700 shadow-sm hover:bg-stone-600 transition-colors duration-200"
        >
          Início
        </Link>
        <Link
          to="/conflitos"
          className="font-medium px-4 py-2 rounded-md bg-stone-700 shadow-sm hover:bg-stone-600 transition-colors duration-200"
        >
          Conflitos
        </Link>
        <Link
          to="/global"
          className="font-medium px-4 py-2 rounded-md bg-stone-700 shadow-sm hover:bg-stone-600 transition-colors duration-200"
        >
          No mundo
        </Link>
      </nav>
    </header>
  );
}

export default Header;
