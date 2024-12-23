'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import QuizReportContext from '../context/QuizReportContext';

function QuizReport() {

    const quizReportContext = useContext(QuizReportContext);
    if (quizReportContext === null) {
        throw new Error('QuizReportContext must be used within a QuizReportContextProvider');
    }
    const { correctAnswers } = quizReportContext;

    const router = useRouter();

    const goBackToHomePage = () => {
        router.push('/');
    }

  return (

    <div className="
    min-h-screen w-[100%] flex flex-col justify-center items-center bg-white
    sm:min-h-screen sm:w-[100%] sm:flex sm:flex-col sm:justify-center sm:items-center 
    md:min-h-screen md:w-[100%] md:flex md:flex-col md:justify-center md:items-center
    lg:min-h-screen lg:w-[100%] lg:flex lg:flex-col lg:justify-center lg:items-center 
    xl:min-h-screen xl:w-[100%] xl:flex xl:flex-col xl:justify-center xl:items-center
    2xl:min-h-screen 2xl:w-[100%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">

        <div className=' 
        h-32 w-full flex justify-center items-center
        sm:h-32 sm:w-full sm:flex sm:justify-center sm:items-center
        md:h-32 md:w-full md:flex md:justify-center md:items-center
        lg:h-32 lg:w-full lg:flex lg:justify-center lg:items-center
        xl:h-32 xl:w-full xl:flex xl:justify-center xl:items-center
        2xl:h-32 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center'>
            <img src="../arkConnection-horizontal.png" alt="brandImage" 
            className='
            h-[24rem] w-[24rem]
            sm:h-[30rem] sm:w-[30rem]
            md:h-[30rem] md:w-[30rem]
            lg:h-[30rem] lg:w-[30rem]
            xl:h-[30rem] xl:w-[30rem]
            2xl:h-[30rem] 2xl:w-[30rem] '/>
        </div>
        
        <div className=' 
        h-44 w-full text-lg font-extrabold flex justify-center items-center
        sm:h-44 sm:w-full sm:text-3xl sm:font-extrabold sm:flex sm:justify-center sm:items-center
        md:h-44 md:w-full md:text-3xl md:font-extrabold md:flex md:justify-center md:items-center
        lg:h-44 lg:w-full lg:text-3xl lg:font-extrabold lg:flex lg:justify-center lg:items-center
        xl:h-44 xl:w-full xl:text-3xl xl:font-extrabold xl:flex xl:justify-center xl:items-center
        2xl:h-44 2xl:w-full 2xl:text-3xl 2xl:font-extrabold 2xl:flex 2xl:justify-center 2xl:items-center'>
            You answered {correctAnswers}/5 questions correctly!
        </div>
        
        <Button className="
        h-12 w-36 text-base bg-[#6a7486]  rounded-full text-white font-bold
        sm:h-12 sm:w-36 sm:text-base  sm:font-bold
        md:h-12 md:w-36 md:text-base md:font-bold
        lg:h-12 lg:w-36 lg:text-base lg:font-bold
        xl:h-12 xl:w-36 xl:text-base xl:font-bold
        2xl:h-12 2xl:w-36 2xl:text-base 2xl:font-bold" 
        onClick={goBackToHomePage}
        >
            Home
        </Button>

        

    </div>
  )
}

export default QuizReport