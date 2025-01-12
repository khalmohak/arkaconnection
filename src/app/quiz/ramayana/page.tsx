"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Clock, Award, AlertCircle } from 'lucide-react';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  // Mock questions - replace with actual quiz data
  const questions = [
    {
      question: "Who is considered the author of the Mahabharata?",
      options: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
      answer: 0,
    },
    // Add more questions...
  ];

  useEffect(() => {
    if (timeLeft > 0 && !quizEnded) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion(-1);
    }
  }, [timeLeft, quizEnded]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) setScore(prev => prev + 1);
    
    setAnswers(prev => [...prev, {
      question: currentQuestion,
      selected: selectedOption,
      correct: questions[currentQuestion].answer,
      timeSpent: 30 - timeLeft
    }]);

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(30);
    } else {
      setQuizEnded(true);
      router.push('/quiz/report', {
        state: {
          score,
          totalQuestions: questions.length,
          answers
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B69D74]" />
              <span className={`font-medium ${timeLeft < 10 ? 'text-red-500' : 'text-gray-600'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-[#B69D74] h-2 rounded-full"
              initial={{ width: "0%" }}
              // animate={{ width: `\${((currentQuestion) / questions.length) * 100}%\` }}
              transition={{ duration: 0.3 }}
              />
          </div>
        </div>
        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left rounded-lg border-2 border-gray-200 
                           hover:border-[#B69D74] transition-all duration-300"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}