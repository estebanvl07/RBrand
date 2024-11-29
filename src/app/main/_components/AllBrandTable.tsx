"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Table } from "~/components";
import { columns } from "./Table/columns";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";
import clsx from "clsx";
import Actions from "~/components/Table/Actions";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { User } from "@nextui-org/user";
import { BrandWithIncludes } from "../_types/root";
import { api } from "~/trpc/react";
import BrandList from "./BrandList";
import { useResize } from "~/hooks/useResize";

const AllBrandTable = () => {
  const [isClient, setIsClient] = useState(false);
  const { data: brandsExplore, isLoading } = api.brand.explore.useQuery();

  const { isDesktop } = useResize();

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
      {isDesktop ? (
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
      ) : (
        <BrandList />
      )}
    </>
  );
};

export default AllBrandTable;
