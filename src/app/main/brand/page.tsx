import React from "react";
import CreateBrand from "./_components/CreateBrand";
import { StepperProvider } from "~/components/contexts/StepperProvider";
import { HydrateClient } from "~/trpc/server";
import BrandTable from "./_components/BrandTable";
import ContentLayout from "~/components/ContentLayout";

const BrandPage = () => {
  return (
    <HydrateClient>
      <ContentLayout
        title="Mis Cuentas"
        description="Lista de todas mis marcas"
      >
        <StepperProvider>
          <BrandTable />
        </StepperProvider>
      </ContentLayout>
    </HydrateClient>
  );
};

export default BrandPage;
