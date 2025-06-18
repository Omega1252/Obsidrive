import BrandPage from "../components/BrandPage";

const Dodge = () => {
  return (
    <BrandPage
      name="Dodge"
      tagline="Domestic. Not Domesticated."
      background="/img/cars/Dodge/dodge.jpg" // fond basé sur le modèle iconique
      logo="/img/logos/dodge2.svg"
      about={`Dodge est l'incarnation de la puissance brute et du style américain. 
      Connue pour ses muscle cars iconiques comme la Charger ou la Challenger, la marque repousse les limites en matière de performance et de caractère.`}
      history={`Fondée en 1900 par les frères Dodge, la marque a d'abord produit des composants pour Ford avant de lancer ses propres véhicules. 
      Aujourd’hui, Dodge est célèbre pour ses V8 HEMI, ses looks agressifs et sa philosophie « anti-conventionnelle ».`}
      figures={[
        { label: "Année de fondation", value: "1900" },
        { label: "Modèle le plus puissant", value: "Challenger SRT Demon 170 – 1025 ch" },
        { label: "Quarter Mile", value: "8.91 sec (Demon 170)" },
        { label: "Siège", value: "Auburn Hills, Michigan, USA" },
      ]}
      models={[
        {
          name: "Challenger SRT",
          image: "/img/cars/Dodge/dodge-challenger.jpg",
          link: "/marques/dodge/challenger.html",
        },
        {
          name: "Charger SRT",
          image: "/img/cars/Dodge/dodge-charger.jpg",
          link: "/marques/dodge/charger.html",
        },
        {
          name: "Viper",
          image: "/img/cars/Dodge/dodge-viper.jpg",
          link: "/marques/dodge/viper.html",
        },
      ]}
      funFacts={[
        "La Dodge Viper a été conçue sans aides électroniques à ses débuts.",
        "La Challenger SRT Demon 170 est livrée avec un parachute en option.",
        "Dodge organise ses propres events de drag race : le \"Roadkill Nights\".",
      ]}
      brandModelsLink="/marques/dodge/models/dodge_models.html"
      palette={{
        accent: "#cc0000",       // Rouge Dodge
        background: "#121212",   // Fond sombre
      }}
    />
  );
};

export default Dodge;