import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import brandsData from "../data/brandsData";
import BrandPage from "../components/BrandPage";
import BrandAllModelsPage from "../components/BrandAllModelsPage";
import BrandLoader from "../components/BrandLoader";

const DynamicBrandRoute = () => {
  const { brandName, modelsPage } = useParams();
  const [loading, setLoading] = useState(true);

  const brandKey = Object.keys(brandsData).find(
    (key) => key.toLowerCase() === brandName?.toLowerCase()
  );

  const brand = brandsData[brandKey];

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, modelsPage ? 0 : 3000); // ← 3s car c’est la durée de l’animation

    return () => clearTimeout(timer);
  }, [brandName, modelsPage]);

  // ⚠️ si la marque n'existe pas
  if (!brandKey) {
    return <div className="text-white p-10">Marque inconnue.</div>;
  }

  // ✅ Affiche le loader sur la page principale de la marque
  if (loading && !modelsPage) {
    return (
      <BrandLoader
        logo={brand.logo}
        brandName={brand.name}
        brandColor={brand.palette.accent}
        onFinish={() => setLoading(false)}
      />
    );
  }

  // ✅ Page des modèles (pas de loader)
  if (modelsPage && brand.allModels) {
    return (
      <BrandAllModelsPage
        brand={brand.name}
        palette={brand.palette}
        models={brand.allModels}
      />
    );
  }

  // ✅ Page principale de la marque
  return <BrandPage {...brand} />;
};

export default DynamicBrandRoute;