'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Footer from '@/app/appComponents/Footer';
import Navbar from '@/app/appComponents/Navbar';

function Page() {
  const router = useRouter();

  const quizzes = [
    [
      {
        question: 'Who is considered the author of the *Mahabharata*?',
        options: ['Vyasa', 'Valmiki', 'Tulsidas', 'Kalidasa'],
        answer: 0,
      },
      {
        question: 'Who was the eldest of the Pandavas?',
        options: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula'],
        answer: 0,
      },
      {
        question: 'Which warrior from the Kaurava side was invincible until his death?',
        options: ['Duryodhana', 'Bhishma', 'Karna', 'Dushasana'],
        answer: 1,
      },
    ],
  ];

  const [quizIndex, setQuizIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const quiz = quizzes[quizIndex];

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / quiz.length) * 100);
    } else {
      router.push('/results');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#344e41] mb-8 text-center">
          Test Your Knowledge
        </h1>

        <ProgressBar progress={progress} />

        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mt-6">
          <Question
            question={quiz[currentQuestion].question}
            options={quiz[currentQuestion].options}
            answer={quiz[currentQuestion].answer}
          />
          <button
            onClick={handleNext}
            className="mt-6 w-full py-3 bg-[#344e41] text-white rounded-lg font-semibold hover:bg-[#2a3b31] transition"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;

// ProgressBar Component
import { motion } from 'framer-motion';

function ProgressBar({ progress }) {
  return (
    <div className="w-full max-w-2xl bg-gray-200 rounded-full h-6 overflow-hidden shadow-lg">
      <motion.div
        className="bg-[#344e41] h-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      ></motion.div>
    </div>
  );
}


function Question({ question, options, answer, image }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
      setIsAnswered(true);
    }
  };

  return (
    <motion.div
      className="p-6 bg-white shadow-xl rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <motion.img
          src={image}
          alt="question visual"
          className="w-full h-48 object-cover rounded-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <h2 className="text-2xl font-bold text-[#344e41] mb-4">{question}</h2>
      <ul className="space-y-4">
        {options.map((option, index) => (
          <motion.li
            key={index}
            className={`p-4 border rounded-lg cursor-pointer text-lg transition-all duration-300 transform hover:scale-105 ${
              isAnswered
                ? index === answer
                  ? 'bg-green-100 border-green-500'
                  : index === selectedOption
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-100'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => handleOptionClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.li>
        ))}
      </ul>
      {isAnswered && (
        <motion.div
          className="mt-6 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {selectedOption === answer ? (
            <div className="text-green-600">Correct! Great job!</div>
          ) : (
            <div className="text-red-600">
              Incorrect. The correct answer is: <strong>{options[answer]}</strong>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

