import { HydrateClient } from "~/trpc/server";

import { StepperProvider } from "~/components/contexts/StepperProvider";

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
