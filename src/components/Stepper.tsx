"use client";
import { Step } from "./types/stepper.types";

export interface StepperProps {
  steps: Step[];
  currentIndex: number;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentIndex,
}: StepperProps) => {
  return (
    <div className="mx-auto w-full">
      {/* Stepper Navigation */}
      <div className="mb-4 flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mx-1 h-2 flex-1 rounded-full ${
              index <= currentIndex ? "bg-primary" : "bg-default-200"
            }`}
          />
        ))}
      </div>

      <div className="p-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">{steps[currentIndex]?.name}</h2>
          <h2 className="text-lg font-bold">Paso {currentIndex + 1}</h2>
        </div>
        <p className="mb-4">{steps[currentIndex]?.description}</p>
        <div>{steps[currentIndex]?.render}</div>
      </div>
    </div>
  );
};

export default Stepper;
