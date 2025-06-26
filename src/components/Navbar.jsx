import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-black/50 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex justify-between items-center z-50">
      <div className="text-white text-xl font-bold">Obsidrive</div>

      <ul className="flex gap-8 items-center">
        <li>
        <Link to="/comparateur" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
          Comparateur
        </Link>
      </li>
        <li>
          <Link to="/carte" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Carte
          </Link>
        </li>
        <li>
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/marques" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Marques
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img
              src="/img/search-icon.png"
              alt="Recherche"
              className="w-5 h-5 invert hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;