import { DefaultValues } from "~/hooks/useDragAndDrop";
import {
  CreateBrandSchema,
  CreateImageSchema,
  CreateOwnerSchema,
} from "./Steps/schemas";

export interface CreateBrandInput extends CreateBrandSchema, CreateOwnerSchema {
  images: DefaultValues[];
}
