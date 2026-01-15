import React from "react";

const ReturnsAndExchangePolicy = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="w-full px-4 pt-6 pb-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Returns & Exchange Policy</h1>
        <p className="text-base font-medium text-gray-700 mb-8">
          At VYNKO, we take pride in the quality of our products. Since we are a
          fresh and growing brand, we currently offer exchanges only — no
          refunds or store credit will be issued.
        </p>

        {/* Exchange Eligibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Exchange Eligibility</h2>
          <ul className="list-disc pl-6 space-y-3 text-base font-medium">
            <li>
              Exchange requests must be raised within 7 days of receiving your
              order.
            </li>
            <li>Exchanges are only applicable in case of defective items.</li>
            <li>Products must be:</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unused and unwashed</li>
              <li>In their original packaging with all tags intact</li>
              <li>Not from a clearance sale</li>
            </ul>
          </ul>
        </section>

        {/* Non-exchangeable Items */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Non-exchangeable Items
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base font-medium">
            <li>Accessories</li>
            <li>Sale or discounted items marked as non-returnable</li>
          </ul>
        </section>

        {/* How to Request an Exchange */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How to Request an Exchange
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base font-medium">
            <li>
              Email us at{" "}
              <span className="font-semibold">support@vynko.in</span>
              with your order number, photos of the defective item, and a brief
              explanation.
            </li>
            <li>
              Once your request is reviewed and approved, you will need to
              self-ship the defective item to our address.
            </li>
            <li>
              After we receive and inspect the item, we’ll ship a replacement
              piece of the same product and size (subject to availability).
            </li>
            <li>
              <span className="font-semibold">
                Shipping charges for sending back the defective product are to
                be borne by the customer.
              </span>
            </li>
          </ul>
        </section>

        {/* Help */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Need Help?</h2>
          <p className="text-base font-medium">
            We’re here for you at{" "}
            <span className="font-semibold">support@vynko.in</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsAndExchangePolicy;
