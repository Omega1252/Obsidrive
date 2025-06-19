import { useParams } from "react-router-dom";
import brandsData from "../data/brandsData";
import BrandPage from "../components/BrandPage";
import BrandAllModelsPage from "../components/BrandAllModelsPage";

const DynamicBrandRoute = () => {
  const { brandName, modelsPage } = useParams();
  const brandKey = Object.keys(brandsData).find(
    (key) => key.toLowerCase() === brandName?.toLowerCase()
  );

  if (!brandKey) return <div className="text-white p-10">Marque inconnue.</div>;

  const brand = brandsData[brandKey];

  // Si URL comme /marques/ferrari/models
  if (modelsPage && brand.allModels) {
    return (
      <BrandAllModelsPage
        brand={brand.name}
        palette={brand.palette}
        models={brand.allModels}
      />
    );
  }

  return <BrandPage {...brand} />;
};

export default DynamicBrandRoute;