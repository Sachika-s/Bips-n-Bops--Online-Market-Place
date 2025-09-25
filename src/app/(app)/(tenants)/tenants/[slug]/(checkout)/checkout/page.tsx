/*
import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

interface PageProps {
    params: { slug : string};
}


const Page = async ({params}: PageProps) => {
    const { slug } = params;
    return <CheckoutView tenantSlug={slug} />
}

export default Page; 

*/

import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <CheckoutView tenantSlug={slug} />;
};

export default Page;
