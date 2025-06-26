import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import brandsData from "../data/brandsData";

// Composant pour flyTo
const FlyToBrand = ({ brand }) => {
  const map = useMap();
  useEffect(() => {
    if (brand) {
      map.flyTo([brand.location.lat, brand.location.lng], 8, {
        duration: 1.5,
      });
    }
  }, [brand, map]);
  return null;
};

// Composant barre de sélection
const BrandSelector = ({ brands, selectedBrand, onSelect }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 200;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="absolute top-[72px] left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
      <button onClick={() => scroll("left")} className="text-black text-2xl px-2">&#8592;</button>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-hidden px-3 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-md max-w-[85vw]"
      >
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className={`w-10 h-10 cursor-pointer transition-transform duration-200 hover:scale-110 ${
              selectedBrand?.name === brand.name ? "ring-2 ring-black" : ""
            }`}
            onClick={() => onSelect(brand)}
          />
        ))}
      </div>
      <button onClick={() => scroll("right")} className="text-black text-2xl px-2">&#8594;</button>
    </div>
  );
};

const MapPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brandsWithLocation = Object.values(brandsData).filter((b) => b.location);
  const markerRefs = useRef([]);

  useEffect(() => {
    if (selectedBrand) {
      const index = brandsWithLocation.findIndex((b) => b.name === selectedBrand.name);
      const ref = markerRefs.current[index];
      if (ref) ref.openPopup();
    }
  }, [selectedBrand]);

  return (
    <div className="w-full h-screen relative z-auto">  // anciennement z-10
      <BrandSelector
        brands={brandsWithLocation}
        selectedBrand={selectedBrand}
        onSelect={setSelectedBrand}
      />

      <MapContainer
        center={[47, 8]}
        zoom={5}
        scrollWheelZoom={true}
        className="z-0" // garde bien z-0
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics"
        />
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          attribution=""
        />
        <FlyToBrand brand={selectedBrand} />
        {brandsWithLocation.map((brand, index) => {
          const customIcon = new L.Icon({
            iconUrl: brand.logo,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -35],
            className: "drop-shadow-md",
          });

          return (
            <Marker
              key={brand.name}
              position={[brand.location.lat, brand.location.lng]}
              icon={customIcon}
              ref={(el) => (markerRefs.current[index] = el)}
            >
              <Popup>{brand.location.label}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapPage;