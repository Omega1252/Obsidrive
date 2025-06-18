import BrandPage from "../components/BrandPage";

const Audi = () => {
  return (
    <BrandPage
      name="Audi"
      tagline="Vorsprung durch Technik"
      background="/img/cars/Audi/audi.jpg"
      logo="/img/logos/audi.svg"
      about={`Audi, fondée officiellement en 1909, est une marque allemande premium reconnue pour son design épuré, ses technologies de pointe et sa sportivité raffinée. 
      Son slogan "Vorsprung durch Technik" reflète son ADN : l’avance par la technologie.`}
      history={`Audi trouve ses origines dans le regroupement des quatre marques allemandes Auto Union (d'où les quatre anneaux). 
      Depuis les années 80, elle est à la pointe avec la transmission quattro, les moteurs TFSI ou encore l’électrification avec la gamme e-tron.`}
      figures={[
        { label: "Année de fondation", value: "1909" },
        { label: "Chevaux max", value: "830 ch (Audi PB18 e-tron)" },
        { label: "Vitesse max", value: "330 km/h (R8 V10 Plus)" },
        { label: "Siège", value: "Ingolstadt, Allemagne" },
      ]}
      models={[
        {
          name: "Audi R8",
          image: "/img/cars/Audi/audi-r8.jpg",
          link: "/marques/audi/r8.html",
        },
        {
          name: "RS6 Avant",
          image: "/img/cars/Audi/audi-rs6.jpg",
          link: "/marques/audi/PB-18.html",
        },
        {
          name: "R8 ABT",
          image: "/img/cars/Audi/audi-r8-abt.jpg",
          link: "/marques/audi/r8-abt.html",
        },
      ]}
      funFacts={[
        `Le nom "Audi" est une traduction latine de "Horch", le nom du fondateur.`,
        "L’Audi Quattro a révolutionné le rallye avec sa transmission intégrale.",
        "La calandre \"Singleframe\" est devenue une signature esthétique de la marque.",
      ]}
      brandModelsLink="/marques/audi/models/audi_models.html"
      palette={{
        accent: "#bb0a30",
        background: "#0f0f0f",
      }}
    />
  );
};

export default Audi;