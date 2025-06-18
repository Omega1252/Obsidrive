import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FerrariPage from "./pages/Ferrari";//ajouter ca pour chaques nouvelles routes
import LamborghiniPage from "./pages/Lamborghini";
import BugattiPage from "./pages/Bugatti";
import McLarenPage from "./pages/McLaren";
import BMWPage from "./pages/BMW";
import AudiPage from "./pages/Audi";
import MercedesPage from "./pages/Mercedes";
import PaganiPage from "./pages/Pagani";
import BrabusPage from "./pages/Brabus";
import RollsRoycePage from "./pages/Rolls-Royce";
import PorschePage from "./pages/Porsche";
import AstonMartinPage from "./pages/Aston-Martin";
import ChevroletPage from "./pages/Chevrolet";
import DodgePage from "./pages/Dodge";
import NissanPage from "./pages/Nissan";
import ToyotaPage from "./pages/Toyota";
import FordPage from "./pages/Ford";
import KoenigseggPage from "./pages/Koenigsegg";
import HennesseyPage from "./pages/Hennessey";
import ApolloPage from "./pages/Apollo";

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
          <Route path="/marques/Ferrari" element={<FerrariPage />} /> {/* Faut aussi metre ca la */}
          <Route path="/marques/Lamborghini" element={<LamborghiniPage />} />
          <Route path="/marques/Bugatti" element={<BugattiPage />} />
          <Route path="/marques/McLaren" element={<McLarenPage />} />
          <Route path="/marques/BMW" element={<BMWPage/>} />
          <Route path="/marques/Audi" element={<AudiPage/>} />
          <Route path="/marques/Mercedes" element={<MercedesPage/>} />
          <Route path="/marques/Pagani" element={<PaganiPage/>} />
          <Route path="/marques/Brabus" element={<BrabusPage/>} />
          <Route path="/marques/Rolls-Royce" element={<RollsRoycePage/>} />
          <Route path="/marques/Porsche" element={<PorschePage/>} />
          <Route path="/marques/Aston-Martin" element={<AstonMartinPage/>} />
          <Route path="/marques/Chevrolet" element={<ChevroletPage/>} />
          <Route path="/marques/Dodge" element={<DodgePage/>} />
          <Route path="/marques/Nissan" element={<NissanPage/>} />
          <Route path="/marques/Toyota" element={<ToyotaPage/>} />
          <Route path="/marques/Ford" element={<FordPage/>} />
          <Route path="/marques/Koenigsegg" element={<KoenigseggPage/>} />
          <Route path="/marques/Hennessey" element={<HennesseyPage/>} />
          <Route path="/marques/Apollo" element={<ApolloPage/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;