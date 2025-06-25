import { useEffect, useState } from "react";

const loadingTexts = [
  "Chargement des bolides...",
  "Préparation du moteur...",
  "Démarrage imminent...",
];

const Loader = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Fond lumineux stylé */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e5091415,_transparent_70%)] pointer-events-none" />

      {/* Barre de progression */}
      <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden mb-6 border border-[#e50914]">
        <div className="h-full bg-[#e50914] animate-loading-bar" />
      </div>

      {/* Texte dynamique */}
      <p className="text-lg text-white font-medium animate-fade">{loadingTexts[step]}</p>
    </div>
  );
};

export default Loader;