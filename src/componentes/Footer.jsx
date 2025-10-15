import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4 text-sm border-t bg-background text-primary/80 border-secondary/20 dark:bg-dark-primary dark:text-dark-text/80 dark:border-dark-secondary transition-colors">
      <div className="space-y-1">
        <p>Projeto acadêmico — Engenharia de Dados</p>
        <p>
          Crédito da Imagem:{" "}
          <a href="https://news.un.org/pt/story/2021/08/1758852" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary dark:hover:text-dark-secondary">
            MINUSCA/Herve Cyriauqe Serefio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;