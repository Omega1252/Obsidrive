import BrandPage from "../components/BrandPage";

const Brabus = () => {
  return (
    <BrandPage
      name="Brabus"
      tagline="Plus que du luxe. De la puissance sans compromis."
      background="/img/cars/brabus/brabus.jpg" // image de fond = image principale de la marque
      logo="/img/logos/brabus.svg"
      about={`Brabus est une entreprise allemande spécialisée dans la personnalisation et la performance extrême de véhicules de luxe, principalement Mercedes-Benz. 
      Elle transforme des modèles déjà puissants en monstres mécaniques de performance et de design, toujours avec un niveau de finition ultra premium.`}
      history={`Fondée en 1977 à Bottrop, Brabus est née de la passion de Bodo Buschmann pour la vitesse et l'exclusivité. 
      En quelques années, la marque devient la référence du tuning haut de gamme, avec des records de vitesse, un style distinctif noir & chrome, et une réputation sans faille.`}
      figures={[
        { label: "Année de fondation", value: "1977" },
        { label: "Puissance max (BRABUS Rocket 1000)", value: "1 000+ ch" },
        { label: "Vitesse max homologuée", value: "370+ km/h" },
        { label: "Siège", value: "Bottrop, Allemagne" },
      ]}
      models={[
        {
          name: "Rocket 900",
          image: "/img/cars/brabus/brabus-rocket.jpg",
          link: "/marques/brabus/rocket900.html",
        },
        {
          name: "G900",
          image: "/img/cars/brabus/brabus.jpg",
          link: "/marques/brabus/g900.html",
        },
        {
          name: "Brabus 700",
          image: "/img/cars/brabus/brabus-700.jpg",
          link: "/marques/brabus/brabus700.html",
        },
      ]}
      funFacts={[
        "Brabus propose même des bateaux de luxe customisés (Brabus Marine).",
        "Chaque moteur Brabus est signé à la main par un ingénieur.",
        "Le Rocket 900 peut faire le 0 à 100 km/h en moins de 3,5 secondes.",
      ]}
      brandModelsLink="/marques/brabus/models/brabus_models.html"
      palette={{
        accent: "#a60000",       // Rouge Brabus
        background: "#0d0d0d",   // Noir intense
      }}
    />
  );
};

export default Brabus;