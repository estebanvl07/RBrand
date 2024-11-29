"use client";

import React from "react";
import { Dialog } from "~/components";
import { createDialogFormProps } from "~/components/types/dialog.types";
import ProductForm from "./ProductForm";

const CreateProduct = ({ isOpen, onClose }: createDialogFormProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Crear Producto"
      subtitle="Registra todos tus productos"
    >
      <ProductForm />
    </Dialog>
  );
};

export default CreateProduct;
