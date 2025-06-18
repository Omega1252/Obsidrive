import BrandPage from "../components/BrandPage";

const Bugatti = () => {
  return (
    <BrandPage
      name="Bugatti"
      tagline="L’Art de la Vitesse"
      background="/img/cars/bugatti/bugatti.jpg"
      logo="/img/logos/bugatti2.svg"
      palette={{
        accent: "#0e3fa9",
        background: "#0f0f0f",
      }}
      about={`Fondée en 1909 par Ettore Bugatti, la marque s’est rapidement imposée comme une légende dans le monde automobile.
Aujourd’hui, elle incarne la fusion ultime entre performance extrême, luxe absolu et héritage historique.`}
      history={`Bugatti s’est illustrée en compétition dès les années 20 avec des modèles comme la Type 35.
Après une période de silence, la renaissance de la marque avec la Veyron en 2005 a bouleversé le monde des hypercars.
Suivront la Chiron, la Bolide, et maintenant la Tourbillon.`}
      figures={[
        { label: "Année de fondation", value: "1909" },
        { label: "Puissance max", value: "1 825 ch (Bolide)" },
        { label: "Vitesse max", value: "490 km/h (Chiron Super Sport 300+)" },
        { label: "Siège", value: "Molsheim, France" },
      ]}
      models={[
        {
          name: "Veyron",
          image: "/img/cars/bugatti/veyron.jpg",
          link: "/models/bugatti/veyron.html",
        },
        {
          name: "Chiron",
          image: "/img/cars/bugatti/chiron.jpg",
          link: "/models/bugatti/chiron.html",
        },
        {
          name: "Bolide",
          image: "/img/cars/bugatti/bolide.jpg",
          link: "/models/bugatti/bolide.html",
        },
      ]}
      brandModelsLink="/models/bugatti_models.html"
      funFacts={[
        "La Veyron a été la première voiture de série à dépasser les 1 000 chevaux.",
        "Chaque Bugatti est assemblée à la main à Molsheim, en Alsace.",
        "La Chiron peut consommer 100 litres de carburant en 12 minutes à pleine vitesse.",
      ]}
    />
  );
};

export default Bugatti;