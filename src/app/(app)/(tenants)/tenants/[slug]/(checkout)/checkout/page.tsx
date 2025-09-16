import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

interface PageProps {
    params: { slug : string};
}


const Page = async ({params}: PageProps) => {
    const { slug } = await params;
    return <CheckoutView tenantSlug={slug} />
}

export default Page; 