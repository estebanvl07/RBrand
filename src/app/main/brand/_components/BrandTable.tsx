"use client";

import React from "react";
import { Table } from "~/components";
import { columns } from "./Table/columns";
import CreateBrand from "./CreateBrand";
import { useOnActive } from "~/hooks/useOnActive";

const BrandTable = () => {
  const { isActive, onActive, onDisabled } = useOnActive();

  return (
    <div>
      <Table
        data={[]}
        isLoading={false}
        filterKeys={["owner", "brand"]}
        headerConfig={{
          newButtonText: "Crear Marca",
          onNew: () => {
            onActive();
          },
        }}
        columns={columns}
      />
      <CreateBrand isOpen={isActive} onClose={onDisabled} />
    </div>
  );
};

export default BrandTable;
