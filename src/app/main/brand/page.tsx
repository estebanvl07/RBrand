import React from "react";
import { StepperProvider } from "~/components/contexts/StepperProvider";
import { HydrateClient } from "~/trpc/server";
import BrandTable from "./_components/BrandTable";
import ContentLayout from "~/components/ContentLayout";

const BrandPage = () => {
  return (
    <HydrateClient>
      <ContentLayout
        title="Mis Marcas"
        description="Registra todas tus marcas para que los usuarios te conozcan"
      >
        <StepperProvider>
          <BrandTable />
        </StepperProvider>
      </ContentLayout>
    </HydrateClient>
  );
};

export default BrandPage;
