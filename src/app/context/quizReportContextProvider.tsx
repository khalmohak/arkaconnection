'use client'

import React, { useState } from 'react'
import QuizReportContext from './QuizReportContext'

function QuizReportContextProvider( {children}: {children: React.ReactNode} ) {

    const [ correctAnswers, setCorrectAnswers ] = useState<number>(0);

  return (
    <QuizReportContext.Provider value={{correctAnswers, setCorrectAnswers}}>
      {children}
    </QuizReportContext.Provider>
  )
}

export default QuizReportContextProvider
