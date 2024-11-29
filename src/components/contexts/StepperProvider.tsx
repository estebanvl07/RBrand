"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { BrandWithIncludes } from "~/app/main/_types/root";
import { CreateBrandInput } from "~/app/main/brand/_components/types";

interface StepperContextProps {
  formData: CreateBrandInput;
  setFormData: React.Dispatch<React.SetStateAction<CreateBrandInput>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  defaultBrand?: BrandWithIncludes;
  setDefaultBrand?: React.Dispatch<
    React.SetStateAction<BrandWithIncludes | undefined>
  >;
  onClean: VoidFunction;
}

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined,
);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<CreateBrandInput>({
    name: "",
    owner: "",
    description: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [defaultBrand, setDefaultBrand] = useState<BrandWithIncludes>();

  const onClean = () => {
    setFormData({
      name: "",
      owner: "",
      description: "",
    });
    setDefaultBrand(undefined);
  };

  return (
    <StepperContext.Provider
      value={{
        formData,
        setFormData,
        isEdit,
        setIsEdit,
        defaultBrand,
        setDefaultBrand,
        onClean,
      }}
    >
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
