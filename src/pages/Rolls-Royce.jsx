import BrandPage from "../components/BrandPage";

const RollsRoyce = () => {
  return (
    <BrandPage
      name="Rolls-Royce"
      tagline="La quintessence du raffinement automobile"
      background="/img/cars/Rolls-royce/rolls-royce.jpg" // image principale utilisée comme fond
      logo="/img/logos/rolls-royce2.svg"
      about={`Fondée au début du XXe siècle, Rolls-Royce incarne l’excellence, le confort et la sophistication extrême.
      Chaque voiture est construite sur-mesure, mêlant haute couture automobile et innovation silencieuse.`}
      history={`En 1904, Charles Rolls et Henry Royce s’associent pour créer ce qui allait devenir une légende de l’automobile de luxe.
      Connue d’abord pour ses moteurs d’aviation, la marque s’est illustrée par des modèles mythiques comme la Phantom ou la Silver Ghost.
      Aujourd’hui, Rolls-Royce allie artisanat classique et technologies du futur.`}
      figures={[
        { label: "Année de fondation", value: "1904" },
        { label: "Modèle phare", value: "Phantom VIII" },
        { label: "Production annuelle", value: "Environ 6 000 véhicules" },
        { label: "Siège", value: "Goodwood, Angleterre" },
      ]}
      models={[
        {
          name: "Phantom",
          image: "/img/cars/Rolls-royce/rolls-phantom.jpg",
          link: "/marques/rolls-royce/phantom.html",
        },
        {
          name: "Ghost",
          image: "/img/cars/Rolls-royce/rolls-ghost.jpg",
          link: "/marques/rolls-royce/ghost.html",
        },
        {
          name: "Spectre",
          image: "/img/cars/Rolls-royce/rolls-spectre.jpg",
          link: "/marques/rolls-royce/spectre.html",
        },
      ]}
      funFacts={[
        "Chaque Rolls-Royce contient de la laine et du bois rares travaillés à la main.",
        "Le célèbre “Spirit of Ecstasy” est un emblème qui se rétracte automatiquement.",
        "Rolls-Royce Spectre est le premier modèle 100% électrique de la marque.",
      ]}
      brandModelsLink="/marques/rolls-royce/models/rollsroyce_models.html"
      palette={{
        accent: "#3b235f",       // violet royal
        background: "#121212",   // noir profond
      }}
    />
  );
};

export default RollsRoyce;