/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,cjs}"
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro
        primary: "#556B2F",          // verde militar
        secondary: "#8B6B4F",        // marrom suave
        background: "#F0EFE9",       // bege claro
        button: "#6B8E23",           // verde botão
        "button-hover": "#556B2F",   // hover verde escuro

        // Tema escuro (Militar Urbano)
        dark: {
          primary: '#374151',      // Cinza escuro
          secondary: '#64748b',    // Azul acinzentado mais claro
          background: '#000000',   // Preto
          text: '#D1D5DB'          // Cinza claro para textos
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
