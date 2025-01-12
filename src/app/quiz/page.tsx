'use client';

// pages/quiz/QuizLanding.js
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BookOpen, Award, Clock } from 'lucide-react';
import Navbar from '../appComponents/Navbar';
import Footer from '../appComponents/Footer';

const quizTypes = [
  {
    id: 'ramayana',
    title: 'Ramayana Quiz',
    description: 'Test your knowledge of this ancient epic',
    image: './ramayana-quiz-photo.jpg',
    questions: 10,
    timePerQuestion: 30,
    difficulty: 'Medium'
  },
  {
    id: 'mahabharata',
    title: 'Mahabharata Quiz',
    description: 'Challenge yourself with questions from the great epic',
    image: './mahabharata.jpg',
    questions: 10,
    timePerQuestion: 30,
    difficulty: 'Medium'
  }
];

export default function QuizLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-[#344e41] text-white py-20 mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Test Your Vedic Knowledge</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Challenge yourself with questions from ancient epics and sacred texts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {quizTypes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => router.push('/quiz/'+quiz.id)}
              >
                <div className="relative h-64">
                  <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{quiz.title}</h3>
                    <p className="text-gray-200">{quiz.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#B69D74]" />
                      <span className="text-gray-600">{quiz.questions} Questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#B69D74]" />
                      <span className="text-gray-600">{quiz.timePerQuestion}s per question</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
