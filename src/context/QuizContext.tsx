import React, { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  currentQuiz: null,
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  quizStartTime: null,
  quizEndTime: null,
  userDetails: null,
  quizHistory: [],
  streak: 0,
  highestStreak: 0
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        currentQuiz: action.payload.quiz,
        currentQuestionIndex: 0,
        answers: [],
        score: 0,
        quizStartTime: new Date(),
        quizEndTime: null
      };

    case 'ANSWER_QUESTION':
      const isCorrect = action.payload.selectedAnswer === action.payload.correctAnswer;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      
      return {
        ...state,
        answers: [...state.answers, {
          questionIndex: state.currentQuestionIndex,
          selectedAnswer: action.payload.selectedAnswer,
          isCorrect,
          timeSpent: action.payload.timeSpent
        }],
        score: isCorrect ? state.score + 1 : state.score,
        streak: newStreak,
        highestStreak: Math.max(state.highestStreak, newStreak)
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1
      };

    case 'END_QUIZ':
      const quizResult = {
        quizType: state.currentQuiz.type,
        score: state.score,
        totalQuestions: state.currentQuiz.questions.length,
        answers: state.answers,
        startTime: state.quizStartTime,
        endTime: new Date(),
        highestStreak: state.highestStreak
      };

      return {
        ...state,
        quizEndTime: new Date(),
        quizHistory: [...state.quizHistory, quizResult]
      };

    case 'SET_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return state;
  }
};

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const value = {
    state,
    dispatch,
    startQuiz: (quiz) => {
      dispatch({ type: 'START_QUIZ', payload: { quiz } });
    },
    answerQuestion: (selectedAnswer, correctAnswer, timeSpent) => {
      dispatch({
        type: 'ANSWER_QUESTION',
        payload: { selectedAnswer, correctAnswer, timeSpent }
      });
    },
    nextQuestion: () => {
      dispatch({ type: 'NEXT_QUESTION' });
    },
    endQuiz: () => {
      dispatch({ type: 'END_QUIZ' });
    },
    setUserDetails: (details) => {
      dispatch({ type: 'SET_USER_DETAILS', payload: details });
    }
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};