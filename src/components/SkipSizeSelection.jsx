import React, { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

const skipSizes = [
  "4 Yard Skip",
  "5 Yard Skip",
  "6 Yard Skip",
  "8 Yard Skip",
  "10 Yard Skip",
  "12 Yard Skip",
  "14 Yard Skip",
  "16 Yard Skip",
  "20 Yard Skip",
  "40 Yard Skip",
];

const SkipSizeSelection = ({ onBack, onContinue }) => {
  const [selectedSize, setSelectedSize] = useState("4 Yard Skip");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getImageForSize = (size) => {
    if (size === "20 Yard Skip" || size === "40 Yard Skip") {
      return "/40-yarder-skip.png";
    }
    return "/4-yarder-skip.png";
  };

  return (
    <div className="text-white w-full max-w-5xl mx-auto bg-black py-10 px-2 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-1">
        Choose Your Skip Size
      </h2>
      <p className="text-sm text-gray-400 text-center mb-8">
        Select the skip that best suit your needs
      </p>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Skip Image */}
        <div className="bg-zinc-900 p-4 rounded-lg flex-1 flex items-center justify-center">
          <img
            src={getImageForSize(selectedSize)}
            alt="Skip Example"
            className="w-80 h-auto"
          />
        </div>

        {/* Skip Size Selector */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl text-blue-400 font-bold mb-1">£211</h3>
          <p className="text-sm mb-4 text-gray-300">
            Yard skip for 14 day hire period
          </p>

          <label className="block text-sm font-medium mb-2">Select Size</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {skipSizes.map((size) => (
              <React.Fragment key={size}>
                <button
                  onClick={() => handleSizeClick(size)}
                  className={`px-2 py-2 rounded-full text-sm border border-white/40 ${
                    selectedSize === size
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white/80"
                  }`}
                >
                  {size}
                </button>

                {/* Show warning after 8 Yard Skip */}
                {size === "8 Yard Skip" && (
                  <div className="col-span-full bg-[#262626] p-2">
                    <p className="text-[#FFE100] text-xs flex items-center gap-1">
                      ⚠️ Skip Size Above 8 Are Not Allowed On The Road
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs text-[#FFE100B2] mb-6">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <button
              onClick={onBack}
              className="bg-zinc-800 text-white text-sm py-2 px-4 rounded hover:bg-zinc-700 flex items-center gap-1"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              onClick={onContinue}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-6 rounded flex items-center gap-2"
            >
              Continue <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSizeSelection;
