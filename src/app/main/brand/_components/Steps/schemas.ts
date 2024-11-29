import { z } from "zod";
import { updateSchema, Z_STRING } from "~/lib/resolvers/zod";

// BRAND SCHEMA

const createBrand = {
  name: Z_STRING.min(3, "Debe contener minimo 3 caracteres"),
  description: z
    .string()
    .max(255, "La descripción no contenter más de 255 caracteres")
    .optional(),
};

export const createBrandSchema = z.object(createBrand);
export type CreateBrandSchema = z.infer<typeof createBrandSchema>;
export const updateBrandSchema = updateSchema(createBrand);
export type UpdateBrandSchema = z.infer<typeof updateBrandSchema>;

// OWNER SCHEMA

const createOwner = {
  owner: Z_STRING.min(3, "Debe contener minimo 3 caracteres"),
};

export const createOwnerSchema = z.object(createOwner);
export type CreateOwnerSchema = z.infer<typeof createOwnerSchema>;
export const updateOwnerSchema = updateSchema(createOwner);
export type UpdateOwnerSchema = z.infer<typeof updateOwnerSchema>;

const input = {
  name: Z_STRING.min(3, "Debe contener minimo 3 caracteres"),
  description: z
    .string()
    .max(255, "La descripción no contenter más de 255 caracteres")
    .optional(),
  owner: Z_STRING.min(3, "Debe contener minimo 3 caracteres"),
};

export const inputCreateBrandSchema = z.object(input);
export type InputCreateBrandSchema = z.infer<typeof inputCreateBrandSchema>;
export const inputUpdateBrandSchema = updateSchema(input);
export type InputUpdateBrandSchema = z.infer<typeof inputUpdateBrandSchema>;
