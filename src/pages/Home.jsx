import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const extraBrandsRef = useRef(null);

  // Scroll fluide sur les ancres internes (#id)
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  // Scroll auto vers les marques étendues quand elles s’affichent
  useEffect(() => {
    if (showAllBrands && extraBrandsRef.current) {
      setTimeout(() => {
        extraBrandsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200); // léger délai pour laisser l'animation commencer
    }
  }, [showAllBrands]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero min-h-screen -mt-20 pt-20 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url('/img/hero-car.jpg')` }}
      >
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Ultimate Supercar Experience
          </h1>
          <p className="text-lg mb-6">Where Speed Meets Art</p>
          <a
            href="#brands"
            className="inline-block bg-[#e50914] hover:bg-[#ff2b3c] text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Découvrir les Marques
          </a>
        </div>
      </section>

      {/* Marques principales */}
      <section
        id="brands"
        className="bg-[#121212] text-center py-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-10 text-white">Nos Marques</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center mb-10">
          {[
            "ferrari.svg",
            "lamborghini.svg",
            "bugatti.svg",
            "mclaren.svg",
            "BMW.svg",
          ].map((logo, i) => (
            <div
              key={i}
              className="w-[140px] h-[140px] bg-white rounded-xl flex items-center justify-center p-4 shadow-md hover:scale-105 transition"
            >
              <img
                src={`/img/logos/${logo}`}
                alt={logo.split(".")[0]}
                className="w-full h-full object-contain hover:scale-110 transition"
              />
            </div>
          ))}
        </div>

        {!showAllBrands && (
          <button
            onClick={() => setShowAllBrands(true)}
            className="bg-[#e50914] hover:bg-[#ff2b3c] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#e50914]/40"
          >
            Voir toutes les marques
          </button>
        )}

        {showAllBrands && (
          <>
            <div
              ref={extraBrandsRef}
              className="animate-fade-in-up grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center mt-12"
            >
              {[
                "audi.svg",
                "mercedes.svg",
                "pagani.svg",
                "brabus.svg",
                "rolls-royce.png",
                "porsche.png",
                "astonmartin.png",
                "chevrolet.svg",
                "dodge.svg",
                "nissan.png",
                "toyota.png",
                "ford.png",
                "koenigsegg.png",
                "henessey.png",
                "apollo.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="w-[140px] h-[140px] bg-white rounded-xl flex items-center justify-center p-4 shadow-md hover:scale-105 transition"
                >
                  <img
                    src={`/img/logos/${logo}`}
                    alt={logo.split(".")[0]}
                    className="w-full h-full object-contain hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>

            <a
              href="/marques"
              className="back-to-brands inline-block mt-12 bg-[#e50914] hover:bg-[#ff2b3c] text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
              Vers les Marques
            </a>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;