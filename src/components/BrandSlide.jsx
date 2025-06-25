import PropTypes from "prop-types";

const BrandSlide = ({ name, tagline, background, logo, link, palette }) => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center px-6 md:px-20 text-white relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-7 p-5">
        <img
          src={logo}
          alt={name}
          className="w-[120px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {name}
          </h1>
          <p className="italic opacity-90 mb-4 text-[1.05rem] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            {tagline}
          </p>
          <a
            href={link}
            className="text-white font-bold px-5 py-2.5 rounded-lg transition transform hover:scale-105 drop-shadow-md text-[0.95rem]"
            style={{ backgroundColor: palette?.accent || "#e50914" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = palette?.buttonHover || "#ff2b3c")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = palette?.accent || "#e50914")
            }
          >
            Découvrir la marque
          </a>
        </div>
      </div>
    </section>
  );
};

BrandSlide.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  accent: PropTypes.string,
  buttonHover: PropTypes.string,
};

export default BrandSlide;