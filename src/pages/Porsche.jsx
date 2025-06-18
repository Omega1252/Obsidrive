import BrandPage from "../components/BrandPage";

const Porsche = () => {
  return (
    <BrandPage
      name="Porsche"
      tagline="Ingénierie de précision. Esprit de compétition."
      background="/img/cars/porsche/porsche.jpg" // image principale = fond par défaut
      logo="/img/logos/porsche2.jpg"
      about={`Fondée en 1931 par Ferdinand Porsche, la marque est aujourd’hui l’un des piliers mondiaux du sport automobile. 
      Porsche incarne la fusion entre l’innovation technique, le design intemporel et l’héritage de la compétition.`}
      history={`Du lancement de la 356 à l’icône 911, Porsche a marqué chaque décennie par son excellence. 
      Avec une présence constante en endurance et en rallye, la marque a façonné son ADN autour de la performance.
      Aujourd’hui, elle se réinvente avec des modèles électriques comme la Taycan, sans jamais trahir son identité.`}
      figures={[
        { label: "Année de fondation", value: "1931" },
        { label: "Modèle le plus emblématique", value: "911" },
        { label: "Victoires en endurance", value: "+700" },
        { label: "Siège", value: "Stuttgart, Allemagne" },
      ]}
      models={[
        {
          name: "911",
          image: "/img/cars/porsche/porsche-911.jpg",
          link: "/marques/porsche/911.html",
        },
        {
          name: "Taycan",
          image: "/img/cars/porsche/porsche-taycan.jpg",
          link: "/marques/porsche/taycan.html",
        },
        {
          name: "918 Spyder",
          image: "/img/cars/porsche/porsche-918.jpg",
          link: "/marques/porsche/918.html",
        },
      ]}
      funFacts={[
        "La 911 a connu plus de 1 000 déclinaisons depuis sa sortie en 1964.",
        "Porsche a développé le tout premier moteur hybride en... 1900 !",
        "La Taycan a été la première voiture à charger à plus de 270 kW.",
      ]}
      brandModelsLink="/marques/porsche/models/porsche_models.html"
      palette={{
        accent: "#d5001c",       // Rouge Porsche
        background: "#161616",   // Noir graphite
      }}
    />
  );
};

export default Porsche;