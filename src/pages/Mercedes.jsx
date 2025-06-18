import BrandPage from "../components/BrandPage";

const Mercedes = () => {
  return (
    <BrandPage
      name="Mercedes-Benz"
      tagline="The Best or Nothing"
      background="/img/cars/Mercedes/Mercedes.jpg" // à adapter si l’image existe
      logo="/img/logos/mercedes.svg"
      about={`Mercedes-Benz est l’incarnation du luxe automobile à l’allemande. Fondée sur l’héritage de Karl Benz, la marque allie élégance, innovation, performance et sécurité.
      Des berlines classiques aux hypercars AMG, chaque Mercedes incarne l’excellence.`}
      history={`Le nom Mercedes provient d’une voiture de course conçue en 1901. En 1926, Daimler et Benz fusionnent pour créer Mercedes-Benz.
      Depuis, la marque s’est illustrée autant en Formule 1 qu’auprès des chefs d’État, et reste un pilier de l’ingénierie allemande.`}
      figures={[
        { label: "Année de fondation", value: "1926 (origine en 1886)" },
        { label: "Chevaux max", value: "1 049 ch (AMG One)" },
        { label: "Vitesse max", value: "352 km/h (AMG One)" },
        { label: "Siège", value: "Stuttgart, Allemagne" },
      ]}
      models={[
        {
          name: "AMG One",
          image: "/img/cars/Mercedes/Mercedes.jpg",
          link: "/marques/mercedes/amg-one.html",
        },
        {
          name: "G63 AMG",
          image: "/img/cars/Mercedes/mercedes-g63.jpg",
          link: "/marques/mercedes/g63.html",
        },
        {
          name: "EQS",
          image: "/img/cars/Mercedes/mercedes-eqs.jpg",
          link: "/marques/mercedes/eqs.html",
        },
      ]}
      funFacts={[
        "La Mercedes-AMG One embarque un moteur dérivé directement de la F1.",
        "La Classe G était à l’origine un véhicule militaire développé avec l’Iran dans les années 70.",
        "Mercedes est la première marque à avoir proposé l’ABS en série.",
      ]}
      brandModelsLink="/marques/mercedes/models/mercedes_models.html"
      palette={{
        accent: "#005691",       // bleu AMG / EQ
        background: "#0f0f0f",   // noir profond
      }}
    />
  );
};

export default Mercedes;