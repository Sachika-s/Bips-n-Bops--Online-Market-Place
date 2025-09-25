const Pricing = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Pricing</h2>
      </header>

      <p className="text-gray-700 mb-4">
        At <strong>bips n bops</strong>, we believe pricing should always be fair and
        transparent. Every price you see is set to reflect the effort and creativity of
        our local vendors, ensuring they’re properly valued for their work.
      </p>

      <p className="text-gray-700 mb-4">
        We carefully review and guide pricing to keep it reasonable for customers while
        respecting the time, skill, and resources of each vendor.
      </p>

      <p className="text-gray-700">
        All transactions are powered by <strong>Stripe</strong>, providing a safe,
        secure, and seamless checkout experience for both buyers and sellers.
      </p>
    </div>
  );
};

export default Pricing;
