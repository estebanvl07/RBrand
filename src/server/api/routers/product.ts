import { createTRPCRouter, protectedProcedure } from "../trpc";
import * as BrandServices from "../services/brand.services";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  // create: protectedProcedure.input({}).mutation(async ({ ctx, input }) => {
  //   const userId = ctx.session.user.id;
  //   return BrandServices.createBrand(ctx.db, userId, input);
  // }),
  getProductById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      return ctx.db.product.findFirst({ where: { id: input } });
    }),
});
