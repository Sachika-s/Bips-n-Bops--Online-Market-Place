"use client"
import { generateTenantURL } from "@/lib/utils";
//import { CheckoutButton } from "@/modules/checkout/ui/components/checkout-button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link  from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

const CheckoutButton = dynamic(
    () => import("@/modules/checkout/ui/components/checkout-button").then(
        (mod) => mod.CheckoutButton,
    ),{
        ssr: false,   //to avoid hydration error 
        loading: () => <Button disabled className="bg-white" ><ShoppingCartIcon className="text-black"/></Button>
    },
)

interface Props{
    slug: string;
};
export const NavBar = ({slug}: Props) => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.tenants.getOne.queryOptions({slug}));

return (
    <nav className="h-20 border-b font-medium bg-white">
        <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12" >
            <Link href={generateTenantURL(slug)} className="flex items-center gap=2">
            <p className ="text-xl">
                {data.name}
            </p>
            </Link>
            <CheckoutButton tenantSlug={slug}/>

        </div>
    </nav>
);
};

export const NavbarSkeleton = () => {
    return (
        <nav className="h-20 border-b font-medium bg-white">
            <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
                <div />
                <Button disabled className = "bg-white">
                    <ShoppingCartIcon className="text-black"/>
                </Button>
        
            </div>
        </nav>
    )
}