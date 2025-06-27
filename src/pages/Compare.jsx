import { useState } from "react";
import modelsData from "../data/modelsData";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis
} from 'recharts';

const parseNumber = (value) => {
  if (!value) return NaN;
  return Number(value.toString().replace(/\s/g, ""));
};

const ComparisonRow = ({ label, value1, value2, unit, inverse = false }) => {
  const n1 = parseNumber(value1);
  const n2 = parseNumber(value2);
  const best = inverse
    ? n1 < n2 ? "model1" : "model2"
    : n1 > n2 ? "model1" : "model2";

  return (
    <div className="flex justify-between px-4 py-2 border-b border-gray-700 text-sm">
      <div className={`w-1/2 text-center ${best === "model1" ? "text-green-400 font-semibold" : "text-gray-300"}`}>
        {value1} {unit}
      </div>
      <div className="w-1/2 text-center font-bold">{label}</div>
      <div className={`w-1/2 text-center ${best === "model2" ? "text-green-400 font-semibold" : "text-gray-300"}`}>
        {value2} {unit}
      </div>
    </div>
  );
};

const CustomRadarTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white text-black p-3 rounded-lg shadow-xl text-sm">
      <div className="font-bold mb-1">{label}</div>
      {payload.map((entry, index) => {
        const originalValue = entry.payload.originalValues?.[entry.name];
        return (
          <div key={index} style={{ color: entry.color }}>
            {entry.name} : {originalValue !== undefined ? originalValue : entry.value}
          </div>
        );
      })}
    </div>
  );
};

