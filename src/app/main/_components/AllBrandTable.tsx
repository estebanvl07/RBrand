"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Table } from "~/components";
import { columns } from "./Table/columns";
import { useBrandsExplore } from "../brand/_hooks/useBrandsExplore";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";
import clsx from "clsx";
import Actions from "~/components/Table/Actions";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { User } from "@nextui-org/user";
import { BrandWithIncludes } from "../_types/root";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

const AllBrandTable = () => {
  const [isClient, setIsClient] = useState(false);
  const { data: brandsExplore, isLoading } = api.brand.explore.useQuery();
  const { data: session } = useSession();

  const renderCell = useCallback(
    (brand: BrandWithIncludes, columnKey: React.Key) => {
      const cellValue = brand[columnKey as keyof BrandWithIncludes];

      switch (columnKey) {
        case "name":
          return (
            <div className="">
              <User
                name={brand.name}
                description={
                  brand.User.name?.split(" ").slice(0, 2).join("  ") || ""
                }
                avatarProps={{
                  src: brand.User.image || "",
                  style: {
                    viewTransitionName: `avatar-${brand.id}`,
                  },
                  name: brand.name,
                  color: "primary",
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
        case "createdAt":
          return format(brand.createdAt, "PPP", { locale: es });
        case "actions":
          return (
            <Actions
              viewHref={`/main/brand/${brand.id}`}
              // onClickView={() => router.push()}
              hasEdit={false}
              hasDelete={false}
            />
          );
        default:
          return cellValue;
      }
    },
    [brandsExplore],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Table
          data={brandsExplore || []}
          isLoading={isLoading}
          filterKeys={["owner", "name"]}
          headerConfig={{
            hasNew: false,
          }}
          renderCell={renderCell}
          columns={columns}
        />
      )}
    </>
  );
};

export default AllBrandTable;
