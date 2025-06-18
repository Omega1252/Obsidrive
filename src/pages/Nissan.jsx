import BrandPage from "../components/BrandPage";

const Nissan = () => {
  return (
    <BrandPage
      name="Nissan"
      tagline="Innovation that excites."
      background="/img/cars/nissan/nissan.jpg" // visuel principal = fond
      logo="/img/logos/nissan2.svg"
      about={`Nissan est l'un des plus grands constructeurs japonais, connu pour ses modèles innovants, sportifs et technologiques. 
      De la légendaire GT-R à la citadine électrique Leaf, Nissan incarne la puissance maîtrisée et la modernité.`}
      history={`Fondée en 1933, Nissan a su évoluer d'une petite entreprise nippone à un leader mondial de l'automobile. 
      La Skyline GT-R, devenue une icône mondiale, incarne l'excellence japonaise dans les circuits comme sur route.`}
      figures={[
        { label: "Année de fondation", value: "1933" },
        { label: "Modèle le plus iconique", value: "Nissan GT-R R35" },
        { label: "Voitures électriques vendues", value: "+650 000 Leaf" },
        { label: "Siège", value: "Yokohama, Japon" },
      ]}
      models={[
        {
          name: "GT-R R35",
          image: "/img/cars/nissan/nissan-gtr.jpg",
          link: "/marques/nissan/gtr-r35.html",
        },
        {
          name: "370Z",
          image: "/img/cars/nissan/nissan-370z.jpg",
          link: "/marques/nissan/370z.html",
        },
        {
          name: "Leaf",
          image: "/img/cars/nissan/nissan-leaf.jpg",
          link: "/marques/nissan/leaf.html",
        },
      ]}
      funFacts={[
        'La GT-R R35 est surnommée "Godzilla" pour ses performances monstrueuses.',
        "La Skyline originale date de 1957 (avant même qu’elle soit une GT-R).",
        "La Leaf fut la voiture électrique la plus vendue au monde pendant plusieurs années.",
      ]}
      brandModelsLink="/marques/nissan/models/nissan_models.html"
      palette={{
        accent: "#e60012",       // Rouge GTR
        background: "#111111",   // Fond carbone sombre
      }}
    />
  );
};

export default Nissan;