//import { z } from 'zod';
import { authRouter } from '@/modules/auth/server/procedures';
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { productsRouter } from '@/modules/products/server/procedures';
import { tagsRouter } from '@/modules/tags/server/procedures';
import { tentantsRouter } from '@/modules/tentants/server/procedures';
import { checkoutRouter } from '@/modules/checkout/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  products: productsRouter,
  tags: tagsRouter,
  checkout : checkoutRouter,
  categories: categoriesRouter,
  tenants: tentantsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;