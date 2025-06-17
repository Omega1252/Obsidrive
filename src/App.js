import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home"; // 👈 nouvelle page d'accueil

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen pt-20">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marques" element={<div className="text-white p-8">Marques</div>} />
          <Route path="/search" element={<div className="text-white p-8">Recherche</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;