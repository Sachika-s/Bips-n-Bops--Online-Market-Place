

import { baseProcedure, createTRPCRouter } from "@/trpc/init";

import z from "zod";

import { Media, Tenant } from "@/payload-types";
import { TRPCError } from "@trpc/server";



export const checkoutRouter = createTRPCRouter({
    

    getProducts: baseProcedure
    .input(
        z.object({
           ids: z.array(z.string()),


    }),
)
    .query(async ({ ctx, input }) => {

        const data = await ctx.payload.find({
            collection:"products",
            depth : 2, //to populatr categories, tenant and image and tenant image,
            where:{
                id:{
                in: input.ids,
            },
        },

    
        });

        if( data.totalDocs !== input.ids.length){
            throw new TRPCError({ code: "NOT_FOUND", message: "Product not found"});
        }
    
        return {
            ...data,
            totalPrice: data.docs.reduce((acc, product) => acc + product.price, 0),
            docs: data.docs.map((doc) => ({
                ...doc,
                image: doc.image as Media | null,
                tenant: doc.tenant as Tenant & {image: Media | null},
            }))
        };
    }),
}); 