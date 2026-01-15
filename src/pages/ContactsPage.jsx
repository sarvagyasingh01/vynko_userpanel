import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl px-6 pt-6 pb-12">
        <h1 className="text-4xl font-bold text-black mb-8">How Can We Help?</h1>

        <p className="text-lg font-semibold text-black mb-4">
          Got a question? Need help with your order? Or just want to say hey?
          <br />
          We're here for all of it.
        </p>

        <p className="text-lg text-black mb-10">
          Reach out – whether it's about products, orders, or anything else –
          and someone from our team will get back to you real quick.
        </p>

        <h2 className="text-2xl font-bold text-black mb-4">
          Customer Support Hours
        </h2>

        <p className="text-lg text-black mb-10">
          10:00 AM – 5:00 PM (Everyday)
        </p>

        <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>

        <p className="text-lg text-black mb-2">
          <span className="font-semibold">Email-</span> support@vynko.in
        </p>

        <p className="text-lg text-black mb-6">
          <span className="font-semibold">Phone-</span> (update this later)
        </p>

        <button
          className="
    group flex items-center gap-3
    bg-gradient-to-r from-green-500 to-green-600
    hover:from-green-600 hover:to-green-700
    text-white font-semibold
    px-6 py-3 rounded-full
    shadow-md hover:shadow-lg
    transform transition-all duration-200 ease-out
    hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M19.11 17.43c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.35-.79-.71-1.32-1.59-1.48-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.93 2.95 4.68 4.13.66.28 1.18.45 1.58.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z" />
            <path d="M16 3C9.37 3 4 8.2 4 14.6c0 2.54.83 4.88 2.24 6.79L4 29l7.83-2.05A12.1 12.1 0 0 0 16 26.2c6.63 0 12-5.2 12-11.6C28 8.2 22.63 3 16 3z" />
          </svg>
          <span className="tracking-wide">Chat on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
