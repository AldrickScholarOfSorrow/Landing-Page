import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import LandingPage from "./pages/LandingPage";
import Conflitos from "./pages/Conflitos";
import Global from "./pages/Global";
import Teste from "./pages/Teste";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Este efeito aplica a classe 'dark' ao elemento <html>
  // sempre que o estado darkMode mudar.
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background dark:bg-dark-background">
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <main className="flex-grow pt-20 px-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/conflitos" element={<Conflitos />} />
            <Route path="/global" element={<Global />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
