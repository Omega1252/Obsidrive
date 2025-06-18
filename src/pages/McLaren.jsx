import BrandPage from "../components/BrandPage";

const McLaren = () => {
  return (
    <BrandPage
      name="McLaren"
      tagline="Innovation. Performance. Legacy."
      background="/img/cars/mclaren/mclaren.jpg"
      logo="/img/logos/mclaren.svg"
      palette={{
        accent: "#ff6c00",
        background: "#0f0f0f",
      }}
      about={`Fondée en 1963 par Bruce McLaren, la marque britannique s’est imposée dans le sport auto avant de révolutionner le monde des supercars.
Chaque McLaren incarne la précision technologique et l’aérodynamisme extrême, dérivé de la F1.`}
      history={`D’abord écurie de Formule 1, McLaren a brillé avec des légendes comme Ayrton Senna. 
En 1992, elle crée la McLaren F1, considérée comme l’une des meilleures voitures de tous les temps. 
Aujourd’hui, McLaren continue d’innover avec des modèles comme la P1 hybride ou la Senna.`}
      figures={[
        { label: "Année de fondation", value: "1963" },
        { label: "Chevaux max", value: "1 055 ch (Speedtail)" },
        { label: "Vitesse max", value: "403 km/h (Speedtail)" },
        { label: "Siège", value: "Woking, Angleterre" },
      ]}
      models={[
        {
          name: "McLaren F1",
          image: "/img/cars/mclaren/mclaren-f1.jpg",
          link: "/models/mclaren/f1.html",
        },
        {
          name: "P1",
          image: "/img/cars/mclaren/mclaren-p1.jpg",
          link: "/models/mclaren/p1.html",
        },
        {
          name: "Senna",
          image: "/img/cars/mclaren/mclaren.jpg",
          link: "/models/mclaren/senna.html",
        },
      ]}
      brandModelsLink="/models/mclaren_models.html"
      funFacts={[
        "La McLaren F1 détient toujours le record de la voiture atmosphérique la plus rapide du monde (386 km/h).",
        "La position de conduite centrale de la F1 est inspirée des voitures de course.",
        "McLaren développe tous ses modèles dans son propre centre technologique à Woking.",
      ]}
    />
  );
};

export default McLaren;