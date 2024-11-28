import React, { useEffect } from "react";
import { Input, Textarea } from "@nextui-org/input";

import type { StepOptionProps } from "./types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBrandSchema, type CreateBrandSchema } from "./schemas";
import { Button } from "@nextui-org/button";
import { useStepper } from "~/components/contexts/StepperProvider";

const BrandInfo = ({
  goBack,
  goNext,
  currentStep,
  maxStep,
}: StepOptionProps<CreateBrandSchema>) => {
  const { formData, setFormData } = useStepper();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<CreateBrandSchema>({
    resolver: zodResolver(createBrandSchema),
  });

  const onSubmit = (data: CreateBrandSchema) => {
    setFormData({ ...formData, ...data });
    goNext();
  };

  useEffect(() => {
    if (formData) {
      console.log(formData);
      formData.name && setValue("name", formData.name);
      formData.description && setValue("description", formData.description);
    }
  }, [formData]);

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Nombre"
        placeholder="Nombre de tu marca"
        isInvalid={Boolean(errors.name?.message)}
        errorMessage={errors.name?.message}
        {...register("name")}
        isRequired
        required
      />
      <Textarea
        placeholder="Descripcion de tu marca"
        label="Descripción"
        isInvalid={Boolean(errors.description?.message)}
        errorMessage={errors.description?.message}
        {...register("description")}
      />
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
          Siguiente
        </Button>
      </div>
    </form>
  );
};

export default BrandInfo;
