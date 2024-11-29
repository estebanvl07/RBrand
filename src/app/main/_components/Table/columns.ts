import { ColumnsProps } from "~/components/types/table.types";

export const columns: ColumnsProps[] = [
  {
    uid: "id",
    name: "ID",
  },
  {
    name: "MARCA",
    uid: "name",
  },
  {
    name: "DESCRIPCIÓN",
    uid: "description",
  },
  {
    name: "ESTADO",
    uid: "state",
  },
  {
    name: "OWNER",
    uid: "owner",
  },
  {
    name: "FECHA DE CREACIÓN",
    uid: "createdAt",
  },
  {
    name: "ACCIONES",
    uid: "actions",
  },
];
