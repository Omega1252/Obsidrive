import BrandPage from "../components/BrandPage";

const Pagani = () => {
  return (
    <BrandPage
      name="Pagani"
      tagline="L’art de la vitesse"
      background="/img/cars/Pagani/Pagani.jpg" // adapte si tu as un fond spécifique
      logo="/img/logos/pagani.svg"
      about={`Pagani est une marque italienne de supercars fondée par Horacio Pagani. Chaque voiture est une œuvre d’art mécanique mêlant fibre de carbone, artisanat de luxe et performances extrêmes.
      Leur philosophie : repousser les limites de la perfection, à la main.`}
      history={`En 1992, Horacio Pagani quitte Lamborghini pour fonder sa propre marque, convaincu du potentiel de la fibre de carbone.
      En 1999, la Zonda C12 choque le monde automobile par son design, sa puissance et son niveau de finition.
      Depuis, Pagani enchaîne les hypercars légendaires comme la Huayra ou l’Utopia.`}
      figures={[
        { label: "Année de fondation", value: "1992" },
        { label: "Modèle le plus puissant", value: "Huayra R – 850 ch" },
        { label: "Production annuelle", value: "Environ 40 voitures" },
        { label: "Lieu", value: "Modène, Italie" },
      ]}
      models={[
        {
          name: "Zonda",
          image: "/img/cars/pagani/pagani-zonda.jpg",
          link: "/marques/pagani/zonda.html",
        },
        {
          name: "Huayra",
          image: "/img/cars/pagani/pagani-huayra.jpg",
          link: "/marques/pagani/huayra.html",
        },
        {
          name: "Utopia",
          image: "/img/cars/pagani/pagani-utopia.jpg",
          link: "/marques/pagani/utopia.html",
        },
      ]}
      funFacts={[
        "La fibre de carbone utilisée chez Pagani est brevetée et mêle titane pour plus de rigidité.",
        "Chaque voiture est faite à la main, avec un niveau de personnalisation extrême.",
        "La Zonda est toujours produite à l’unité, malgré son âge.",
      ]}
      brandModelsLink="/marques/pagani/models/pagani_models.html"
      palette={{
        accent: "#004b87",       // bleu Pagani
        background: "#1c1c1c",   // titane foncé
      }}
    />
  );
};

export default Pagani;