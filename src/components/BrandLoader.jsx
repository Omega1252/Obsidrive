import { useEffect, useState } from "react";

const BrandLoader = ({ logo, brandName, brandColor = "#e50914", onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3000); // doit matcher les animations

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="brand-loader-container">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt={`${brandName} logo`}
          className="brand-loader-logo"
        />
        <h1
          className="text-3xl font-semibold mt-4 brand-loader-text"
          style={{ color: brandColor }}
        >
          {brandName}
        </h1>
      </div>
    </div>
  );
};

export default BrandLoader;