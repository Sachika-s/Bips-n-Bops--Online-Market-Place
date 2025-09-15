"use client"
import { Button } from "@/components/ui/button";
import { formatCurrency, generateTenantURL } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
///import { CartButton } from "../components/cart-button";
import dynamic from "next/dynamic";

const CartButton = dynamic(
    () => import("../components/cart-button").then(
        (mod) => mod.CartButton,
    ),{
        ssr: false,   //to avoid hydration error 
        loading: () => <Button disabled className="flex-1 bg-pink-400" >Add to cart</Button>
    },
)
interface ProductViewProps {
    productId : string;
    tenantSlug: string;
};

export const ProductView = ({productId, tenantSlug}: ProductViewProps) => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.products.getOne.queryOptions({id: productId}));

    return (
        <div className = "px-4 lg:px-12 py-10">
            <div className="border rounded-sm bg-white overflow-hidden">
                <div className="relative aspect-[3.9] border-b">
                    <Image 
                        src= {data.image?.url || "/pexels-pramodtiwari-13575099.jpg"}
                        alt={data.name }
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-6">
                    <div className="col-span-4">
                        <div className="p-6">
                            <h1 className="text-4xl font-medium">
                                {data.name}
                            </h1>
                        </div>
                        <div className="border-y flex">
                            <div className="px-6 py-4 flex items-center justify-center border-r">
                                <div className="relative px-2 py-1 border bg-pink-400 w-fit">
                                    <p className="text-base font-medium">${formatCurrency(data.price)}</p>

                                </div>

                            </div>
                            <div className="px-6 py-4 flex items-center justify-center lg:border-r">
                                <Link href={generateTenantURL(tenantSlug)} className="flex items-center gap-2" >
                                {data.tenant.image?.url && (
                                    <Image 
                                        src={data.tenant.image.url}
                                        alt={data.tenant.name}
                                        width={20}
                                        height={20}
                                        className="rounded-full border shrink-0 size-[20px]"
                                    
                                    />
                                )}
                                <p className="text-base underline font-medium">
                                    {data.tenant.name}
                                </p>

                                </Link>

                            </div>
                            <div className="p-6">
                                {data.description ? (
                                    <p>{data.description}</p>
                                ): (
                                  <p className="font-medium text-muted-foreground italic">
                                    No description provided
                                  </p>  
                                )}

                            </div>
                            
                        </div>

                       <div className="col-span-2">
                        <div className="border-t lg:border-t-0 lg:border-l h-full">
                            <div className="flex flex-col gap-4 p-6 border-b">
                                <div className="flex flex-row items-center gap-2">
                                   <CartButton 
                                        productId={productId}
                                        tenantSlug={tenantSlug}
                                         
                                   />
                                    <Button
                                        className="size-12"
                                        variant="elevated"
                                        onClick={() => {}}
                                        disabled={false}
                                    >
                                        <LinkIcon/>

                                    </Button>

                                </div>
                                <p className="text-center font-medium">
                                    {data.refundPolicy=== "no-refunds"
                                        ? "No refunds"
                                        : `${data.refundPolicy} money back guarantee`
                                    }
                                </p>
                            </div>

                            
                        </div>
                        </div> 

                    </div>

                </div>
            </div>
        </div>
    );
};