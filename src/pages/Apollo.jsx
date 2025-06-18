import BrandPage from "../components/BrandPage";

const Apollo = () => {
  return (
    <BrandPage
      name="Apollo"
      tagline="Emotion meets Engineering."
      background="/img/cars/apollo/apollo.jpg"
      logo="/img/logos/apollo.png"
      about={`Apollo est un constructeur allemand d’hypercars qui allie art automobile, performances extrêmes et design futuriste. 
      Chaque modèle est pensé comme une œuvre sculptée pour la piste comme pour la route.`}
      history={`Dérivée de Gumpert, la marque Apollo renaît avec l’Intensa Emozione. Sa mission : faire vibrer l’automobile en fusionnant émotion brute et technologies avancées. 
      L’ADN de la marque reste axé sur l’adrénaline pure.`}
      figures={[
        { label: "Année de renaissance", value: "2016" },
        { label: "Modèle phare", value: "Apollo IE" },
        { label: "Production ultra-limitée", value: "10 exemplaires de l’IE" },
        { label: "Siège", value: "Denkendorf, Allemagne" },
      ]}
      models={[
        {
          name: "Intensa Emozione",
          image: "/img/cars/apollo/apollo-ie.jpg",
          link: "/marques/apollo/intensa-emozione.html",
        },
        {
          name: "Project EVO",
          image: "/img/cars/apollo/apollo-evo.jpg",
          link: "/marques/apollo/project-evo.html",
        },
        {
          name: "Gumpert Apollo",
          image: "/img/cars/apollo/gumpert-apollo.jpg",
          link: "/marques/apollo/gumpert-apollo.html",
        },
      ]}
      funFacts={[
        "L’Apollo IE utilise un V12 atmosphérique de 6.3L à plus de 9000 tr/min.",
        "Le design s’inspire des formes biologiques et de l’aérodynamique naturelle.",
        "La marque vise une expérience émotionnelle intense avant tout.",
      ]}
      brandModelsLink="/marques/apollo/models/apollo_models.html"
      palette={{
        accent: "#9b0000",
        background: "#0e0e0e",
        section: "#1a1a1a",
      }}
    />
  );
};

export default Apollo;