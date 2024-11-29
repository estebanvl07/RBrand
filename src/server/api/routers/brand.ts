import { createTRPCRouter, protectedProcedure } from "../trpc";
import * as BrandServices from "../services/brand.services";
import {
  inputCreateBrandSchema,
  inputUpdateBrandSchema,
} from "~/app/main/brand/_components/Steps/schemas";
import { z } from "zod";

export const brandRouter = createTRPCRouter({
  explore: protectedProcedure.query(async ({ ctx, input }) => {
    return BrandServices.getBrands(ctx.db);
  }),
  getBrandById: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      return BrandServices.getBrandById(ctx.db, input);
    }),
  myBrands: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    return BrandServices.getMyBrands(ctx.db, userId);
  }),
  create: protectedProcedure
    .input(inputCreateBrandSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      return BrandServices.createBrand(ctx.db, userId, input);
    }),
  update: protectedProcedure
    .input(inputUpdateBrandSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      return BrandServices.updateBrand(ctx.db, userId, {
        ...input,
        id: Number(input.id),
      });
    }),
  delete: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      return BrandServices.deleteBrand(ctx.db, userId, input);
    }),
});
