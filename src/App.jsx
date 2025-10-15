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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conflitos" element={<Conflitos />} />
          <Route path="/global" element={<Global />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );

}

export default App;