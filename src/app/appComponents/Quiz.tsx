'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

function Quiz() {

    const router = useRouter();

  return (
    <div className='
    my-5 h-[30rem] w-[95%] flex flex-col gap-y-5 justify-center items-center relative
    sm:my-5 sm:h-[30rem] sm:w-[95%] sm:flex sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center sm:relative
    md:my-5 md:h-[30rem] md:w-[95%] md:flex md:flex-col md:gap-y-5 md:justify-center md:items-center md:relative
    lg:my-5 lg:h-[30rem] lg:w-[95%] lg:flex lg:flex-col lg:gap-y-5 lg:justify-center lg:items-center lg:relative
    xl:my-5 xl:h-[30rem] xl:w-[95%] xl:flex xl:flex-col xl:gap-y-5 xl:justify-center xl:items-center xl:relative 
    mx-6 2xl:my-5 2xl:h-[30rem] 2xl:w-[95%] 2xl:flex 2xl:flex-col 2xl:gap-y-5   2xl:justify-center 2xl:items-center 2xl:relative 
    rounded-lg
    ' id='quizSectionDiv' >

        <div className="
        absolute inset-0 z-0
        sm:absolute sm:inset-0 sm:z-0
        md:absolute md:inset-0 md:z-0
        lg:absolute lg:inset-0 lg:z-0
        xl:absolute xl:inset-0 xl:z-0
        2xl:absolute 2xl:inset-0 2xl:z-0
        
        blur-[2px] bg-opacity-60 bg-gray-200
        "></div>
        
        <div className='
        z-10 mx-2 flex py-1 px-2 justify-center items-center text-center text-base
        sm:z-10 sm:flex sm:py-2 sm:px-3 sm:justify-center sm:items-center sm:text-center sm:text-base
        md:z-10 md:flex md:py-3 md:px-4 md:justify-center md:items-center md:text-center md:text-xl
        lg:z-10 lg:flex lg:py-3 lg:px-6 lg:justify-center lg:items-center lg:text-center lg:text-2xl
        xl:z-10 xl:flex xl:py-3 xl:px-6 xl:justify-center xl:items-center xl:text-center xl:text-3xl
        2xl:z-10 2xl:flex 2xl:py-3 2xl:px-6 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-3xl 
        
        font-[1000] text-black rounded-full
        '>
            Test your vedic knowledge with our comprehensize prepared quizzes
        </div>
        <Button className="
        relative z-10 mt-3 h-9 w-32 text-sm
        sm:relative sm:z-10 sm:mt-3 sm:h-9 sm:w-32 sm:text-sm
        md:relative md:z-10 md:mt-3 md:h-12 md:w-36 md:text-base
        lg:relative lg:z-10 lg:mt-3 lg:h-12 lg:w-36 lg:text-base
        xl:relative xl:z-10 xl:mt-3 xl:h-12 xl:w-36 xl:text-base
        2xl:relative 2xl:z-10 2xl:mt-3 2xl:h-12 2xl:w-36 2xl:text-base  
       hover:scale-105
      transition-all
     duration-300 
        font-bold bg-black rounded-full text-[#e6ccb2]
        "
        onClick={() => (router.push("/quiz"))}
        >
            Take a quiz
        </Button>
    </div>
  )
}
  
export default Quiz
