"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { CreateBrandInput } from "~/app/main/brand/_components/types";

interface StepperContextProps {
  formData: CreateBrandInput;
  setFormData: React.Dispatch<React.SetStateAction<CreateBrandInput>>;
}

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined,
);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<CreateBrandInput>({
    name: "",
    images: [],
    owner: "",
    description: "",
  });

  return (
    <StepperContext.Provider value={{ formData, setFormData }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = (): StepperContextProps => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper debe usarse dentro de StepperProvider");
  }
  return context;
};
