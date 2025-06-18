import BrandPage from "../components/BrandPage";

const AstonMartin = () => {
  return (
    <BrandPage
      name="Aston Martin"
      tagline="Power, Beauty and Soul"
      background="/img/cars/Aston-Martin/aston-martin.jpg" // image principale = fond par défaut
      logo="/img/logos/aston-martin2.svg"
      about={`Marque britannique fondée sur l’élégance, la performance et le style, Aston Martin incarne l’essence du luxe sportif. 
      Connue pour ses modèles de Grand Tourisme et son lien iconique avec James Bond, chaque Aston Martin est une pièce d’ingénierie et de raffinement.`}
      history={`Créée en 1913 par Lionel Martin et Robert Bamford, Aston Martin a traversé les époques avec une identité bien marquée. 
      Elle s’est illustrée aussi bien sur circuit qu’au cinéma, notamment grâce aux célèbres DB5, DB11 ou encore la Valkyrie, preuve de son évolution vers l’hypercar.`}
      figures={[
        { label: "Année de fondation", value: "1913" },
        { label: "Modèle le plus puissant", value: "Aston Martin Valkyrie – 1 160 ch" },
        { label: "Vitesse max record", value: "355 km/h" },
        { label: "Siège", value: "Gaydon, Royaume-Uni" },
      ]}
      models={[
        {
          name: "DB11",
          image: "/img/cars/Aston-Martin/astonmartin-db11.jpg",
          link: "/marques/astonmartin/db11.html",
        },
        {
          name: "Valkyrie",
          image: "/img/cars/Aston-Martin/astonmartin-valkyrie.jpg",
          link: "/marques/astonmartin/valkyrie.html",
        },
        {
          name: "Vantage",
          image: "/img/cars/Aston-Martin/astonmartin-vantage.jpg",
          link: "/marques/astonmartin/vantage.html",
        },
      ]}
      funFacts={[
        "La DB5 est devenue culte grâce à James Bond dans \"Goldfinger\" (1964).",
        "La Valkyrie est co-développée avec Red Bull Racing.",
        "Le logo ailé s’inspire du dieu sumérien de la vitesse.",
      ]}
      brandModelsLink="/marques/astonmartin/models/astonmartin_models.html"
      palette={{
        accent: "#003b2b",       // Vert Racing Aston Martin
        background: "#111111",   // Noir élégant
      }}
    />
  );
};

export default AstonMartin;