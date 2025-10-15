import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-dark-primary text-white z-50 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Container para logo e navegação principal (desktop) */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold hover:text-background dark:hover:text-dark-secondary transition-colors">
              LOGO
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="font-medium px-3 py-2 rounded-md bg-secondary dark:bg-dark-secondary shadow-sm hover:bg-button-hover dark:hover:bg-dark-primary transition-colors duration-200">
                  Início
                </Link>
                <Link to="/conflitos" className="font-medium px-3 py-2 rounded-md bg-secondary dark:bg-dark-secondary shadow-sm hover:bg-button-hover dark:hover:bg-dark-primary transition-colors duration-200">
                  Conflitos
                </Link>
                <Link to="/global" className="font-medium px-3 py-2 rounded-md bg-secondary dark:bg-dark-secondary shadow-sm hover:bg-button-hover dark:hover:bg-dark-primary transition-colors duration-200">
                  No mundo
                </Link>
              </div>
            </div>
          </div>

          {/* Botão de modo escuro (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md bg-secondary dark:bg-dark-secondary text-white shadow-sm hover:bg-button-hover dark:hover:bg-dark-primary focus:outline-none transition-colors"
              aria-label="Alternar tema"
            >
              {/* Ícone de Sol */}
              <svg className={`${darkMode ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Ícone de Lua */}
              <svg className={`${darkMode ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>

          {/* Controles da direita (mobile) */}
          <div className="flex items-center md:hidden">
            {/* Botão de modo escuro (mobile) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-dark-primary focus:outline-none"
            >
              <span className="sr-only">Alternar tema</span>
              {/* Ícone de Sol */}
              <svg className={`${darkMode ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Ícone de Lua */}
              <svg className={`${darkMode ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Botão Hambúrguer */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-dark-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {/* Ícone de hambúrguer ou 'X' */}
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:bg-dark-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Início</Link>
            <Link to="/conflitos" className="text-gray-300 hover:bg-dark-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Conflitos</Link>
            <Link to="/global" className="text-gray-300 hover:bg-dark-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">No mundo</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
