import BrandPage from "../components/BrandPage";

const BMW = () => {
  return (
    <BrandPage
      name="BMW"
      tagline="The Ultimate Driving Machine"
      background="/img/cars/bmw/bmw.jpg"
      logo="/img/logos/bmw.svg"
      palette={{
        accent: "#0066b1",
        background: "#0f0f0f",
      }}
      about={`Fondée en 1916 à Munich, BMW (Bayerische Motoren Werke) est synonyme d’ingénierie allemande de précision, de sportivité élégante et de conduite dynamique.
Que ce soit en thermique ou en électrique, BMW reste une référence du plaisir de conduite.`}
      history={`Initialement fabricant de moteurs d’avion, BMW s’est orienté vers l’automobile dans les années 1920.
L’entreprise a marqué l’histoire avec des séries mythiques comme la 3, la 5 ou la M, et s’impose désormais aussi dans l’électrique avec la gamme i.`}
      figures={[
        { label: "Année de fondation", value: "1916" },
        { label: "Chevaux max", value: "745 ch (BMW XM Label Red)" },
        { label: "Vitesse max", value: "305 km/h (M8 Competition)" },
        { label: "Siège", value: "Munich, Allemagne" },
      ]}
      models={[
        {
          name: "BMW M3",
          image: "/img/cars/bmw/bmw-m3.jpg",
          link: "/models/bmw/m3.html",
        },
        {
          name: "BMW M5",
          image: "/img/cars/bmw/bmw-m5.jpg",
          link: "/models/bmw/m5.html",
        },
      ]}
      brandModelsLink="/models/bmw_models.html"
      funFacts={[
        "Le logo BMW représente une hélice stylisée sur fond bleu et blanc (couleurs de la Bavière).",
        "La BMW M3 E30 est l'une des voitures les plus iconiques de l'histoire du sport auto.",
        "BMW possède aussi Rolls-Royce Motor Cars depuis 1998.",
      ]}
    />
  );
};

export default BMW;