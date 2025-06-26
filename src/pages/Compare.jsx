import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import modelsData from "../data/modelsData"; // doit contenir les données type Murciélago

const Compare = () => {
  const [selectedModels, setSelectedModels] = useState([]);

  // Convertir les données textuelles en nombres exploitables
  const parseSpecs = (model) => {
    const parse = (val) => parseFloat(val.replace(/\s/g, "").replace(",", "."));
    return {
      name: model.name,
      puissance: parse(model.specs.puissance),
      vitesseMax: parse(model.specs.vitesseMax),
      acceleration: parse(model.specs.acceleration),
      poids: parse(model.specs.poids),
      production: parse(model.specs.production),
      prix: parse(model.specs.prix)
    };
  };

  const modelOptions = Object.entries(modelsData).map(([key, value]) => ({
    label: value.name,
    value: key,
    image: value.image
  }));

  const toggleModel = (modelKey) => {
    setSelectedModels((prev) =>
      prev.includes(modelKey)
        ? prev.filter((m) => m !== modelKey)
        : prev.length < 3
        ? [...prev, modelKey]
        : prev
    );
  };

  const selectedParsed = selectedModels.map((key) => parseSpecs(modelsData[key]));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-24 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Comparateur de Modèles</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {modelOptions.map((model) => (
          <div
            key={model.value}
            onClick={() => toggleModel(model.value)}
            className={`w-32 h-32 bg-white/10 rounded-lg p-2 cursor-pointer border-2 transition-all hover:scale-105 flex flex-col items-center justify-center gap-2 ${
              selectedModels.includes(model.value)
                ? "border-[#e50914]"
                : "border-transparent"
            }`}
          >
            <img src={model.image} alt={model.label} className="w-full h-20 object-cover rounded" />
            <span className="text-sm text-center">{model.label}</span>
          </div>
        ))}
      </div>

      {selectedModels.length > 0 && (
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Comparaison Graphique</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedParsed} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="puissance" fill="#e50914" name="Puissance (ch)" />
              <Bar dataKey="vitesseMax" fill="#007aff" name="Vitesse max (km/h)" />
              <Bar dataKey="poids" fill="#00c49f" name="Poids (kg)" />
              <Bar dataKey="acceleration" fill="#ffbb28" name="0-100 (s)" />
              <Bar dataKey="prix" fill="#8884d8" name="Prix (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Compare;