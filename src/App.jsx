import { BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import Conflitos from "./pages/Conflitos";
import Global from "./pages/Global";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";  

function App() {
  return(
    <Router>
      {/* Estrutura principal para manter o footer no final da página */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20"> {/* Adiciona padding para o header fixo */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/conflitos" element={<Conflitos />} />
            <Route path="/global" element={<Global />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default App;