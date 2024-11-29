import { User } from "@nextui-org/user";
import Link from "next/link";
import React from "react";
import { api } from "~/trpc/react";

const BrandList = () => {
  const { data: brandsExplore } = api.brand.explore.useQuery();

  return (
    <>
      <h2 className="mb-4 text-default-400">Listado de Marcas</h2>
      <ul className="flex h-full w-full flex-col">
        {brandsExplore?.map((brand) => {
          return (
            <li
              key={brand.id}
              className="flex items-center justify-between gap-x-4 border-b py-6 dark:border-white/10"
            >
              <User
                name={brand.name}
                description={
                  brand.User?.name?.split(" ").slice(0, 2).join("  ") || ""
                }
                avatarProps={{
                  src: brand.User?.image || "",
                  style: {
                    viewTransitionName: `avatar-${brand.id}`,
                  },
                  name: brand.name,
                  color: "primary",
                }}
                classNames={{
                  name: "font-medium text-lg",
                }}
              />
              <Link
                href={`/main/brand/${brand.id}`}
                className="text-xs dark:text-white"
              >
                Ver detalle
              </Link>
            </li>
          );
        })}
        <li className="flex h-full w-full items-center justify-center">
          {brandsExplore?.length === 0 && <p>No hay marcas registradas</p>}
        </li>
      </ul>
    </>
  );
};

export default BrandList;
