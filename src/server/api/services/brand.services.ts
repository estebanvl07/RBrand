import { Prisma, PrismaClient } from "@prisma/client";

export async function getBrands(db: PrismaClient) {
  return db.brand.findMany({ where: { state: true }, include: { User: true } });
}

export async function getBrandById(db: PrismaClient, id: number) {
  return db.brand.findFirst({
    where: { state: true, id },
    include: { User: true },
  });
}

export async function getMyBrands(db: PrismaClient, userId: string) {
  return db.brand.findMany({ where: { userId }, include: { User: true } });
}

export async function createBrand(
  db: PrismaClient,
  userId: string,
  input: Prisma.BrandUncheckedCreateInput,
) {
  try {
    const brand = await db.brand.create({
      data: { ...input, userId },
    });
    return brand;
  } catch (error) {
    throw new Error("Error al crear la marca, intent de nuevo");
  }
}

export async function updateBrand(
  db: PrismaClient,
  userId: string,
  input: Prisma.BrandUncheckedUpdateInput,
) {
  try {
    const brand = await db.brand.update({
      data: { ...input },
      where: { userId, id: Number(input.id) },
    });
    return brand;
  } catch (error) {
    throw new Error("Error al crear la marca, intent de nuevo");
  }
}

export async function deleteBrand(
  db: PrismaClient,
  userId: string,
  brandId: number,
) {
  try {
    const brand = await db.brand.delete({ where: { id: brandId, userId } });
    return brand;
  } catch (error) {
    return error;
  }
}
