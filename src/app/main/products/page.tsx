import React from "react";
import ContentLayout from "~/components/ContentLayout";
import ProductsTable from "./_components/ProductsTable";
import { HydrateClient } from "~/trpc/server";

const ProductsPage = () => {
  return (
    <HydrateClient>
      <ContentLayout
        title="Tabla de Productos"
        description="Registra todos tus productos para que los usuarios puedan conocerlos"
      >
        <ProductsTable />
      </ContentLayout>
    </HydrateClient>
  );
};

export default ProductsPage;
