import BrandSlide from "../components/BrandSlide";
import brandsData from "../data/brandsData"; // ← ici on importe le vrai fichier objet

const Marques = () => {
  return (
    <div>
      {Object.entries(brandsData).map(([key, brand]) => (
        <BrandSlide
          key={key}
          name={brand.name}
          tagline={brand.tagline}
          background={brand.background}
          logo={brand.logo}
          link={`/marques/${key.toLowerCase()}`}
        />
      ))}
    </div>
  );
};

export default Marques;