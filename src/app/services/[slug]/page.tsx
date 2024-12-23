"use client";
import React, { useState } from "react";
import Layout from "@/components/common/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

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

function ServiceDetail() {
  const priceINR = 5000;

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Personalized Astrology Consultation
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Dive deep into your life's mysteries with a detailed astrology
                consultation tailored just for you.
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
          <section className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Why Choose This Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                  🔮
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">
                    Comprehensive Birth Chart Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gain in-depth insights into your birth chart to uncover the
                    secrets of your personality and future.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                  🌟
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">
                    Predictive Insights
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Understand upcoming opportunities and challenges in your
                    life journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                  🛠️
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">
                    Personalized Remedies
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Receive tailored solutions and remedies to enhance your
                    well-being and overcome obstacles.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                  📅
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">
                    Flexible Booking Slots
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose a time that works best for you with our easy
                    scheduling options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-900">
                  What is included?
                </h3>
                <p className="text-gray-600">
                  The consultation includes detailed analysis, predictive
                  insights, and actionable remedies.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-900">
                  How do I book a consultation?
                </h3>
                <p className="text-gray-600">
                  Click on the "Book a Service" button to schedule your
                  appointment via Calendly.
                </p>
              </div>
            </div>
          </section>

          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:flex md:justify-between md:items-center">
            <div className="text-lg font-bold text-blue-900">
              Price: <span className="text-green-600">₹5000</span> / $60
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
