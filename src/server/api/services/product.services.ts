import { Prisma, PrismaClient } from "@prisma/client";

export async function getProductById(db: PrismaClient, id: string) {
  return db.product.findFirst({ where: { id } });
}

export async function createProduct(
  db: PrismaClient,
  userId: string,
  input: Prisma.ProductUncheckedCreateInput,
) {
  try {
    const Product = await db.product.create({ data: { ...input, userId } });
    return Product;
  } catch (error) {
    throw new Error("Error al crear la producto, intent de nuevo");
  }
}

export async function updateProduct(
  db: PrismaClient,
  userId: string,
  productId: string,
  input: Prisma.ProductUncheckedUpdateInput,
) {
  try {
    const Product = await db.product.update({
      data: { ...input },
      where: { userId, id: productId },
    });
    return Product;
  } catch (error) {
    throw new Error("Error al crear la producto, intent de nuevo");
  }
}

export async function deleteProduct(
  db: PrismaClient,
  userId: string,
  productId: string,
) {
  try {
    const Product = await db.product.delete({
      where: { id: productId, userId },
    });
    return Product;
  } catch (error) {
    throw new Error("Error eliminar esta producto, intente de nuevo");
  }
}
