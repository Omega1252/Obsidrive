import BrandPage from "../components/BrandPage";

const Ford = () => {
  return (
    <BrandPage
      name="Ford"
      tagline="Go Further, Go Faster."
      background="/img/cars/ford/ford.jpg" // image fond = mustang
      logo="/img/logos/ford2.svg"
      about={`Ford est l’un des pionniers de l’automobile, reconnu pour son influence historique sur l’industrie 
      et pour ses modèles sportifs comme la Mustang ou la légendaire GT40. 
      La marque symbolise la puissance américaine et l’innovation.`}
      history={`Fondée en 1903 par Henry Ford, la marque a révolutionné l’automobile avec la production en série. 
      Ford a aussi marqué les esprits avec ses performances en endurance, notamment avec la mythique GT40 aux 24h du Mans.`}
      figures={[
        { label: "Année de fondation", value: "1903" },
        { label: "Modèle le plus iconique", value: "Ford Mustang" },
        { label: "Palmarès sportif", value: "Quadruple vainqueur du Mans" },
        { label: "Siège", value: "Dearborn, Michigan, USA" },
      ]}
      models={[
        {
          name: "Mustang",
          image: "/img/cars/ford/ford-mustang.jpg",
          link: "/marques/ford/mustang.html",
        },
        {
          name: "GT40",
          image: "/img/cars/ford/ford-gt40.jpg",
          link: "/marques/ford/gt40.html",
        },
        {
          name: "Shelby",
          image: "/img/cars/ford/ford-shelby.jpg",
          link: "/marques/ford/shelby.html",
        },
      ]}
      funFacts={[
        "La GT40 a battu Ferrari quatre fois d'affilée au Mans (1966-1969).",
        "La Mustang est l'une des sportives les plus vendues au monde.",
        "Ford a démocratisé la voiture avec la célèbre Ford T.",
      ]}
      brandModelsLink="/marques/ford/models/ford_models.html"
      palette={{
        accent: "#003399",       // Bleu Ford
        background: "#121212",   // Fond global
        section: "#1f1f1f",      // Fond des sections texte
      }}
    />
  );
};

export default Ford;