const Compare = () => {
  const [selectedModel1, setSelectedModel1] = useState(null);
  const [selectedModel2, setSelectedModel2] = useState(null);
  const [choosingFor, setChoosingFor] = useState(null);
  const [topLayer, setTopLayer] = useState("model1");
  const [selectedCategory, setSelectedCategory] = useState("prix");
  const [chartType, setChartType] = useState("radar");

  const handleModelSelect = (modelKey) => {
    const selected = modelsData[modelKey];
    if (choosingFor === "model1") setSelectedModel1(selected);
    else if (choosingFor === "model2") setSelectedModel2(selected);
    setChoosingFor(null);
  };

  const getCategoryData = () => {
    return [
      {
        name: selectedModel1.name,
        value: parseNumber(selectedModel1.specs[selectedCategory]),
      },
      {
        name: selectedModel2.name,
        value: parseNumber(selectedModel2.specs[selectedCategory]),
      },
    ];
  };

  const categoryLabels = {
    puissance: "Puissance (ch)",
    vitesseMax: "Vitesse max (km/h)",
    acceleration: "0-100 (sec)",
    poids: "Poids (kg)",
    prix: "Prix (€)",
  };

  const allModels = Object.entries(modelsData);

  const renderChart = () => {
    if (chartType === "radar") {
  const orderedModels = topLayer === "model1"
    ? [selectedModel1, selectedModel2]
    : [selectedModel2, selectedModel1];

  return (
    <>
      {/* Légende cliquable des modèles */}
      <div className="flex justify-center items-center gap-8 mb-4 text-sm text-gray-300 flex-wrap">
        <div
          onClick={() => setTopLayer("model1")}
          className={`flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform ${
            topLayer === "model1" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-[#e50914] inline-block"></span>
          <span>{selectedModel1.name}</span>
        </div>
        <div
          onClick={() => setTopLayer("model2")}
          className={`flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform ${
            topLayer === "model2" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-[#00b894] inline-block"></span>
          <span>{selectedModel2.name}</span>
        </div>
      </div>

      {/* Radar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" stroke="#ccc" />
          <PolarRadiusAxis stroke="#444" domain={[0, 1]} tickFormatter={(v) => `${Math.round(v * 100)}%`} />

          {orderedModels.map((model, idx) => (
            <Radar
              key={model.name}
              name={model.name}
              dataKey={model.name}
              stroke={idx === 0 ? "#e50914" : "#00b894"}
              fill={idx === 0 ? "#e50914" : "#00b894"}
              fillOpacity={0.8}
              strokeWidth={2}
              dot
            />
          ))}

          <Tooltip content={<CustomRadarTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
    } else if (chartType === "pie") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getCategoryData()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              <Cell fill="#e50914" />
              <Cell fill="#00b894" />
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                const label = categoryLabels[selectedCategory];
                return [`${Number(value).toLocaleString()}`, `${name} – ${label}`];
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "bar") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={getCategoryData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              formatter={(value, name) => {
                const label = categoryLabels[selectedCategory];
                return [`${Number(value).toLocaleString()}`, `${name} – ${label}`];
              }}
            />
            <Bar dataKey="value">
              <Cell fill="#e50914" />
              <Cell fill="#00b894" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };
  const radarData = [
  {
    metric: "Puissance",
    [selectedModel1.name]: Math.max(parseNumber(selectedModel1.specs.puissance) / 2000, 0.1),
    [selectedModel2.name]: Math.max(parseNumber(selectedModel2.specs.puissance) / 2000, 0.1),
    originalValues: {
      [selectedModel1.name]: selectedModel1.specs.puissance,
      [selectedModel2.name]: selectedModel2.specs.puissance,
    },
  },
  {
    metric: "Vitesse Max",
    [selectedModel1.name]: Math.max(parseNumber(selectedModel1.specs.vitesseMax) / 500, 0.1),
    [selectedModel2.name]: Math.max(parseNumber(selectedModel2.specs.vitesseMax) / 500, 0.1),
    originalValues: {
      [selectedModel1.name]: selectedModel1.specs.vitesseMax,
      [selectedModel2.name]: selectedModel2.specs.vitesseMax,
    },
  },
  {
    metric: "0-100",
    [selectedModel1.name]: Math.max(1 - parseNumber(selectedModel1.specs.acceleration) / 10, 0.1),
    [selectedModel2.name]: Math.max(1 - parseNumber(selectedModel2.specs.acceleration) / 10, 0.1),
    originalValues: {
      [selectedModel1.name]: selectedModel1.specs.acceleration,
      [selectedModel2.name]: selectedModel2.specs.acceleration,
    },
  },
  {
    metric: "Poids",
    [selectedModel1.name]: Math.max(1 - parseNumber(selectedModel1.specs.poids) / 2500, 0.1),
    [selectedModel2.name]: Math.max(1 - parseNumber(selectedModel2.specs.poids) / 2500, 0.1),
    originalValues: {
      [selectedModel1.name]: selectedModel1.specs.poids,
      [selectedModel2.name]: selectedModel2.specs.poids,
    },
  },
  {
    metric: "Prix",
    [selectedModel1.name]: Math.max(1 - parseNumber(selectedModel1.specs.prix) / 4000000, 0.1),
    [selectedModel2.name]: Math.max(1 - parseNumber(selectedModel2.specs.prix) / 4000000, 0.1),
    originalValues: {
      [selectedModel1.name]: selectedModel1.specs.prix,
      [selectedModel2.name]: selectedModel2.specs.prix,
    },
  },
];
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8 pt-28">
      <h1 className="text-4xl font-bold mb-12 text-center">Comparateur de Modèles</h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 mb-12">
        {selectedModel1
          ? (
            <div onClick={() => setSelectedModel1(null)} className="cursor-pointer w-full md:w-[48%]">
              <img src={selectedModel1.image} alt={selectedModel1.name} className="w-full h-64 object-cover rounded-2xl" />
              <div className="p-4 bg-[#1a1a1a] rounded-b-2xl">
                <h3 className="text-xl font-bold">{selectedModel1.brand} {selectedModel1.name}</h3>
              </div>
            </div>
          )
          : <div onClick={() => setChoosingFor("model1")} className="w-full md:w-[48%] border-dashed border-2 border-gray-600 h-[200px] flex items-center justify-center rounded-2xl cursor-pointer hover:bg-[#222]">+ Ajouter un modèle</div>
        }

        {selectedModel2
          ? (
            <div onClick={() => setSelectedModel2(null)} className="cursor-pointer w-full md:w-[48%]">
              <img src={selectedModel2.image} alt={selectedModel2.name} className="w-full h-64 object-cover rounded-2xl" />
              <div className="p-4 bg-[#1a1a1a] rounded-b-2xl">
                <h3 className="text-xl font-bold">{selectedModel2.brand} {selectedModel2.name}</h3>
              </div>
            </div>
          )
          : <div onClick={() => setChoosingFor("model2")} className="w-full md:w-[48%] border-dashed border-2 border-gray-600 h-[200px] flex items-center justify-center rounded-2xl cursor-pointer hover:bg-[#222]">+ Ajouter un modèle</div>
        }
      </div>

      {selectedModel1 && selectedModel2 && (
        <>
          <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <div className="px-6 py-4 text-center text-2xl font-bold border-b border-gray-600">
              Comparaison Détaillée
            </div>
            <div className="divide-y divide-gray-800">
              <ComparisonRow label="Puissance" value1={selectedModel1.specs.puissance} value2={selectedModel2.specs.puissance} unit="ch" />
              <ComparisonRow label="Vitesse max" value1={selectedModel1.specs.vitesseMax} value2={selectedModel2.specs.vitesseMax} unit="km/h" />
              <ComparisonRow label="0–100" value1={selectedModel1.specs.acceleration} value2={selectedModel2.specs.acceleration} unit="sec" inverse />
              <ComparisonRow label="Poids" value1={selectedModel1.specs.poids} value2={selectedModel2.specs.poids} unit="kg" inverse />
              <ComparisonRow label="Prix" value1={selectedModel1.specs.prix} value2={selectedModel2.specs.prix} unit="€" inverse />
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Visualisation des Données</h2>

            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-[#222] text-white px-4 py-2 rounded-lg border border-gray-600">
                <option value="prix">Prix</option>
                <option value="puissance">Puissance</option>
                <option value="vitesseMax">Vitesse max</option>
                <option value="acceleration">0-100</option>
                <option value="poids">Poids</option>
              </select>
              <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="bg-[#222] text-white px-4 py-2 rounded-lg border border-gray-600">
                <option value="radar">Radar</option>
                <option value="pie">Camembert</option>
                <option value="bar">Ligne</option>
              </select>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
              {renderChart()}
            </div>
          </div>
        </>
      )}

      {choosingFor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-center items-center p-8">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-h-[80vh] overflow-y-auto w-full max-w-4xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Choisis un modèle</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allModels.map(([key, model]) => (
                <div key={key} className="bg-[#222] hover:bg-[#333] p-3 rounded-lg cursor-pointer text-center transition" onClick={() => handleModelSelect(key)}>
                  <img src={model.image} alt={model.name} className="w-full h-24 object-contain mb-2" />
                  <h4 className="text-sm font-semibold">{model.name}</h4>
                  <p className="text-xs text-gray-400">{model.brand}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button onClick={() => setChoosingFor(null)} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;