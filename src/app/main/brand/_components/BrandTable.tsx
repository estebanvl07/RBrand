"use client";

import React, { useCallback } from "react";

import { Table } from "~/components";
import { useOnActive } from "~/hooks/useOnActive";
import { User } from "@nextui-org/user";
import { Chip, Tooltip } from "@nextui-org/react";
import CreateBrand from "./CreateBrand";
import Actions from "~/components/Table/Actions";

import { toast } from "sonner";
import { es } from "date-fns/locale";
import clsx from "clsx";
import { format } from "date-fns";
import { useStepper } from "~/components/contexts/StepperProvider";
import { api } from "~/trpc/react";

import { useMyBrandsContext } from "../_contexts/Brands";
import { columns } from "./Table/columns";

import type { BrandWithIncludes } from "../../_types/root";

const BrandTable = () => {
  const { isActive, onActive, onDisabled } = useOnActive();
  const { brands, isLoading, refreshBrands } = useMyBrandsContext();
  const { setIsEdit } = useStepper();

  const { mutateAsync: DeleteBrandMutation } = api.brand.delete.useMutation();

  const renderCell = useCallback(
    (brand: BrandWithIncludes, columnKey: React.Key) => {
      const cellValue = brand[columnKey as keyof BrandWithIncludes];

      switch (columnKey) {
        case "name":
          return (
            <div className="">
              <User
                name={brand.name}
                description={format(brand.createdAt, "PPP", { locale: es })}
                avatarProps={{
                  name: brand.name,
                  color: "primary",
                  style: {
                    viewTransitionName: `avatar-${brand.id}`,
                  },
                }}
                classNames={{
                  name: "font-medium",
                }}
              />
            </div>
          );
        case "description":
          return (
            <Tooltip content={brand.description}>
              <p className="max-w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                {brand.description}
              </p>
            </Tooltip>
          );
        case "state":
          return (
            <Chip
              variant="dot"
              classNames={{
                dot: clsx({
                  "bg-green-600": brand.state,
                }),
              }}
            >
              {brand.state ? "Activo" : "Inactivo"}
            </Chip>
          );
        case "actions":
          return (
            <Actions
              viewHref={`/main/brand/${brand.id}`}
              hasEdit={false}
              onClickDelete={() => {
                toast(`¿Estas seguro de eliminar la marca ${brand.name}?`, {
                  action: {
                    label: "Eliminar",
                    onClick: () => {
                      toast.promise(
                        DeleteBrandMutation(brand.id, {
                          onSuccess() {
                            refreshBrands();
                          },
                        }),
                        {
                          loading: "ELiminando Marca...",
                          success: "La Marca se ha eliminado con éxito.",
                          error: "Hubo un error, intente de nuevo",
                        },
                      );
                    },
                  },
                });
              }}
            />
          );
        default:
          return cellValue;
      }
    },
    [brands],
  );

  return (
    <div>
      <Table
        data={brands}
        isLoading={isLoading}
        filterKeys={["owner", "name", "description"]}
        headerConfig={{
          newButtonText: "Crear Marca",
          onNew: () => {
            setIsEdit(false);
            onActive();
          },
        }}
        renderCell={renderCell}
        columns={columns}
      />
      <CreateBrand
        onCompleted={() => {
          refreshBrands();
        }}
        isOpen={isActive}
        onClose={onDisabled}
      />
    </div>
  );
};

export default BrandTable;
