const Page = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
                 <header className="mb-4">
        <h2 className="text-2xl font-bold">About Us</h2>
      </header>

      <p className="text-gray-700 mb-6">
        Welcome to <strong>Bips n Bops</strong> — a community-first marketplace
        built to connect people with the things they love. We help local vendors and creators
        reach more customers while keeping the platform simple, secure, and free to use.
      </p>

      <div className="space-y-4">
        <p>
          At <strong>Bips n Bops</strong>, we believe commerce should be empowering.
          Our platform is designed to amplify local talent and small businesses by providing
          a friendly storefront, easy listing tools, and an audience ready to discover new
          products. Whether you are a one-person shop or a growing business, we make it simple
          to share your story and sell your products.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <strong>Vendors First</strong>
            <p className="text-sm mt-1">
              Our developers take no commission — the platform is free to use so sellers
              keep more of their revenue.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <strong>Local Impact</strong>
            <p className="text-sm mt-1">
              We help local vendors reach more people and grow their communities,
              one sale at a time.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <strong>Safe &amp; Secure</strong>
            <p className="text-sm mt-1">
              We prioritize privacy and security with trusted payment flows
              and customer protections.
            </p>
          </div>
        </div>

        </div>
        </div>

    );
}

export default Page;