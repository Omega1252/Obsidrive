import { useEffect, useState } from "react";
import modelsData from "../data/modelsData";
import Loader from "../components/Loader";

const Search = () => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // ou "asc"
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [brandFilter, setBrandFilter] = useState("");
  const [power, setPower] = useState({ min: 50, max: 2000 });
  const [speed, setSpeed] = useState({ min: 80, max: 600 });
  const [accel, setAccel] = useState({ min: 1.2, max: 20 });
  const [weight, setWeight] = useState({ min: 500, max: 3000 });
  const [production, setProduction] = useState({ min: 1, max: 20000 });
  const [year, setYear] = useState({ min: 1950, max: 2025 });
  const [price, setPrice] = useState({ min: 10000, max: 10000000 });

  const allModels = Object.values(modelsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // ← ici
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const results = allModels.filter((model) => {
      const nameMatch = model.name.toLowerCase().includes(query);
      const brandMatch = model.brand.toLowerCase().includes(query);

      const puissance = parseInt(model.specs.puissance.replace(/\s/g, ""));
      const vitesseMax = parseInt(model.specs.vitesseMax.replace(/\s/g, ""));
      const accelVal = parseFloat(model.specs.acceleration);
      const poids = parseInt(model.specs.poids.replace(/\s/g, ""));
      const productionVal = parseInt(model.specs.production.replace(/\s/g, ""));
      const annee = parseInt(model.specs.annee);
      const prix = parseInt(model.specs.prix.replace(/\s/g, ""));

      if (
        isNaN(puissance) ||
        isNaN(vitesseMax) ||
        isNaN(accelVal) ||
        isNaN(poids) ||
        isNaN(productionVal) ||
        isNaN(annee) ||
        isNaN(prix)
      ) {
        return false;
      }

      if (brandFilter && model.brand !== brandFilter) return false;
      if (puissance < power.min || puissance > power.max) return false;
      if (vitesseMax < speed.min || vitesseMax > speed.max) return false;
      if (accelVal < accel.min || accelVal > accel.max) return false;
      if (poids < weight.min || poids > weight.max) return false;
      if (productionVal < production.min || productionVal > production.max) return false;
      if (annee < year.min || annee > year.max) return false;
      if (prix < price.min || prix > price.max) return false;

      return nameMatch || brandMatch;
    });

    let sortedResults = [...results];

    if (sortBy) {
      sortedResults.sort((a, b) => {
        const getVal = (model) => {
          const val = model.specs[sortBy]?.replace(/\s/g, "").replace(",", ".");
          return isNaN(val) ? 0 : parseFloat(val);
        };

        const aVal = getVal(a);
        const bVal = getVal(b);
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      });
    }

    setFilteredModels(sortedResults);
  }, [
    searchQuery,
    brandFilter,
    power,
    speed,
    accel,
    weight,
    production,
    year,
    price,
    sortBy,
    sortOrder,
  ]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans px-6 pt-24 pb-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Recherche de modèles</h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Rechercher un modèle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#e50914]"
          />
          <img
            src="/img/search-icon.png"
            alt="search"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-80 filter brightness-0 invert"
          />
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="px-6 py-2 bg-[#e50914] hover:bg-red-600 rounded text-white font-semibold transition"
        >
          {showFilters ? "Masquer les filtres ▲" : "Afficher les filtres ▼"}
        </button>
      </div>

      {showFilters && (
        <div className="bg-[#1a1a1a] p-4 rounded-lg mb-8 space-y-6">
          <div>
            <label className="text-sm">Marque</label>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#0f0f0f] text-white border border-neutral-700"
            >
              <option value="">Toutes</option>
              {[...new Set(allModels.map((m) => m.brand))].map((brand, i) => (
                <option key={i} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Filtres groupés par catégorie */}
          <details className="group">
            <summary className="cursor-pointer text-lg font-semibold text-white py-2 px-4 bg-[#151515] rounded hover:bg-[#202020]">
              Moteur / Performance
            </summary>
            <div className="mt-4 px-4 space-y-4">
              <DoubleInput label="Puissance (ch)" value={power} onChange={setPower} min={50} max={2000} />
              <DoubleInput label="Vitesse max (km/h)" value={speed} onChange={setSpeed} min={80} max={600} />
              <DoubleInput label="Accélération (s)" value={accel} onChange={setAccel} min={1.2} max={20} />
            </div>
          </details>

          <details className="group mt-4">
            <summary className="cursor-pointer text-lg font-semibold text-white py-2 px-4 bg-[#151515] rounded hover:bg-[#202020]">
              Gabarit / Production
            </summary>
            <div className="mt-4 px-4 space-y-4">
              <DoubleInput label="Poids (kg)" value={weight} onChange={setWeight} min={500} max={3000} />
              <DoubleInput label="Production (ex.)" value={production} onChange={setProduction} min={1} max={20000} />
            </div>
          </details>

          <details className="group mt-4">
            <summary className="cursor-pointer text-lg font-semibold text-white py-2 px-4 bg-[#151515] rounded hover:bg-[#202020]">
              Historique
            </summary>
            <div className="mt-4 px-4 space-y-4">
              <DoubleInput label="Année" value={year} onChange={setYear} min={1950} max={2025} />
              <DoubleInput label="Prix (€)" value={price} onChange={setPrice} min={10000} max={10000000} />
            </div>
          </details>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <label htmlFor="sortBy" className="text-sm font-medium text-white">
            Trier par :
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded bg-[#1a1a1a] text-white border border-neutral-700"
          >
            <option value="">-- Aucun --</option>
            <option value="puissance">Puissance</option>
            <option value="vitesseMax">Vitesse max</option>
            <option value="acceleration">Accélération</option>
            <option value="poids">Poids</option>
            <option value="production">Production</option>
            <option value="annee">Année</option>
            <option value="prix">Prix</option>
          </select>

          {sortBy && (
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="px-2 py-1 bg-[#e50914] hover:bg-red-600 rounded text-sm text-white transition"
            >
              {sortOrder === "asc" ? "↑ Croissant" : "↓ Décroissant"}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredModels.length === 0 ? (
          <div className="text-center col-span-full text-gray-500">
            Aucun résultat trouvé.
          </div>
        ) : (
          filteredModels.map((model, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{model.name}</h2>
                <p className="text-sm text-gray-400 mb-2">{model.brand}</p>
                <a
                  href={`/modele/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block mt-2 px-4 py-2 bg-[#e50914] hover:bg-red-600 rounded text-white text-sm font-semibold transition"
                >
                  Voir plus
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const DoubleInput = ({ label, value, onChange, min, max }) => {
  const [inputMin, setInputMin] = useState(value.min.toString());
  const [inputMax, setInputMax] = useState(value.max.toString());
  const [errorMin, setErrorMin] = useState("");
  const [errorMax, setErrorMax] = useState("");
  const handleChange = (e, type) => {
    const val = e.target.value;
    const raw = val.replace(/\s/g, "").replace(",", ".");

    if (type === "min") {
      setInputMin(val);
      const num = parseFloat(raw);
      if (!isNaN(num) && num >= min && num <= max) {
        setErrorMin("");
        onChange({ ...value, min: num });
      } else {
        setErrorMin("Valeur invalide");
      }
    }

    if (type === "max") {
      setInputMax(val);
      const num = parseFloat(raw);
      if (!isNaN(num) && num >= min && num <= max) {
        setErrorMax("");
        onChange({ ...value, max: num });
      } else {
        setErrorMax("Valeur invalide");
      }
    }
  };

  return (
    <div>
      <label className="text-sm font-medium block mb-1">
        {label} <span className="text-gray-400 text-xs">({min.toLocaleString("fr-FR")}–{max.toLocaleString("fr-FR")})</span>
      </label>
      <div className="flex gap-2">
        <div className="w-1/2">
          <input
            type="text"
            value={inputMin}
            onChange={(e) => handleChange(e, "min")}
            className="w-full px-3 py-2 rounded bg-[#0f0f0f] text-white border border-neutral-700"
          />
          {errorMin && <p className="text-sm text-red-500 mt-1">{errorMin}</p>}
        </div>

        <div className="w-1/2">
          <input
            type="text"
            value={inputMax}
            onChange={(e) => handleChange(e, "max")}
            className="w-full px-3 py-2 rounded bg-[#0f0f0f] text-white border border-neutral-700"
          />
          {errorMax && <p className="text-sm text-red-500 mt-1">{errorMax}</p>}
        </div>
      </div>
    </div>
  );
};

export default Search;