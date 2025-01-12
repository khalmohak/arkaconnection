'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Award, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export default function QuizReport() {
  const router = useRouter();
  // In a real app, you'd get this from router.query or context
  const mockResults = {
    score: 8,
    totalQuestions: 10,
    timeSpent: 245, // seconds
    answers: [
      // ... answer details
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Score Summary */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#344e41] flex items-center justify-center"
            >
              <div className="text-white">
                <div className="text-4xl font-bold">{mockResults.score}</div>
                <div className="text-sm">out of {mockResults.totalQuestions}</div>
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {mockResults.score >= mockResults.totalQuestions * 0.7 
                ? "Excellent Work!" 
                : mockResults.score >= mockResults.totalQuestions * 0.5 
                  ? "Good Effort!" 
                  : "Keep Practicing!"}
            </h2>
            <p className="text-gray-600">
              You completed the quiz in {Math.floor(mockResults.timeSpent / 60)}m {mockResults.timeSpent % 60}s
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: <Award className="w-6 h-6 text-[#B69D74]" />,
                label: "Score",
                value: `\${(mockResults.score / mockResults.totalQuestions * 100).toFixed(1)}%`
              },
              {
                icon: <Clock className="w-6 h-6 text-[#B69D74]" />,
                label: "Avg. Time per Question",
                value: `\${Math.round(mockResults.timeSpent / mockResults.totalQuestions)}s`
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-[#B69D74]" />,
                label: "Correct",
                value: mockResults.score
              },
              {
                icon: <XCircle className="w-6 h-6 text-[#B69D74]" />,
                label: "Incorrect",
                value: mockResults.totalQuestions - mockResults.score
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 text-center"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/quiz')}
              className="px-6 py-3 bg-[#344e41] text-white rounded-lg font-medium 
                       hover:bg-[#2a3b31] transition-colors duration-300 flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Try Another Quiz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}