import { useState } from "react";
import { Step } from "~/components/types/stepper.types";

interface useStepperProps<T> {
  initialData: T;
}

export const useStepper = <T>({ initialData }: useStepperProps<T>) => {
  const [recopiledData, setRecopiledData] = useState<T>(initialData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return {
    currentStepIndex,
    setCurrentStepIndex,
    setRecopiledData,
    recopiledData,
  };
};
