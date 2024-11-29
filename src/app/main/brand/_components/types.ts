import { DefaultValues } from "~/hooks/useDragAndDrop";
import { CreateBrandSchema, CreateOwnerSchema } from "./Steps/schemas";

export interface CreateBrandInput
  extends CreateBrandSchema,
    CreateOwnerSchema {}
