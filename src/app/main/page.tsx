import { HydrateClient } from "~/trpc/server";

import ContentLayout from "~/components/ContentLayout";
import AllBrandsTable from "./_components/AllBrandTable";

const MainPage = () => {
  return (
    <HydrateClient>
      <ContentLayout
        title="Exlora Marcas"
        description="Mira todas las marcas creadas por los usuarios"
      >
        <AllBrandsTable />
      </ContentLayout>
    </HydrateClient>
  );
};

export default MainPage;
