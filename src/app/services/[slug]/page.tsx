"use client";
import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams } from "next/navigation";
import servicesDetail from "@/data/services";

const EXCHANGE_RATE = 0.012; // 1 INR = 0.012 USD (example rate)

function PriceDisplay({ priceINR }: { priceINR: number }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  const displayPrice = currency === "INR" ? priceINR : priceINR * EXCHANGE_RATE;
  const formattedPrice = displayPrice.toFixed(2);

  return (
    <Card className="w-full max-w-sm mx-auto mt-6 shadow-lg">
      <CardContent className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          {formattedPrice} {currency}
        </div>
        <Button
          onClick={toggleCurrency}
          variant="outline"
          className="border-2 border-gray-300"
        >
          Switch to {currency === "INR" ? "USD" : "INR"}
        </Button>
      </CardContent>
    </Card>
  );
}

const faqs = [
  {
    question: "What is included in the service?",
    answer:
      "Each service includes detailed analysis, personalized insights, and tailored remedies to address your specific concerns or objectives.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by clicking on the 'Book a Service' button and selecting a time slot that works best for you.",
  },
  {
    question: "Are the consultations confidential?",
    answer:
      "Yes, all consultations are 100% confidential. Your privacy and trust are our top priorities.",
  },
  {
    question: "Can I customize the service to my needs?",
    answer:
      "Absolutely! Each service is designed to be personalized based on your specific requirements and goals.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major payment methods PayPal, and online banking.",
  },
  {
    question: "What if I need to reschedule my appointment?",
    answer:
      "You can reschedule your appointment using the confirmation email link or by contacting our support team at least 24 hours in advance.",
  },
  {
    question: "Are the remedies practical and easy to follow?",
    answer:
      "Yes, all remedies are designed to be practical, logical, and easy to integrate into your daily life.",
  },
  {
    question: "Do I need prior knowledge of astrology for these services?",
    answer:
      "No prior knowledge is required. Our experts will guide you through everything you need to know during the session.",
  },
  {
    question: "Can I ask additional questions during the consultation?",
    answer:
      "Yes, you are encouraged to ask questions during the consultation to get the most out of your session.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "Your satisfaction is important to us. If you have concerns, please let us know, and we'll do our best to address them.",
  },
];

function ServiceDetail() {
  const priceINR = 5000;
  const { slug } = useParams(); // Get the slug from the route
  const service = servicesDetail.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                {service.description}
              </p>
              <p className="text-2xl font-bold text-blue-900 mb-6">
                Price: <span className="text-green-600">INR 5000</span> / $60
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/your-calendly-link",
                    "_blank",
                  )
                }
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                Book a Service
              </Button>
            </div>
            <img
              src="https://arkaconnection.in/wp-content/uploads/2024/01/90f37e_732dc7d9eb8344a4b204b9493d728043mv2.webp"
              alt="Service"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Benefits Section */}
          {service.benefits && (
            <section className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Benefits
              </h2>
              <ul className="list-disc ml-8 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.facts && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Facts About {service.title}
              </h2>
              <ul className="list-disc ml-8 space-y-2">
                {service.facts.map((fact, index) => (
                  <li key={index} className="text-gray-700">
                    {fact}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.features && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Key Features
              </h2>
              <ul className="list-disc ml-8 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.consultationDetails && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Consultation Details
              </h2>
              <ul className="list-disc ml-8 space-y-2">
                {service.consultationDetails.map((detail, index) => (
                  <li key={index} className="text-gray-700">
                    {detail}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.additionalInfo && (
            <p className="text-sm text-gray-600 mt-4">
              {service.additionalInfo}
            </p>
          )}

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs &&
                faqs.map((faq, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow-md"
                    >
                      <h3 className="font-semibold text-blue-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  );
                })}
            </div>
          </section>

          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:flex md:justify-between md:items-center">
            <div className="text-lg font-bold text-blue-900">
              Price: <span className="text-green-600">INR 5000</span> / $60
            </div>
            <div className="flex gap-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/your-calendly-link",
                    "_blank",
                  )
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Appointment
              </Button>
              {/* <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: { value: "60.00" }, // USD price
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      alert(`Payment successful! Thank you, ${details.payer.name.given_name}.`);
                    });
                  }}
                  style={{ layout: "horizontal" }}
                />
              </PayPalScriptProvider> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServiceDetail;
