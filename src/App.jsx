import React, { useState } from 'react';
import { X } from 'lucide-react';
import StepTabs from './components/StepTabs';
import WasteSelection from './components/WasteSelection';
import SkipSizeSelection from './components/SkipSizeSelection';
import SkipPlacement from './components/PermitCheck';

function App() {
  const [postcode, setPostcode] = useState('LE10 1SH');
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-4 md:py-10">
      {currentStep > 0 && <StepTabs currentStep={currentStep} onStepChange={setCurrentStep} />}

      <div className="w-full">
        {currentStep === 0 && (
          <div className="max-w-2xl mx-auto mt-10">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold">SKIP HIRE</h1>
              <p className="italic text-gray-400 text-lg md:text-xl mt-2">With A Difference</p>
            </div>

            <div className="space-y-3 md:space-y-4 flex-1">
              {/* Postcode Input */}
              <div className="relative">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md focus:outline-none border border-gray-100"
                  placeholder="Postcode"
                />
                {postcode && (
                  <button
                    onClick={() => setPostcode('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm text-start text-gray-400 mb-1">City</label>
                <input
                  type="text"
                  defaultValue="Hinckley"
                  className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md focus:outline-none border border-gray-100"
                />
              </div>

              {/* Street Name */}
              <div>
                <label className="block text-sm text-start text-gray-400 mb-1">Street Name</label>
                <input
                  type="text"
                  defaultValue="Ashby Road"
                  className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md focus:outline-none border border-gray-100"
                />
              </div>

              {/* House Number */}
              <div>
                <label className="block text-sm text-start text-gray-400 mb-1">House/Flat Number</label>
                <input
                  type="text"
                  defaultValue="197"
                  className="w-full bg-zinc-900 text-white px-4 py-3 rounded-md focus:outline-none border border-gray-100"
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={goToNextStep}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 mt-4"
              >
                Continue <span>→</span>
              </button>
            </div>

            {/* Footer Version */}
            <p className="text-gray-500 text-sm mt-6 text-center">Version 1.1.34</p>
          </div>
        )}

        {/* Step 1 Content: Waste Type */}
        {currentStep === 1 && (
          <WasteSelection onContinue={goToNextStep} />
        )}
        {/* Step 2 Content: Skip Size */}
        {currentStep === 2 && (
          <SkipSizeSelection
            onBack={() => setCurrentStep(1)}
            onContinue={goToNextStep}
          />
        )}
        {/* Step 3 Content: Skip Placement */}
        {currentStep === 3 && (
          <SkipPlacement
            onBack={() => setCurrentStep(2)}
            onContinue={() => alert('Permit Check Complete!')}
          />
        )}
      </div>
    </div>
  );
}

export default App;