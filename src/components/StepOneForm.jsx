import { useState } from "react";
import { X } from "lucide-react";

export default function StepOneForm({ onContinue }) {
  const [postcode, setPostcode] = useState("LE10 1SH");

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Postcode */}
      <div className="relative">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md focus:outline-none"
        />
        {postcode && (
          <button
            onClick={() => setPostcode("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">City</label>
        <input
          type="text"
          defaultValue="Hinckley"
          className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md"
        />
      </div>

      {/* Street Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">Street Name</label>
        <input
          type="text"
          defaultValue="Ashby Road"
          className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md"
        />
      </div>

      {/* House/Flat Number */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">House/Flat Number</label>
        <input
          type="text"
          defaultValue="197"
          className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md"
        />
      </div>

      {/* Continue */}
      <button
        onClick={onContinue}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex justify-center items-center gap-2"
      >
        Continue <span>→</span>
      </button>
    </div>
  );
}
