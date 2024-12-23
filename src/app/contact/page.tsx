import React from "react";
import Layout from "@/components/common/layout";

function Contact() {
  return (
    <Layout>
      <main className="flex flex-grow justify-center items-center px-4 py-12 bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
