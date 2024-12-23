import React from 'react'
import Footer from '../appComponents/Footer'
import Navbar from '../appComponents/Navbar'

function Contact() {
  return (
    <div className='
        min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-20
        md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-20
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-20
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-20
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-20
    '>

        <div className='mt-10 w-full'>
            <Navbar />
        </div>

        <main className=" w-[70%] flex-grow flex justify-center items-center px-4 py-8">
            <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
            <form className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 font-bold block w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-[#778294] focus:ring-1 focus:ring-[#778294]"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 font-bold block w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-[#778294] focus:ring-1 focus:ring-[#778294]"
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 font-bold block w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-[#778294] focus:ring-1 focus:ring-[#778294]"
                ></textarea>
                </div>
                <div>
                <button
                    type="submit"
                    className="w-full font-bold flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-[#778294] hover:bg-[#8d99ae] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Send Message
                </button>
                </div>
            </form>
            </div>
        </main>

        <Footer />
      
    </div>
  )
}

export default Contact
