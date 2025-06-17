import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Marques from "./pages/Marques"; // ← ici

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marques" element={<Marques />} /> {/* ← ici */}
          <Route path="/search" element={<div className="text-white p-8">Recherche</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;