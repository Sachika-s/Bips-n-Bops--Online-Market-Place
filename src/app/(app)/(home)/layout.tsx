
import { Suspense } from "react";
import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { SearchFilters, SearchFiltersLoading } from "./search-filters";

//imports for trpc client side

import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";


 


interface Props{
    children: React.ReactNode;
};

//flex-1  --> ensures footer is to the bottom of page and children take as much space as they can
const Layout = async ({ children}: Props) => {
  //are prefetching trpc  
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  );



    return (
        <div className = "flex flex-col min-h-screen">
            <NavBar/>
            <HydrationBoundary state={dehydrate(queryClient)}> 
              <Suspense fallback={<SearchFiltersLoading />}>
            <SearchFilters/>
              </Suspense>
            </HydrationBoundary>
            <div className="flex-1 bg-[#F4F4F0]"> 
            
                {children}
            </div>
            <Footer/>
        </div>

        );


}
export default Layout;