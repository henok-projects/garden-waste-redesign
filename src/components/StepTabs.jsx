import { MapPin, Trash2, Truck, Shield, CalendarDays, CreditCard } from "lucide-react";

const steps = [
  { name: "Postcode", icon: MapPin },
  { name: "Waste Type", icon: Trash2 },
  { name: "Select Skip", icon: Truck },
  { name: "Permit Check", icon: Shield },
  { name: "Choose Date", icon: CalendarDays },
  { name: "Payment", icon: CreditCard },
];

export default function StepTabs({ currentStep, onStepChange }) {
  return (
    <div className="w-full bg-black py-4 md:py-6 overflow-x-auto no-scrollbar">
      <div className="flex min-w-max px-4 md:px-6 md:justify-center space-x-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStep;

          return (
            <div
              key={index}
              className="flex items-center space-x-2 cursor-pointer group flex-shrink-0"
              onClick={() => onStepChange(index)}
            >
              <Icon
                size={18}
                className={isActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-400"}
              />
              <span
                className={`whitespace-nowrap ${
                  isActive ? "text-white font-medium" : "text-gray-500 group-hover:text-blue-400"
                }`}
              >
                {step.name}
              </span>
              {index !== steps.length - 1 && <div className="w-6 h-px bg-gray-700 mx-2" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}