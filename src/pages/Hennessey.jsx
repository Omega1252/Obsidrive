import BrandPage from "../components/BrandPage";

const Hennessey = () => {
  return (
    <BrandPage
      name="Hennessey"
      tagline="Built to Dominate."
      background="/img/cars/hennessey/hennessey.jpg"
      logo="/img/logos/henessey.png"
      about={`Hennessey Performance est une entreprise américaine spécialisée dans la fabrication et la préparation de voitures ultra-performantes. 
      Connu pour ses records de vitesse, Hennessey est synonyme de puissance brute.`}
      history={`Fondée en 1991 par John Hennessey, la marque a commencé en modifiant des supercars pour les rendre encore plus extrêmes. 
      Elle est aujourd'hui connue mondialement pour ses modèles comme la Venom GT et la Venom F5.`}
      figures={[
        { label: "Année de fondation", value: "1991" },
        { label: "Modèle le plus puissant", value: "Venom F5 (1817 ch)" },
        { label: "Objectif vitesse", value: "500+ km/h" },
        { label: "Siège", value: "Sealy, Texas, USA" },
      ]}
      models={[
        {
          name: "Venom F5",
          image: "/img/cars/hennessey/hennessey-venomf5.jpg",
          link: "/marques/hennessey/venom-f5.html",
        },
        {
          name: "Venom GT",
          image: "/img/cars/hennessey/hennessey-venomgt.jpg",
          link: "/marques/hennessey/venom-gt.html",
        },
      ]}
      funFacts={[
        "La Venom GT a atteint 435 km/h en 2014, battant la Veyron sur route fermée.",
        'Le moteur de la F5 est un V8 bi-turbo nommé "Fury".',
        "Hennessey modifie aussi des pick-ups, SUV et muscle cars à plus de 1000 ch.",
      ]}
      brandModelsLink="/marques/hennessey/models/hennessey_models.html"
      palette={{
        accent: "#d60000",       // Rouge racing
        background: "#111111",   // Fond global
        section: "#1d1d1d",      // Fond blocs
      }}
    />
  );
};

export default Hennessey;