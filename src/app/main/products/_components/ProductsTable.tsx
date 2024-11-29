"use client";

import React from "react";
import { Table } from "~/components";
import { columns } from "./Table/columns";
import CreateProduct from "./CreateProduct";
import useShowForm from "~/hooks/useShowForm";

const ProductsTable = () => {
  const { onShowCreate, showCreate, onCloseCreate } = useShowForm<any>({});

  return (
    <div>
      <Table
        data={[]}
        headerConfig={{
          onNew: () => onShowCreate(),
        }}
        columns={columns}
      />
      <CreateProduct isOpen={showCreate} onClose={onCloseCreate} />
    </div>
  );
};

export default ProductsTable;
