const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Have questions, feedback, or issues? We’re here to help.
        </p>
      </header>

      <div className="space-y-4">
        <p className="text-gray-700">
          If you run into any problems while using <strong>bips n bops</strong>, 
          or just want to share suggestions, don’t hesitate to reach out!
        </p>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <strong>Developer Contact</strong>
          <p className="text-sm mt-2 text-gray-700">
            This platform was built to support local vendors and buyers.  
            If you need direct support, you can contact the developer here:
          </p>
          <a
            href="https://github.com/Sachika-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            👉 GitHub: github.com/Sachika-s
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
