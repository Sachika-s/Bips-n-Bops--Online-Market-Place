
import { Category } from "@/payload-types";
import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { SearchFilters } from "./search-filters";

import configPromise from '@payload-config'
import { getPayload } from 'payload'
 


interface Props{
    children: React.ReactNode;
};
//flex-1  --> ensures footer is to the bottom of page and children take as much space as they can
const Layout = async ({ children}: Props) => {
    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
    collection:"categories",
    depth : 1, //to populatr sub-categories, only 1 level. no sub-categories of sub-categories
    pagination: false,
    where:  {
      parent:{
        exists: false,  //wil first only download parent (main level matrix). The sub-categories get loaded

      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories:(doc.subcategories?.docs ??[]).map((doc) => ({
        ...(doc as Category),   //depth is 1, so doc will be a category
        subcategories: undefined, 
        }))
  }));


  console.log({
    data,
    formattedData,
  });

    return (
        <div className = "flex flex-col min-h-screen">
            <NavBar/>
            <SearchFilters data={formattedData}/>
            <div className="flex-1 bg-[#F4F4F0]"> 
            
                {children}
            </div>
            <Footer/>
        </div>

        );


}
export default Layout;