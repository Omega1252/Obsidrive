import { Link } from "react-router-dom";

const BrandAllModelsPage = ({ brand, models, palette }) => {
  return (
    <div style={{ backgroundColor: palette.background, color: "#fff" }}>
      {models.map((model, index) => (
        <section
          key={index}
          className="h-screen bg-cover bg-center flex items-center px-8"
          style={{ backgroundImage: `url(${model.image})` }}
        >
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{model.name}</h1>
            <Link
              to={`/modele/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-block px-6 py-3 rounded-md font-semibold text-white"
              style={{
                backgroundColor: palette.button || palette.accent || "#e50914",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = palette.buttonHover || "#ff2b3c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = palette.button || palette.accent || "#e50914";
              }}
            >
              Découvrir le modèle
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrandAllModelsPage;