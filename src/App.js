import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marques from "./pages/Marques";
import BrandPage from "./components/BrandPage";
import brandsData from "./data/brandsData";
import DynamicBrandRoute from "./pages/DynamicBrandRoute";
import ModelPage from "./components/ModelPage";
import Search from "./pages/Search";
import "rc-slider/assets/index.css";

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marques" element={<Marques />} />
          <Route path="/search" element={<Search />} />

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

          {/* Dynamique : une route dédiée à chaque modèle de voiture */}
          <Route
            path="/modele/:modelName"
            element={<ModelPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;