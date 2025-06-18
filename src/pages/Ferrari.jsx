import BrandPage from "../components/BrandPage";

const FerrariPage = () => {
  return (
    <BrandPage
      name="Ferrari"
      tagline="Where Passion Meets Precision"
      background="/img/cars/ferrari/Ferrari.jpg"
      logo="/img/logos/ferrari2.svg"
      palette={{
        accent: "#e50914",        // Rosso Corsa improvisé
        background: "#0f0f0f",     // fond Obsidrive
      }}
      about="Fondée en 1947 à Maranello par Enzo Ferrari, la marque est née de la course. Ferrari est devenue un symbole absolu d'excellence mécanique, de passion italienne et de design audacieux. Chaque voiture Ferrari est une œuvre d’art roulante, pensée pour l’émotion autant que pour la performance."
      history="Enzo Ferrari ne voulait à l’origine fabriquer que des voitures de course. Pourtant, la demande a rapidement évolué vers des modèles de route exclusifs, sans jamais trahir l’ADN racing de la marque. Ferrari a construit sa légende à travers la Formule 1, des moteurs mythiques, et une identité forte : passion, performance, prestige."
      figures={[
        { label: "Année de fondation", value: "1947" },
        { label: "Victoires F1", value: "+240" },
        { label: "Chevaux max produits", value: "1 050 (SF90 XX Stradale)" },
        { label: "Usine", value: "Maranello, Italie" },
      ]}
      models={[
        {
          name: "LaFerrari",
          image: "/img/cars/ferrari/ferrari-laferrari.jpg",
          link: "/marques/Ferrari/laferrari.html",
        },
        {
          name: "SF90 Stradale",
          image: "/img/cars/ferrari/Ferrari.jpg",
          link: "/marques/Ferrari/sf90.html",
        },
        {
          name: "812 Superfast",
          image: "/img/cars/ferrari/ferrari-812.jpg",
          link: "/marques/Ferrari/812superfast.html",
        },
      ]}
      funFacts={[
        "Le logo du cheval cabré vient d’un aviateur italien de la WWI.",
        "Ferrari limite volontairement sa production pour préserver l’exclusivité.",
        "La couleur \"Rosso Corsa\" est indissociable de la marque en compétition.",
      ]}
      brandModelsLink="/marques/Ferrari/ferrari_models.html"
    />
  );
};

export default FerrariPage;