import { CreateBrandSchema, CreateOwnerSchema } from "./Steps/schemas";

export interface CreateBrandInput
  extends CreateBrandSchema,
    CreateOwnerSchema {}
