import React from "react";

import { redirect } from "next/navigation";

import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import ContentLayout from "~/components/ContentLayout";

import { api } from "~/trpc/server";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import clsx from "clsx";
import DetailActions from "./_components/DetailActions";
import { BrandWithIncludes } from "../../_types/root";
import { StepperProvider } from "~/components/contexts/StepperProvider";

interface PageProps {
  params: { id: string };
}

const DetailBrandPage = async ({ params }: PageProps) => {
  const { id } = params;
  const brand = await api.brand.getBrandById(Number(id));

  if (!brand) redirect("/main");

  return (
    <StepperProvider>
      <ContentLayout
        title="Detalle de Marca"
        description={brand.owner || "Anonimo"}
      >
        <header className="flex items-center justify-between">
          <User
            name={brand?.name}
            description={brand?.User?.name}
            classNames={{
              name: "text-2xl font-semibold",
              description: "text-sm",
            }}
            avatarProps={{
              size: "lg",
              src: brand?.User?.image || "",
              name: brand?.User?.name || "Anónimo",
              style: {
                viewTransitionName: `avatar-${brand.id}`,
              },
            }}
          />
          {<DetailActions brand={brand as BrandWithIncludes} />}
        </header>
        <ul className="mt-4 grid max-w-3xl grid-cols-2 gap-y-2 [&>li>span]:font-semibold [&>li]:flex [&>li]:flex-col [&>li]:items-start [&>li]:gap-x-2">
          <li>
            <span>Marca :</span>
            <p>{brand.name}</p>
          </li>
          <li>
            <span>Descripción :</span>
            <p>{brand.description}</p>
          </li>
          <li>
            <span>Titular :</span>
            <p>{brand.owner}</p>
          </li>
          <li>
            <span>Estado de marca :</span>
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
          </li>
          <li>
            <span>Fecha de cración :</span>
            <p>{format(brand.createdAt, "PPP", { locale: es })}</p>
          </li>
          <li>
            <span>Usuario :</span>
            <p>{brand.User?.name || "Anónimo"}</p>
          </li>
        </ul>
      </ContentLayout>
    </StepperProvider>
  );
};

export default DetailBrandPage;
