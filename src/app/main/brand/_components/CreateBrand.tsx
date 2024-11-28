"use client";

import Modal from "~/components/Modal";
import BrandInfo from "./Steps/BrandInfo";
import OwnerInfo from "./Steps/OwnerInfo";
import { useStepper } from "~/hooks/useStepper";

import Stepper from "~/components/Stepper";
import { useEffect, useMemo, useState } from "react";
import { Step } from "~/components/types/stepper.types";
import ImageInfo from "./Steps/ImageInfo";
import Completed from "./Steps/Completed";
import { Button } from "@nextui-org/button";
import { useOnActive } from "~/hooks/useOnActive";
import { createDialogFormProps } from "~/components/types/dialog.types";

const CreateBrand = ({ isOpen, onClose }: createDialogFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps: Step[] = useMemo(
    () => [
      {
        name: "Informacion de Marca",
        description: "Registra la información de tu marca",
        render: (
          <BrandInfo
            goBack={goBack}
            goNext={goNext}
            maxStep={maxSteps}
            currentStep={currentStep}
          />
        ),
      },
      {
        name: "Informacion de Titular",
        description: "Registra la información del titular",
        render: (
          <OwnerInfo
            goBack={goBack}
            goNext={goNext}
            maxStep={maxSteps}
            currentStep={currentStep}
          />
        ),
      },
      {
        name: "Imagen",
        description: "Registra la imagen de tu marca (Opcional)",
        render: (
          <ImageInfo
            goBack={goBack}
            goNext={goNext}
            maxStep={maxSteps}
            currentStep={currentStep}
          />
        ),
      },
      {
        name: "Finalizar",
        description: "Guardar información de la marca",
        render: (
          <Completed
            goBack={goBack}
            goNext={goNext}
            maxStep={maxSteps}
            currentStep={currentStep}
          />
        ),
        completed: false,
        onCompleted: () => {},
      },
    ],
    [currentStep, maxSteps],
  );

  useEffect(() => {
    setMaxSteps(steps.length);
  }, []);

  return (
    <Modal title="Crear Marca" size="xl" isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center py-4">
        <Stepper steps={steps} currentIndex={currentStep} />
      </div>
    </Modal>
  );
};

export default CreateBrand;
