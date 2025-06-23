// src/components/ModelPage.jsx
import { useParams } from "react-router-dom";
import modelsData from "../data/modelsData";
import { useEffect } from "react";

function ModelPage() {
  const { modelName } = useParams();

  const allModels = Object.values(modelsData);
  const model = allModels.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === modelName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!model) {
    return <div className="text-white p-10">Modèle introuvable</div>;
  }

  // helpers pour ajouter les unités automatiquement
  const formatValue = (label, value) => {
    if (!value) return "—";
    switch (label) {
      case "puissance":
        return `${value} ch`;
      case "vitesseMax":
        return `${value} km/h`;
      case "acceleration":
        return `${value} s (0-100 km/h)`;
      case "poids":
        return `${value} kg`;
      case "production":
        return `${value} exemplaires`;
      case "prix":
        return `${value} €`;
      default:
        return value;
    }
  };

  return (
    <div className="text-white">
      {/* Hero Section avec overlay */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${model.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-4">
          <img src={model.logo} alt={model.brand} className="w-32 mb-6 drop-shadow-xl" />
          <h1 className="text-5xl font-bold drop-shadow-lg mb-4">{model.name}</h1>
          <p className="text-xl drop-shadow-md">{model.description}</p>
        </div>
      </div>

      {/* Contenu texte */}
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold border-b border-white pb-2">Spécifications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <li><strong>Puissance :</strong> {formatValue("puissance", model.specs.puissance)}</li>
          <li><strong>Vitesse max :</strong> {formatValue("vitesseMax", model.specs.vitesseMax)}</li>
          <li><strong>Accélération :</strong> {formatValue("acceleration", model.specs.acceleration)}</li>
          <li><strong>Moteur :</strong> {model.specs.moteur}</li>
          <li><strong>Transmission :</strong> {model.specs.transmission}</li>
          <li><strong>Poids :</strong> {formatValue("poids", model.specs.poids)}</li>
          <li><strong>Production :</strong> {formatValue("production", model.specs.production)}</li>
          <li><strong>Année :</strong> {model.specs.annee}</li>
          <li><strong>Prix :</strong> {formatValue("prix", model.specs.prix)}</li>
        </ul>

        {model.funFacts && model.funFacts.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mt-10 border-b border-white pb-2">Fun Facts</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              {model.funFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ModelPage;