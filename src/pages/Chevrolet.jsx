import BrandPage from "../components/BrandPage";

const Chevrolet = () => {
  return (
    <BrandPage
      name="Chevrolet"
      tagline="Find New Roads"
      background="/img/cars/chevrolet/chevrolet.jpg" // image principale comme fond
      logo="/img/logos/chevrolet.svg"
      about={`Chevrolet est une marque américaine emblématique connue pour ses voitures robustes, accessibles et puissantes. 
      Des muscle cars aux pick-ups, en passant par des véhicules haute performance comme la Corvette, Chevrolet a marqué l’histoire automobile.`}
      history={`Fondée en 1911 par Louis Chevrolet et William C. Durant, Chevrolet devient rapidement un pilier du groupe General Motors.
      La marque est célèbre pour ses innovations techniques et ses modèles légendaires comme la Camaro, la Impala ou encore la Corvette.`}
      figures={[
        { label: "Année de fondation", value: "1911" },
        { label: "Modèle le plus rapide", value: "Corvette ZR1 – 341 km/h" },
        { label: "Ventes globales", value: "+200 millions de véhicules" },
        { label: "Siège", value: "Détroit, Michigan, USA" },
      ]}
      models={[
        {
          name: "Corvette C8",
          image: "/img/cars/chevrolet/chevrolet-corvette-c8.jpg",
          link: "/marques/chevrolet/corvette-c8.html",
        },
        {
          name: "Camaro",
          image: "/img/cars/chevrolet/chevrolet-camaro.jpg",
          link: "/marques/chevrolet/camaro.html",
        },
        {
          name: "Impala",
          image: "/img/cars/chevrolet/chevrolet-impala.jpg",
          link: "/marques/chevrolet/impala.html",
        },
      ]}
      funFacts={[
        "La Corvette est la première supercar américaine à moteur central (depuis la C8).",
        "La Camaro est une rivale historique de la Ford Mustang depuis 1966.",
        "Chevrolet a longtemps sponsorisé Manchester United.",
      ]}
      brandModelsLink="/marques/chevrolet/models/chevrolet_models.html"
      palette={{
        accent: "#f9c000",       // Jaune Chevy
        background: "#1c1f26",   // Fond acier
      }}
    />
  );
};

export default Chevrolet;