import React, { useState } from "react";

export default function SkipPlacement({ onBack, onContinue }) {
  const [selectedOption, setSelectedOption] = useState("private");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      <div className="max-w-xl mx-auto w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Where will the skip be placed?</h1>
        <p className="text-gray-400">
          This helps us determine if you need a permit for your skip
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <div
            onClick={() => handleOptionChange("private")}
            className={`flex-1 p-6 rounded-lg border cursor-pointer transition ${
              selectedOption === "private"
                ? "border-blue-600 bg-[#0e1524]"
                : "border-gray-700 bg-[#1a1a1a]"
            }`}
          >
            <div className="flex  mb-4">
              <div className="flex">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    selectedOption === "private"
                      ? "bg-blue-900/50 text-blue-500"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.75v-4.5c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v4.5h3.75c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 text-start">
                <h3 className="text-lg font-semibold">Private Property</h3>
                <p className="text-sm text-gray-400">
                  Driveway or private land
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2 text-start">
              No permit required when placed on your private property
            </p>
          </div>

          <div
            onClick={() => handleOptionChange("public")}
            className={`flex-1 p-6 rounded-lg border cursor-pointer transition ${
              selectedOption === "public"
                ? "border-blue-600 bg-[#0e1524]"
                : "border-gray-700 bg-[#1a1a1a]"
            }`}
          >
            <div className="flex mb-4">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  selectedOption === "public"
                    ? "bg-blue-900/50 text-blue-500"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125V18a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-4.875m-18 0V6.75a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v6.375m-18 0h18"
                  />
                </svg>
              </div>
              <div className="ml-4 text-start">
                <h3 className="text-lg font-semibold">Public Road</h3>
                <p className="text-sm text-gray-400">
                  Council or public property
                </p>
              </div>
            </div>

            <p className="text-sm text-start text-gray-400 mt-2">
              Permit required for placement on public roads
            </p>
          </div>
        </div>

        <div className="flex space-x-4 justify-center mt-8">
          <button
            onClick={onBack}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
