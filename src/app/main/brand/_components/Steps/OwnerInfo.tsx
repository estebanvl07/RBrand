"use client";

import { useEffect } from "react";
import { Input } from "@nextui-org/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateOwnerSchema, createOwnerSchema } from "./schemas";

import type { StepOptionProps } from "./types";
import { Button } from "@nextui-org/button";
import { useStepper } from "~/components/contexts/StepperProvider";

const OwnerInfo = ({
  goBack,
  goNext,
  currentStep,
  maxStep,
}: StepOptionProps<CreateOwnerSchema>) => {
  const { formData, setFormData } = useStepper();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<CreateOwnerSchema>({
    resolver: zodResolver(createOwnerSchema),
  });

  const onSubmit = (data: CreateOwnerSchema) => {
    setFormData({ ...formData, ...data });
    goNext();
  };

  useEffect(() => {
    if (formData) {
      formData.name && setValue("owner", formData.owner);
    }
  }, [formData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
    >
      <Input
        label="Titular"
        placeholder="Nombre del titular"
        isRequired
        isInvalid={Boolean(errors?.owner?.message)}
        errorMessage={errors?.owner?.message}
        {...register("owner")}
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

export default OwnerInfo;
