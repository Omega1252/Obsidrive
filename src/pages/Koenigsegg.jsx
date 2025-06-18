import BrandPage from "../components/BrandPage";

const Koenigsegg = () => {
  return (
    <BrandPage
      name="Koenigsegg"
      tagline="Beyond Hypercar Limits."
      background="/img/cars/koenigsegg/koenigsegg.jpg"
      logo="/img/logos/koenigsegg.png"
      about={`Koenigsegg est un constructeur suédois fondé avec une seule mission : repousser les limites de la performance automobile. 
      De la technologie révolutionnaire à la vitesse brute, chaque modèle est une œuvre d’ingénierie extrême.`}
      history={`Fondée en 1994 par Christian von Koenigsegg, la marque s'est rapidement imposée comme une référence absolue dans le monde des hypercars. 
      Koenigsegg allie innovation radicale, matériaux de pointe, et records de vitesse.`}
      figures={[
        { label: "Année de fondation", value: "1994" },
        { label: "Modèle le plus rapide", value: "Jesko Absolut" },
        { label: "Record notable", value: "0-400-0 km/h en 31.49 sec" },
        { label: "Siège", value: "Ängelholm, Suède" },
      ]}
      models={[
        {
          name: "Jesko",
          image: "/img/cars/koenigsegg/koenigsegg-jesko.jpg",
          link: "/marques/koenigsegg/jesko.html",
        },
        {
          name: "Regera",
          image: "/img/cars/koenigsegg/koenigsegg-regera.jpg",
          link: "/marques/koenigsegg/regera.html",
        },
        {
          name: "Gemera",
          image: "/img/cars/koenigsegg/koenigsegg-agera.jpg", // ← image gemera manquante ? sinon corriger le nom du fichier
          link: "/marques/koenigsegg/agera.html",
        },
      ]}
      funFacts={[
        "Le Jesko peut atteindre plus de 500 km/h (en théorie).",
        "Le moteur du Gemera est un 3 cylindres bi-turbo de 1700 chevaux (!).",
        "Le Regera n’a pas de boîte de vitesses classique (transmission directe unique).",
      ]}
      brandModelsLink="/marques/koenigsegg/models/koenigsegg_models.html"
      palette={{
        accent: "#f5a300",       // Or Koenigsegg
        background: "#111111",   // Fond global
        section: "#1e1e1e",      // Fond blocs texte
      }}
    />
  );
};

export default Koenigsegg;