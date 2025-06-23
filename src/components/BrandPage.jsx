import PropTypes from "prop-types";

const BrandPage = ({
  name,
  tagline,
  background,
  logo,
  about,
  history,
  figures,
  models,
  funFacts,
  brandModelsLink,
  palette,
}) => {
  return (
    <div style={{ backgroundColor: palette.background }} className="text-white">
      {/* Hero section */}
      <header
        className="h-screen bg-center bg-cover relative flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <img src={logo} alt={`${name} logo`} className="w-[100px] mb-6 mx-auto drop-shadow-lg" />
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="italic text-lg text-gray-300 mt-2">{tagline}</p>
          <a
            href="#content"
            className="inline-block mt-6 text-white font-bold px-6 py-3 rounded-lg transition"
            style={{
              backgroundColor: palette.accent || "#e50914",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = palette.buttonHover || "#ff2b3c")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = palette.accent || "#e50914")
            }
          >
            Découvrir la Marque
          </a>
        </div>
      </header>

      {/* Content */}
      <main id="content" className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* À propos */}
        <section
          className="p-6 rounded-lg"
          style={{ backgroundColor: palette.section || "#1a1a1a" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: palette.accent }}>À propos de {name}</h2>
          <p className="text-gray-300">{about}</p>
        </section>

        {/* Histoire */}
        <section
          className="p-6 rounded-lg"
          style={{ backgroundColor: palette.section || "#1a1a1a" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: palette.accent }}>Histoire de la marque</h2>
          <p className="text-gray-300">{history}</p>
        </section>

        {/* Chiffres */}
        <section
          className="p-6 rounded-lg"
          style={{ backgroundColor: palette.section || "#1a1a1a" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: palette.accent }}>Quelques chiffres</h2>
          <ul className="text-gray-300 space-y-2">
            {figures.map((item, i) => (
              <li key={i}><strong>{item.label} :</strong> {item.value}</li>
            ))}
          </ul>
        </section>

        {/* Modèles */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: palette.accent }}>Modèles iconiques</h2>
          <div
            className={`grid gap-6 ${
              models.length === 1
                ? "grid-cols-1"
                : models.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {models.map((model, i) => (
              <a
                key={i}
                href={model.link}
                className="bg-[#181818] rounded-lg overflow-hidden block shadow-md transition duration-300 hover:shadow-[0_0_20px_#e50914] hover:ring-2 hover:ring-[#e50914]"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-60 object-cover"
                  draggable={false}
                />
                <h3
                  className="py-4 text-lg font-semibold text-center"
                  style={{ color: palette.accent }}
                >
                  {model.name}
                </h3>
              </a>
            ))}
          </div>
          <a
            href={brandModelsLink}
            className="inline-block mt-8 bg-[#e50914] hover:bg-[#ff2b3c] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Voir tous les modèles
          </a>
        </section>

        {/* Fun Facts */}
        <section
          className="p-6 rounded-lg"
          style={{ backgroundColor: palette.section || "#1a1a1a" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: palette.accent }}>Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {funFacts.map((fact, i) => <li key={i}>{fact}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
};

BrandPage.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  background: PropTypes.string,
  logo: PropTypes.string,
  about: PropTypes.string,
  history: PropTypes.string,
  figures: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  models: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
  })),
  funFacts: PropTypes.arrayOf(PropTypes.string),
  brandModelsLink: PropTypes.string,
  palette: PropTypes.shape({
    accent: PropTypes.string,
    background: PropTypes.string
  }),
};

export default BrandPage;