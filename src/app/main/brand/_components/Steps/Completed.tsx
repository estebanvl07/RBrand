"use client";

import { FormEvent } from "react";
import { StepOptionProps } from "./types";
import { useStepper } from "~/components/contexts/StepperProvider";
import { Button } from "@nextui-org/button";
import { api } from "~/trpc/react";
import { toast } from "sonner";

const Completed = ({
  currentStep,
  goBack,
  onEnd,
  maxStep,
}: StepOptionProps<any>) => {
  const { formData, setFormData, isEdit, defaultBrand } = useStepper();
  const { mutateAsync: CreateBrandMutation } = api.brand.create.useMutation();
  const { mutateAsync: UpdateBrandMutation } = api.brand.update.useMutation();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      if (!defaultBrand) return;
      const payload = { ...formData, id: String(defaultBrand.id) };
      console.log(payload);
      toast.promise(
        UpdateBrandMutation(payload, {
          onSuccess() {
            setFormData({
              name: "",
              owner: "",
              description: "",
            });
            onEnd && onEnd();
          },
        }),
        {
          loading: "Editando Marca...",
          success: "La Marca se ha editado con éxito.",
          error: "Hubo un error, intente de nuevo",
        },
      );
      return;
    }
    if (isEdit) return;
    toast.promise(
      CreateBrandMutation(formData, {
        onSuccess() {
          onEnd && onEnd();
        },
      }),
      {
        loading: "Creando Marca...",
        success: "La Marca se ha creado con éxito.",
        error: "Hubo un error, intente de nuevo",
      },
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
      </form>
    </>
  );
};

export default Completed;
