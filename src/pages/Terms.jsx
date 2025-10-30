import React from "react";

const Terms = () => {
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
          <h1 className="text-5xl font-medium drop-shadow-lg">Terms of Service</h1>
        </div>
      </div>

      {/* Terms text */}
      <div className="text-center text-xl px-6 md:px-20 space-y-8 py-12 leading-relaxed">
        <p>
          By hiring <b>YourNearByTravelAgent</b> as your travel partner, you agree to
          abide by the terms and conditions of the services mentioned on this
          site. Upon registering with us as your tour operator, you will be
          considered to have reviewed all the travel information, services, and
          policies.
        </p>

        <p>
          The chargeable payments required are processed through secured
          channels. You&apos;ll be liable for the taxes and fees associated with
          your bookings and reservations.
        </p>

        <p>
          We have no hidden charges. Refunds and cancellations will be processed
          depending on your travel package and our criteria.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services. By making a
          booking, you confirm that all information you provide is accurate,
          complete, and truthful. Parents or legal guardians are responsible for
          bookings made on behalf of minors.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Booking and Reservations</h2>
        <p>
          All bookings are subject to availability at the time of confirmation.
          Once confirmed, you will receive an email with your travel itinerary
          and details. Any errors or discrepancies must be reported to us
          immediately.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Payments</h2>
        <p>
          Payments must be made in full prior to the commencement of travel
          unless otherwise agreed in writing. We accept major credit cards,
          debit cards, and other secure payment methods. Failure to make timely
          payments may result in cancellation of your booking.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Cancellations & Refunds</h2>
        <p>
          Cancellation requests must be submitted in writing via email. Refund
          eligibility will depend on the timing of your cancellation and the
          policies of our travel partners (airlines, hotels, etc.). Service fees
          are generally non-refundable.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Changes to Itinerary</h2>
        <p>
          While we make every effort to honor your chosen itinerary, unforeseen
          circumstances such as weather, political instability, or natural
          disasters may require adjustments. We reserve the right to make
          changes while ensuring minimal disruption to your travel experience.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Liability</h2>
        <p>
          RNR TravelTech acts as an intermediary between clients and third-party
          service providers. We are not liable for delays, cancellations, loss
          of personal belongings, injuries, or other issues outside of our
          control. Travelers are strongly encouraged to purchase travel
          insurance.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Intellectual Property</h2>
        <p>
          All content, branding, logos, and materials on our website are the
          property of RNR TravelTech and are protected by applicable
          intellectual property laws. Unauthorized reproduction, distribution,
          or modification is prohibited.
        </p>

        <h2 className="text-3xl font-semibold mt-10">User Conduct</h2>
        <p>
          You agree not to use our website or services for unlawful purposes or
          to harm, harass, or exploit others. We reserve the right to deny
          service to any individual engaging in misconduct.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of these websites
          and encourage you to review their terms independently.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Privacy</h2>
        <p>
          Your use of our services is also governed by our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          , which outlines how we collect, use, and safeguard your personal
          information.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Governing Law</h2>
        <p>
          These terms shall be governed by and interpreted in accordance with
          the laws of the jurisdiction in which RNR TravelTech operates. Any
          disputes shall be subject to the exclusive jurisdiction of local
          courts.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Amendments</h2>
        <p>
          We reserve the right to update or modify these Terms of Service at any
          time. Changes will become effective once posted on this page. It is
          your responsibility to review the terms periodically.
        </p>

        <p className="font-medium mt-10">
          By using our services, you acknowledge that you have read, understood,
          and agreed to these Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default Terms;