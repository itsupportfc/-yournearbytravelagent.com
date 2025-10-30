import React from "react";

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://rnrtraveltech.com/static/media/privacy.903d9bbe49daf9f1e03d.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Text on left-bottom */}
        <div className="absolute bottom-6 left-6 text-white max-w-md">
          <h1 className="text-5xl font-medium drop-shadow-lg">Privacy Policy</h1>
        </div>
      </div>

      {/* Privacy text */}
      <div className="text-center text-xl px-6 md:px-20 space-y-8 py-12 leading-relaxed">
        <p>
          We have registered IP (Intellectual Property) products and services
          safeguarded under the following laws: Trademarks, copyright, Trade
          Secrets, patents, licensing, and others.
        </p>

        <p>
          Therefore any unauthorized use of our products, services, or
          confidential data stored on this site will be deemed unlawful. The
          user is expected not to copy, sell, or design materials and services
          in any form.
        </p>

        <p>
          While we have no ownership of any content, documents, trademarks, or
          copyrights of third parties listed on this site, the proprietorship of
          their software and privacy lies in their respective hands. We are
          licensed to hold the authorization of <b>YourNearByTravelAgent</b> only,
          including its software and documentation recorded on this site. No
          user should hack, use, or crack software code unless they have direct
          authority over the license agreement.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Information We Collect</h2>
        <p>
          When you interact with our website or services, we may collect
          information such as your name, email address, phone number, and usage
          details. This data is used solely for improving user experience,
          providing customer support, and delivering relevant updates.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Use of Cookies</h2>
        <p>
          Our website may use cookies and similar technologies to store user
          preferences, track usage patterns, and enhance site performance. You
          may choose to disable cookies through your browser settings, but some
          features may not function properly without them.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Data Security</h2>
        <p>
          We implement strict technical and organizational measures to protect
          your data from unauthorized access, alteration, disclosure, or
          destruction. However, no method of online transmission or storage is
          100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Third-Party Services</h2>
        <p>
          Our platform may include integrations or links to third-party
          websites, services, or tools. We are not responsible for the privacy
          practices or policies of these third parties, and we recommend
          reviewing their privacy policies individually.
        </p>

        <h2 className="text-3xl font-semibold mt-10">User Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of
          your personal data. If you wish to exercise any of these rights,
          please contact us directly. We will respond to your request in a
          reasonable timeframe.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technologies, or legal requirements. Any updates
          will be posted on this page with a revised effective date.
        </p>

        <p className="font-medium mt-10">
          If you have any questions about our Privacy Policy, please contact our
          support team.
        </p>
      </div>
    </div>
  );
};

export default Privacy;