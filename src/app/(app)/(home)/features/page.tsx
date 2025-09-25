const Features = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-600 mt-2">
          Everything you need to buy, sell, and grow with <strong>bips n bops</strong>.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Secure Stripe Payments</strong>
          <p className="text-sm mt-2 text-gray-700">
            All transactions are powered by <strong>Stripe</strong>, ensuring payments
            are safe, secure, and seamless for both buyers and sellers.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Tags &amp; Filters</strong>
          <p className="text-sm mt-2 text-gray-700">
            Browse products with ease using tag-based browsing, price filters,
            and smart search tools that help you find exactly what you’re looking for.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Dedicated Storefronts</strong>
          <p className="text-sm mt-2 text-gray-700">
            Every vendor gets their own storefront, making it simple for customers
            to explore all of their products in one place.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Seamless Checkout</strong>
          <p className="text-sm mt-2 text-gray-700">
            Add to cart and checkout without hassle. Our streamlined process ensures
            a smooth shopping experience from start to finish.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Vendor Dashboard</strong>
          <p className="text-sm mt-2 text-gray-700">
            Vendors get a personal dashboard to add products, manage inventory,
            and track their sales with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
