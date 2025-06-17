import BrandSlide from "../components/BrandSlide";

const brandsData = [
  {
    name: "Ferrari",
    tagline: "Racing spirit sculpted in red.",
    background: "/img/cars/ferrari/Ferrari.jpg",
    logo: "/img/logos/ferrari2.svg",
    link: "/marques/ferrari",
  },
  {
    name: "Lamborghini",
    tagline: "Heritage with a roar.",
    background: "/img/cars/lamborghini/Lamborghini.jpg",
    logo: "/img/logos/lamborghini2.svg",
    link: "/marques/lamborghini",
  },
  {
    name: "Bugatti",
    tagline: "Engineering art on wheels.",
    background: "/img/cars/bugatti/bugatti.jpg",
    logo: "/img/logos/bugatti.svg",
    link: "/marques/bugatti",
  },
  {
    name: "McLaren",
    tagline: "Born on track, unleashed on road.",
    background: "/img/cars/mclaren/mclaren.jpg",
    logo: "/img/logos/mclaren.svg",
    link: "/marques/mclaren",
  },
  {
    name: "BMW",
    tagline: "Precision moves the soul.",
    background: "/img/cars/BMW/BMW.jpg",
    logo: "/img/logos/BMW.svg",
    link: "/marques/BMW",
  },
  {
    name: "Audi",
    tagline: "Progress redefined.",
    background: "/img/cars/Audi/Audi.jpg",
    logo: "/img/logos/audi.svg",
    link: "/marques/Audi",
  },
  {
    name: "Mercedes",
    tagline: "Where elegance meets performance.",
    background: "/img/cars/Mercedes/Mercedes.jpg",
    logo: "/img/logos/mercedes.svg",
    link: "/marques/Mercedes",
  },
  {
    name: "Pagani",
    tagline: "Automotive poetry in motion.",
    background: "/img/cars/Pagani/Pagani.jpg",
    logo: "/img/logos/pagani.svg",
    link: "/marques/Pagani",
  },
  {
    name: "Brabus",
    tagline: "Power tailored with precision.",
    background: "/img/cars/Brabus/brabus.jpg",
    logo: "/img/logos/brabus.svg",
    link: "/marques/Brabus",
  },
  {
    name: "Rolls-Royce",
    tagline: "The silent embodiment of power.",
    background: "/img/cars/Rolls-royce/rolls-royce.jpg",
    logo: "/img/logos/rolls-royce2.svg",
    link: "/marques/Rolls-royce",
  },
  {
    name: "Porsche",
    tagline: "Timeless performance.",
    background: "/img/cars/Porsche/Porsche.jpg",
    logo: "/img/logos/porsche.png",
    link: "/marques/Porsche",
  },
  {
    name: "Aston Martin",
    tagline: "Refinement. Redefined",
    background: "/img/cars/Aston-Martin/Aston-Martin.jpg",
    logo: "/img/logos/aston-martin2.svg",
    link: "/marques/Aston-Martin",
  },
  {
    name: "Chevrolet",
    tagline: "The pulse of American roads.",
    background: "/img/cars/Chevrolet/Chevrolet.jpg",
    logo: "/img/logos/chevrolet.svg",
    link: "/marques/Chevrolet",
  },
  {
    name: "Dodge",
    tagline: "Muscle, unleashed.",
    background: "/img/cars/Dodge/Dodge.jpg",
    logo: "/img/logos/dodge2.svg",
    link: "/marques/Dodge",
  },
  {
    name: "Nissan",
    tagline: "Driven by innovation.",
    background: "/img/cars/Nissan/Nissan.jpg",
    logo: "/img/logos/nissan2.svg",
    link: "/marques/Nissan",
  },
  {
    name: "Toyota",
    tagline: "Reliability that inspires confidence.",
    background: "/img/cars/Toyota/Toyota.jpg",
    logo: "/img/logos/toyota.png",
    link: "/marques/Toyota",
  },
  {
    name: "Ford",
    tagline: "Built for the bold.",
    background: "/img/cars/ford/ford.jpg",
    logo: "/img/logos/ford2.svg",
    link: "/marques/ford",
  },
  {
    name: "Koenigsegg",
    tagline: "Beyond the limits of speed.",
    background: "/img/cars/Koenigsegg/koenigsegg.jpg",
    logo: "/img/logos/koenigsegg.png",
    link: "/marques/Koenigsegg",
  },
  {
    name: "Henessey",
    tagline: "Born to outrun fear.",
    background: "/img/cars/Hennessey/Hennessey.jpg",
    logo: "/img/logos/henessey2.svg",
    link: "/marques/Hennessey",
  },
  {
    name: "Apollo",
    tagline: "Where engineering meets insanity.",
    background: "/img/cars/Apollo/Apollo.jpg",
    logo: "/img/logos/apollo.png",
    link: "/marques/Apollo",
  },
];

const Marques = () => {
  return (
    <div>
      {brandsData.map((brand, i) => (
        <BrandSlide
          key={i}
          name={brand.name}
          tagline={brand.tagline}
          background={brand.background}
          logo={brand.logo}
          link={brand.link}
        />
      ))}
    </div>
  );
};

export default Marques;