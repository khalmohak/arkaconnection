'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Brain, Book, Clock, Medal, TrendingUp } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

function QuizFeature({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="w-12 h-12 bg-[#B69D74]/10 rounded-full flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-gray-800 font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

function Quiz() {
  const router = useRouter();

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-[#B69D74]" />,
      title: "Test Your Knowledge",
      description: "Challenge yourself with ancient wisdom"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#B69D74]" />,
      title: "Quick Sessions",
      description: "Complete quizzes in 5-10 minutes"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B69D74]" />,
      title: "Track Progress",
      description: "Monitor your spiritual growth"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B69D74]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B69D74]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Content Side */}
            <div className="flex-1 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#344e41] mb-4">
                  Test Your Vedic Knowledge
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Challenge yourself with our comprehensive quizzes on ancient wisdom and spiritual teachings.
                </p>

                {/* Quiz Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {features.map((feature, index) => (
                    <QuizFeature
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-center gap-8 mb-8 p-6 bg-[#FAF9F6] rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#B69D74]">500+</div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#B69D74]">10+</div>
                    <div className="text-sm text-gray-600">Topics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#B69D74]">1000+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center"
                >
                  <Button
                    onClick={() => router.push("/quiz")}
                    className="px-8 py-3 bg-[#344e41] text-white font-bold rounded-full 
                             shadow-lg hover:bg-[#2a3b31] transition-all duration-300"
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Side */}
            <div className="hidden lg:block lg:w-1/3 bg-[#344e41] p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-8">
                  <Medal className="w-12 h-12 text-[#B69D74] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Earn Certificates</h3>
                  <p className="text-gray-300">
                    Complete quizzes to earn certificates and track your spiritual growth journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Book className="w-5 h-5 text-[#B69D74]" />
                    <span>Multiple difficulty levels</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-[#B69D74]" />
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Medal className="w-5 h-5 text-[#B69D74]" />
                    <span>Achievement badges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;