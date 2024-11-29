"use client";

import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import Portal from "~/components/Portal";

const ProductForm = () => {
  const [isClient, setIsClient] = useState(false);
  const { handleSubmit, formState, setValue } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    toast("¿Estas seguro de crear este producto?", {
      action: {
        label: "Crear",
        actionButtonStyle: {
          color: "black",
        },
        onClick: () => {},
      },
      cancel: {
        label: "Cancelar",
        onClick: () => {},
      },
    });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {/* <Input label="Nombre" isRequired placeholder="Zapato, Camisa" />
      <Input
        label="Precio"
        isRequired
        placeholder="200.000"
        startContent={<>$</>}
      />
      <Select
        items={[]}
        isRequired
        label="Marca"
        placeholder="Selecciona una de tus marcas"
      >
        {(brand) => <SelectItem key={1}></SelectItem>}
      </Select>
      <Accordion>
        <AccordionItem
          key="1"
          classNames={{
            base: "border-red-600",
            title: "font-semibold",
            subtitle: "dark:text-zinc-400",
          }}
          title="Información Adicional"
          subtitle="Agrega más información sobre tu producto"
        >
          <div className="flex flex-col gap-2">
            <Input placeholder="Descripción" />
            <Input placeholder="Stock" />
          </div>
        </AccordionItem>
      </Accordion> */}
        <div className="gap-2s flex items-center">
          <Button type="button">Cancelar</Button>
          <Button type="submit" onClick={onSubmit} color="primary">
            Crear Producto
          </Button>
        </div>
      </form>
      <Toaster position="bottom-left" />
    </>
  );
};

export default ProductForm;
