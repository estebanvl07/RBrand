import React from "react";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";
import { HydrateClient } from "~/trpc/server";
import { Table } from "~/components";

const MainPage = () => {
  return (
    <HydrateClient>
      mainnnn
      {/* <Table
        data={[]}
        headerConfig={{}}
        columns={[{ uid: "nn", name: "Nombre" }]}
      /> */}
    </HydrateClient>
  );
};

export default MainPage;
