import React from "react";
import { StepOptionProps } from "./types";
import { useStepper } from "~/components/contexts/StepperProvider";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const Completed = ({
  currentStep,
  goBack,
  goNext,
  maxStep,
}: StepOptionProps<any>) => {
  const { formData } = useStepper();

  return (
    <div>
      <div className="scrollbar-customize flex flex-row items-center gap-x-2 overflow-x-auto pb-2">
        <Image
          className="rounded-md"
          src={"/example.jpg"}
          alt="ejemplo"
          width={200}
          height={350}
        />
        <Image
          className="rounded-md"
          src={"/example.jpg"}
          alt="ejemplo"
          width={200}
          height={350}
        />
        <Image
          className="rounded-md"
          src={"/example.jpg"}
          alt="ejemplo"
          width={200}
          height={350}
        />
        <Image
          className="rounded-md"
          src={"/example.jpg"}
          alt="ejemplo"
          width={200}
          height={350}
        />
      </div>
      <ul className="mt-4 grid grid-cols-2 [&>li>span]:font-semibold [&>li]:flex [&>li]:flex-col [&>li]:items-start [&>li]:gap-x-2">
        <li>
          <span>Marca :</span>
          <p>{formData.name}</p>
        </li>
        <li>
          <span>Descripción :</span>
          <p>{formData.description}</p>
        </li>
        <li>
          <span>Titular :</span>
          <p>{formData.owner}</p>
        </li>
      </ul>
      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" onClick={goBack} isDisabled={currentStep === 0}>
          Atrás
        </Button>
        <Button
          color="primary"
          type="submit"
          isDisabled={currentStep === maxStep}
          disabled={currentStep === maxStep}
        >
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default Completed;
