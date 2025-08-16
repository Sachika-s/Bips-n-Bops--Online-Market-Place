
import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Sort, Where } from "payload";
import z from "zod";
import { sortValue } from "../search-params";


export const productsRouter = createTRPCRouter({
    getMany: baseProcedure
    .input(
        z.object({
            category:z.string().nullable().optional(),
            minPrice :z.string().nullable().optional(),
             maxPrice :z.string().nullable().optional(),
             tags: z.array(z.string()).nullable().optional(),
             sort: z.enum(sortValue).nullable().optional(),

    }),
)
    .query(async ({ ctx, input }) => {
        const where: Where = {};
        let sort: Sort = "-createdAt" ; 

        if(input.sort === "trending"){
            sort = "-createdAt";

        }
        if(input.sort === "new_and_hot"){
            sort = "-createdAt";
        }
        if(input.sort === "trending"){
            sort = "-createdAt";
        }
        if(input.minPrice && input.maxPrice){
            where.price = {
                ...where.price,
                less_than_equal: input.maxPrice,
                greater_than_equal: input.minPrice
            }
        } else if (input.minPrice){
            where.price = {
                greater_than_equal: input.minPrice
            }
        } else if (input.maxPrice){
            where.price ={
                less_than_equal: input.maxPrice   

            }
        }
        
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

           // console.log(JSON.stringify(categoriesData, null ,2));

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
                     where["category.slug"] = {
                        in: [parentCategory.slug, ...subcategoriesSlugs]
                    }
                    
                }
        } 
        if (input.tags && input.tags.length > 0){
            where["tags.name"]={
                in: input.tags,
            };

        }
        const data = await ctx.payload.find({
            collection:"products",
            depth : 1,
            where, //to populatr categories and image,
            sort,
    
        });

    
        return data;
    }),
}); 