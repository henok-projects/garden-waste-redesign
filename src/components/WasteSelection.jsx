import { useState } from "react";
import {
  Check,
  ChevronRight,
  Home,
  Building2,
  TreePine,
  Briefcase,
} from "lucide-react";

const wasteTypes = [
  {
    id: "construction",
    label: "Construction Waste",
    description: "Building materials and renovation debris.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "household",
    label: "Household Waste",
    description: "General household items and furniture.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: "garden",
    label: "Garden Waste",
    description: "Green waste and landscaping materials.",
    icon: <TreePine className="w-6 h-6" />,
  },
  {
    id: "commercial",
    label: "Commercial Waste",
    description: "Business and office clearance.",
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export default function WasteSelection({ onContinue }) {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="max-h-screen text-white py-6 flex flex-col max-w-[900px] mx-auto mb-56">
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-center">
            What type of waste are you disposing of?
          </h1>

          <div className="bg-[#0b1431] p-4 rounded-lg mb-6 text-start">
            <p>Select all that apply</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wasteTypes.map((type) => {
              const isSelected = selected.includes(type.id);
              return (
                <div
                  key={type.id}
                  onClick={() => toggleSelection(type.id)}
                  className={`cursor-pointer rounded-lg p-5 border-2 transition-all flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#0b1431] border-blue-500"
                      : "bg-[#262626] border-transparent"
                  }`}
                >
                  <div className="mt-1 text-blue-400">{type.icon}</div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{type.label}</h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-blue-500 mt-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-[#262626] py-3 px-4 md:py-4 md:px-36 flex flex-col md:flex-row justify-between gap-2 md:gap-4 z-40">
        <div className="w-full md:w-auto">
          <p className="text-xs md:text-sm text-gray-400">
            Selected Waste Types
          </p>
          <p className="text-sm md:text-base truncate">
            {selected
              .map((id) => wasteTypes.find((w) => w.id === id)?.label)
              .join(", ") || "None"}
          </p>
        </div>
        <div className="flex space-x-2 md:space-x-4 justify-end w-full md:w-1/3">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 md:px-6 md:py-2 rounded text-white text-sm md:text-base">
            Back
          </button>
          <button
            disabled={selected.length === 0}
            onClick={() => onContinue()}
            className={`px-4 py-1 md:px-6 md:py-2 rounded text-white flex items-center gap-1 md:gap-2 text-sm md:text-base ${
              selected.length > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-900 cursor-not-allowed"
            }`}
          >
            Continue <ChevronRight size={16} className="md:size-[18px]" />
          </button>
        </div>
      </div>
    </>
  );
}
