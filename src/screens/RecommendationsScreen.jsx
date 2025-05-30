import React from "react";
import { useLocation } from "react-router-dom";
import useIkeaSearch from "../hooks/useIkeaSearch";

const RecommendationsScreen = () => {
  const location = useLocation();
  const label = location.state?.label || "chair";
  const { data: products, loading, error } = useIkeaSearch(label);

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-24 text-black">
      <h1 className="text-2xl font-bold mb-6">
        Recommendations for: <span className="capitalize">{label}</span>
      </h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Failed to load products.</p>}

      <div className="space-y-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex bg-[#F8F9FF] p-4  items-start"
          >
            {/* Image & Name */}
            <div className="w-24 flex-shrink-0 flex flex-col items-center">
              <img
                src={item.image}
                alt={item.imageAlt || item.name}
                className="w-full h-auto rounded-lg object-contain"
              />
              <p className="font-bold mt-2 text-center text-sm">{item.name}</p>
            </div>

            {/* Description-like summary + CTA */}
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-gray-700 mb-3">
                {item.imageAlt || `Explore the ${item.name} ${item.typeName} from IKEA.`}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1D1E5A] text-white text-sm font-semibold px-4 py-2 rounded-full w-fit"
              >
                Check on website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsScreen;
