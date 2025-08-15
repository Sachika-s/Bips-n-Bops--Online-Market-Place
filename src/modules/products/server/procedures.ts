
import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Where } from "payload";
import z from "zod";


export const productsRouter = createTRPCRouter({
    getMany: baseProcedure
    .input(
        z.object({
            category:z.string().nullable().optional(),

    }),
)
    .query(async ({ ctx, input }) => {
        const where: Where = {} 
        if (input.category){
            const categoriesData = await ctx.payload.find({
                collection: "categories",
                limit: 1,
                depth:1,
                pagination: false,
                where: {
                    slug: {
                        equals: input.category,
                    }
                }
            });

            console.log(JSON.stringify(categoriesData, null ,2));

                     const formattedData = categoriesData.docs.map((doc) => ({
                        ...doc,
                        subcategories:(doc.subcategories?.docs ??[]).map((doc) => ({
                            ...(doc as Category),   //depth is 1, so doc will be a category
                            subcategories: undefined, 
                            }))
                      }));
                const subcategoriesSlugs = [];
                const parentCategory = formattedData[0]; 

                if (parentCategory){
                    subcategoriesSlugs.push(
                        ...parentCategory.subcategories.map((subcategory) => subcategory.slug)
                    )
                    
                    }
                    where["category.slug"] = {
                        in: [parentCategory.slug, ...subcategoriesSlugs]
                }
        } 
        const data = await ctx.payload.find({
            collection:"products",
            depth : 1,
            where, //to populatr categories and image,
    
        });

    
        return data;
    }),
}); 