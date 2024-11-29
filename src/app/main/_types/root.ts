import { Brand, User } from "@prisma/client";

export interface BrandWithIncludes extends Brand {
  User: User;
}
