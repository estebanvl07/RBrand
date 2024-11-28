"use client";

import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { StepOptionProps } from "./types";
import { createImageSchema, CreateImageSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepper } from "~/components/contexts/StepperProvider";
import InputFile from "~/components/Input/InputFile";
import { useDragAndDrop } from "~/hooks/useDragAndDrop";
import ImagePreview from "~/components/Input/ImagePreview";
import clsx from "clsx";

const FIELDS_ATTACHMENTS = [
  {
    id: "principal_image",
    big: true,
  },
  {
    id: "image_2",
  },
  {
    id: "image_3",
  },
  {
    id: "image_4",
  },
  {
    id: "image_5",
  },
];

const ImageInfo = ({
  currentStep,
  goBack,
  goNext,
  maxStep,
}: StepOptionProps<CreateImageSchema>) => {
  const [isClient, setIsClient] = useState(false);
  const { formData, setFormData } = useStepper();

  const { dragOver, dragLeave, dragZones, drop, changeFile, deleteFile } =
    useDragAndDrop({
      filesLength: 1,
      defaultValues: formData.images,
    });

  const { handleSubmit, setValue } = useForm<CreateImageSchema>({
    resolver: zodResolver(createImageSchema),
  });

  const onSubmit = (data: CreateImageSchema) => {
    // setFormData({ ...formData, ...data });
    goNext();
  };

  useEffect(() => {
    dragZones.map((drag) => {
      drag.url;
    });
  }, [dragZones]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {isClient &&
          FIELDS_ATTACHMENTS.map((field, index) => (
            <InputFile
              key={field.id}
              id={field.id}
              contentClass={clsx("", {
                "col-span-2 row-span-2 justify-center": field.big,
                "row-span-1 col-span-1": !field.big,
              })}
              labelClass="h-full"
              onDragOver={(e) => dragOver(e, index)}
              onDragLeave={(e) => dragLeave(e, index)}
              onDrop={(e) => drop(e, index)}
              onChange={(e) => {
                const image = changeFile(e, index);
                console.log(image);
              }}
              accept="image/*"
              onClickInZone={() => {}}
              disabled={!!dragZones[index]?.url}
            >
              <ImagePreview
                mode={field.big ? "principal" : "secondary"}
                onDeleteImage={() => deleteFile(index)}
                {...dragZones[index]!}
              />
            </InputFile>
          ))}
      </div>

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

export default ImageInfo;
