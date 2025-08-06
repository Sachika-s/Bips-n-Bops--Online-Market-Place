import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";





export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {

        const data = await ctx.payload.find({
            collection:"categories",
            depth : 1, //to populatr sub-categories, only 1 level. no sub-categories of sub-categories
            pagination: false,
            where:  {
            parent:{
                exists: false,  //wil first only download parent (main level matrix). The sub-categories get loaded

            },
            },
            sort:"name"
        });

         const formattedData = data.docs.map((doc) => ({
            ...doc,
            subcategories:(doc.subcategories?.docs ??[]).map((doc) => ({
                ...(doc as Category),   //depth is 1, so doc will be a category
                subcategories: undefined, 
                }))
          }));

        return formattedData;
    }),
}); 