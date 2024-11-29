"use client";

import { Button } from "@nextui-org/button";
import { useSession } from "next-auth/react";
import React from "react";
import { BrandWithIncludes } from "~/app/main/_types/root";
import useShowForm from "~/hooks/useShowForm";
import EditBrand from "../../_components/EditBrand";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useMyBrandsContext } from "../../_contexts/Brands";

const DetailActions = ({ brand }: { brand: BrandWithIncludes }) => {
  const { onShowEdit, showEdit, onCloseEdit } = useShowForm<BrandWithIncludes>({
    defaultData: brand,
  });
  const { mutateAsync: DeleteBrandMutation } = api.brand.delete.useMutation();
  const { data: session } = useSession();

  const router = useRouter();

  const { refreshBrands } = useMyBrandsContext();

  const onDeleteBrand = () => {
    toast.promise(
      DeleteBrandMutation(brand.id, {
        onSuccess(data) {
          refreshBrands();
          router.back();
        },
      }),
      {
        loading: "Eliminando Marca...",
        success: "La marca se ha eliminado con éxito.",
        error: "Hubo un error, intente de nuevo",
      },
    );
  };

  if (session?.user.id !== brand.User.id) return null;

  return (
    <aside className="flex items-center gap-2">
      <Button variant="bordered" color="danger" onClick={onDeleteBrand}>
        Elimiar Marca
      </Button>
      <Button color="primary" onClick={onShowEdit}>
        Editar Marca
      </Button>
      <EditBrand
        data={brand}
        isOpen={showEdit}
        onClose={onCloseEdit}
        onSuccess={() => {
          refreshBrands();
          router.replace(`/main/brand/${brand.id}`);
        }}
      />
    </aside>
  );
};

export default DetailActions;
