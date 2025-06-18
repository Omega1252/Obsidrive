// pages/Lamborghini.jsx
import BrandPage from "../components/BrandPage";

const Lamborghini = () => {
  return (
    <BrandPage
      name="Lamborghini"
      tagline="Beyond Fear. Beyond Limits."
      background="/img/cars/lamborghini/lamborghini.jpg"
      logo="/img/logos/lamborghini2.svg"
      palette={{
        accent: "#f7d000",
        background: "#0f0f0f",
      }}
      about={`Fondée en 1963 par Ferruccio Lamborghini, la marque est née d’une volonté de défier Ferrari avec des supercars plus confortables et plus puissantes. Lamborghini incarne l’exubérance, l’agressivité stylistique et la brutalité mécanique.`}
      history={`Le premier modèle, la 350 GT, lance la légende. Mais c’est la Miura dans les années 60 qui place Lamborghini comme pionnier des supercars modernes. Des modèles iconiques comme la Countach, Diablo ou Aventador ont ensuite marqué chaque génération.`}
      figures={[
        { label: "Année de fondation", value: "1963" },
        { label: "Modèle le plus rapide", value: "Revuelto (350+ km/h)" },
        { label: "Nombre de modèles V12", value: "+15" },
        { label: "Siège", value: "Sant'Agata Bolognese, Italie" },
      ]}
      models={[
        {
          name: "Aventador",
          image: "/img/cars/lamborghini/aventador.jpg",
          link: "/models/lamborghini/aventador.html",
        },
        {
          name: "Huracán",
          image: "/img/cars/lamborghini/huracan.jpg",
          link: "/models/lamborghini/huracan.html",
        },
        {
          name: "Revuelto",
          image: "/img/cars/lamborghini/revuelto.jpg",
          link: "/models/lamborghini/revuelto.html",
        },
      ]}
      brandModelsLink="/models/lamborghini_models.html"
      funFacts={[
        "Le taureau dans le logo fait référence au signe astrologique de Ferruccio Lamborghini.",
        "La Countach a inventé le concept de supercar en forme de coin futuriste.",
        "Le modèle Essenza SCV12 est réservé uniquement à un usage sur circuit.",
      ]}
    />
  );
};

export default Lamborghini;