import BrandPage from "../components/BrandPage";

const Toyota = () => {
  return (
    <BrandPage
      name="Toyota"
      tagline="Let’s Go Places, Faster."
      background="/img/cars/toyota/toyota-supra.jpg"
      logo="/img/logos/toyota.png"
      about={`Toyota est un constructeur japonais de renommée mondiale, reconnu pour sa fiabilité, son innovation technologique et sa gamme hybride pionnière. 
      De la mythique Supra à la révolutionnaire Prius, Toyota allie performance et durabilité.`}
      history={`Fondée en 1937, Toyota est devenue un géant de l’automobile. Elle est l’une des premières marques à démocratiser l’hybride avec la Prius, 
      tout en marquant les esprits avec des modèles iconiques comme la Celica ou la Supra.`}
      figures={[
        { label: "Année de fondation", value: "1937" },
        { label: "Modèle le plus iconique", value: "Toyota Supra" },
        { label: "Véhicules hybrides vendus", value: "+20 millions" },
        { label: "Siège", value: "Toyota City, Japon" },
      ]}
      models={[
        {
          name: "Supra",
          image: "/img/cars/toyota/toyota-supra.jpg",
          link: "/marques/toyota/supra.html",
        },
        {
          name: "GR Yaris",
          image: "/img/cars/toyota/toyota-gr-yaris.jpg",
          link: "/marques/toyota/gr-yaris.html",
        },
      ]}
      funFacts={[
        "La GR Yaris a été développée avec les équipes du WRC (rallye mondial).",
        "La Supra MK4 est une légende du tuning et de Fast & Furious.",
        "Toyota a vendu plus de 20 millions de voitures hybrides dans le monde.",
      ]}
      brandModelsLink="/marques/toyota/models/toyota_models.html"
      palette={{
        accent: "#eb0a1e",         // Rouge Toyota
        background: "#1a1a1a",     // Fond global
        section: "#1f1f1f",        // Fond des sections textuelles
      }}
    />
  );
};

export default Toyota;