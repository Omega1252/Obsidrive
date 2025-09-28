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
import "leaflet/dist/leaflet.css";
import MapPage from "./pages/Map";
import Compare from './pages/Compare';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/marques", element: <Marques /> },
  { path: "/search", element: <Search /> },
  { path: "/carte", element: <MapPage /> },
  { path: "/comparateur", element: <Compare /> },
  { path: "/marques/:brandName/:modelsPage?", element: <DynamicBrandRoute /> },
  { path: "/modele/:modelName", element: <ModelPage /> }
];

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Navbar />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;