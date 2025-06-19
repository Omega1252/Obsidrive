import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marques from "./pages/Marques";
import BrandPage from "./components/BrandPage";
import brandsData from "./data/brandsData";
import DynamicBrandRoute from "./pages/DynamicBrandRoute";

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marques" element={<Marques />} />
          <Route path="/search" element={<div className="text-white p-8">Recherche</div>} />

          {/* Dynamique : une seule route pour toutes les marques */}
          <Route
            path="/marques/:brandName"
            element={<DynamicBrandRoute />}
          />

          {/* Dynamique : une seule route pour les modèles de chaque marque */}
          <Route
            path="/marques/:brandName/:modelsPage"
            element={<DynamicBrandRoute />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;