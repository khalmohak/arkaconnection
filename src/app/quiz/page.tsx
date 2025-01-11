'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Footer from '../appComponents/Footer';
import Navbar from '../appComponents/Navbar';

function Page() {
  const router = useRouter();

  const ramayanaQuiz = () => {
    router.push('/quiz/ramayanaQuiz');
  };

  const mahabharataQuiz = () => {
    router.push('/quiz/mahabharataQuiz');
  };

  return (
    <>
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
        <Navbar />

        <div className="flex-grow flex flex-col justify-center items-center py-12">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#344e41] mb-12 text-center">
            Select a Quiz to Test Your Knowledge
          </h1>

          {/* Quiz Options */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {/* Ramayana Quiz Card */}
            <div
              className="group relative w-80 h-96 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={ramayanaQuiz}
            >
              <img
                src="./ramayana-quiz-photo.jpg"
                alt="Ramayana Quiz"
                className="w-full h-full object-cover group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:bg-black/50 flex justify-center items-center">
                <span className="text-white text-2xl font-semibold">Ramayana</span>
              </div>
            </div>

            {/* Mahabharata Quiz Card */}
            <div
              className="group relative w-80 h-96 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={mahabharataQuiz}
            >
              <img
                src="./mahabharata.jpg"
                alt="Mahabharata Quiz"
                className="w-full h-full object-cover group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:bg-black/50 flex justify-center items-center">
                <span className="text-white text-2xl font-semibold">Mahabharata</span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Page;
