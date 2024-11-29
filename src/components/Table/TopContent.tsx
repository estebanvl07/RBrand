import React, { useState } from "react";
import Link from "next/link";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react/dist/iconify.js";

import { type TopContentProps } from "~/components/types/table.types";
import clsx from "clsx";

const TopContent = React.memo(
  ({
    title,
    lenght,
    hasExport = true,
    hasNew = true,
    hasSearch = true,
    newButtonText,
    filterValue,
    onNew,
    inputPlaceholder = "Buscar",
    setFilterValue,
    setPage,
    redirectTo,
    setRowsPerPage,
  }: TopContentProps) => {
    const onSearchChange = React.useCallback((e: any) => {
      const value = e.target.value;
      if (value) {
        setFilterValue && setFilterValue(value);
        setPage && setPage(1);
      } else {
        setFilterValue && setFilterValue("");
      }
    }, []);

    const onRowsPerPageChange = React.useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage && setRowsPerPage(Number(e.target.value));
        setPage && setPage(1);
      },
      [],
    );

    return (
      <>
        <header
          className={clsx("flex flex-col justify-between gap-4", {
            "!items-end": !hasNew,
          })}
        >
          <div className="flex items-center justify-between">
            {hasSearch && (
              <Input
                placeholder={inputPlaceholder}
                startContent={<Icon icon="iconoir:search" width={18} />}
                className={clsx("!w-[40%]", {
                  "!w-full": !hasNew,
                })}
                classNames={{
                  inputWrapper: "border dark:border-white/10",
                }}
                value={filterValue}
                onChange={onSearchChange}
              />
            )}
            <div className="flex gap-3">
              {/* {hasExport && (
              <Button variantStyle="outline" className="!border">
                <Icon icon="mingcute:file-export-line" width={18} />
                Exportar
              </Button>
            )} */}
              {hasNew && (
                <Button
                  onClick={onNew}
                  color="primary"
                  as={Link}
                  size="md"
                  href={redirectTo ?? "#"}
                  className="flex items-center gap-2"
                >
                  <Icon icon="ic:round-plus" width={18} />
                  {newButtonText ?? "Crear Nuevo"}
                </Button>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-small text-default-500">
              Total de registros: {lenght}
            </span>
            <label className="flex items-center gap-2 text-small text-default-500">
              Filas por páginas:
              <select
                className="rounded-md bg-default-100 px-1 text-small text-default-500 outline-none"
                onChange={onRowsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </label>
          </div>
        </header>
      </>
    );
  },
);

export default TopContent;
