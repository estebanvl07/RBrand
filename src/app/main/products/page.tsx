import { HydrateClient } from "~/trpc/server";
import ContentLayout from "~/components/ContentLayout";

const ProductsPage = () => {
  return (
    <HydrateClient>
      <ContentLayout
        title="Tabla de Productos"
        description="Registra todos tus productos para que los usuarios puedan conocerlos"
      >
        Products Page
      </ContentLayout>
    </HydrateClient>
  );
};

export default ProductsPage;
