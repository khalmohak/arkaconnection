
import React, { createContext } from 'react';

type QuizReportContextType = {
    correctAnswers: number;
    setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  };
  

const QuizReportContext = createContext<QuizReportContextType | null>(null);

export default QuizReportContext;