'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Footer from '../appComponents/Footer';
import Navbar from '../appComponents/Navbar';

function Page() {    
    
    const router = useRouter();

    const ramayanaQuiz = () => {
        router.push("/quiz/ramayanaQuiz");
    }

    const mahabharataQuiz = () => {
        router.push("/quiz/mahabharataQuiz");
    }

  return (

   <> 
    <div className="
    min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-white text-white
    sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:gap-y-20 sm:justify-center sm:items-center sm:text-white
    md:min-h-screen md:w-full md:flex md:flex-col md:gap-y-20 md:justify-center md:items-center  md:text-white
    lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:gap-y-20 lg:justify-center lg:items-center lg:text-white
    xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:gap-y-20 xl:justify-center xl:items-center  xl:text-white
    2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:gap-y-20 2xl:justify-center 2xl:items-center  2xl:text-white
    ">
      <Navbar/>

            <div className=' 
            h-[20%] flex justify-center items-center text-center text-2xl
            sm:h-[20%] sm:flex sm:justify-center sm:items-center sm:text-center sm:text-2xl
            md:h-[20%] md:flex md:justify-center md:items-center md:text-center md:text-3xl
            lg:h-[20%] lg:flex lg:justify-center lg:items-center lg:text-center lg:text-3xl
            xl:h-[20%] xl:flex xl:justify-center xl:items-center xl:text-center xl:text-3xl
            2xl:h-[20%] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-4xl 
            
            text-black font-extrabold'>
                Select any one quiz you would like to give?
            </div>

            <div className=' 
            h-[80%] flex flex-col gap-x-6 gap-y-6 justify-center items-center
            sm:h-[80%] sm:flex sm:flex-row sm:gap-x-6 sm:justify-center sm:items-center
            md:h-[80%] md:flex md:gap-x-6 md:justify-center md:items-center
            lg:h-[80%] lg:flex lg:gap-x-6 lg:justify-center lg:items-center
            xl:h-[80%] xl:flex xl:gap-x-6 xl:justify-center xl:items-center
            2xl:h-[80%] 2xl:flex 2xl:gap-x-10 2xl:justify-center 2xl:items-center' >

                <div className='
                h-full w-[90%] relative
                sm:h-full sm:w-[45%] sm:relative
                md:h-full md:w-[45%] md:relative
                lg:h-full lg:w-[45%] lg:relative
                xl:h-full xl:w-[48%] xl:relative
                2xl:h-full 2xl:w-[50%] 2xl:relative
                
                hover:scale-105 transition-all delay-75 ease-in-out hover:cursor-pointer hover:blur-[2px]
                '
                onClick={ramayanaQuiz}
                >
                    <img src="./ramayana-quiz-photo.jpg" alt="" 
                    className='
                    h-[20rem] w-full rounded-lg border-4
                    sm:h-[20rem] sm:w-full sm:rounded-lg sm:border-4
                    md:h-[24rem] md:w-full md:rounded-lg md:border-4
                    lg:h-[28rem] lg:w-full lg:rounded-lg lg:border-4
                    xl:h-[30rem] xl:w-full xl:rounded-lg xl:border-4
                    2xl:h-[30rem] 2xl:w-full 2xl:rounded-lg 2xl:border-4
                    
                    
                    transition-all border-[#525e71]'/>
                    <div className="
                    absolute top-8 inset-0 flex justify-center items-start text-3xl z-30
                    sm:absolute sm:top-8 sm:inset-0 sm:flex sm:justify-center sm:items-start sm:text-3xl sm:z-30
                    md:absolute md:top-8 md:inset-0 md:flex md:justify-center md:items-start md:text-3xl md:z-30
                    lg:absolute lg:top-8 lg:inset-0 lg:flex lg:justify-center lg:items-start lg:text-3xl lg:z-30
                    xl:absolute xl:top-8 xl:inset-0 xl:flex xl:justify-center xl:items-start xl:text-3xl xl:z-30
                    2xl:absolute 2xl:top-8 2xl:inset-0 2xl:flex 2xl:justify-center 2xl:items-start 2xl:text-3xl 2xl:z-30
                    
                    text-white font-bold opacity-100 hover:opacity-0 transition-opacity duration-300 
                    ">
                        Ramayana
                    </div>
                </div>

                <div className='
                h-full w-[90%] relative
                sm:h-full sm:w-[45%] sm:relative
                md:h-full md:w-[45%] md:relative 
                lg:h-full lg:w-[45%] lg:relative 
                xl:h-full xl:w-[48%] xl:relative 
                2xl:h-full 2xl:w-[50%] 2xl:relative 
                
                
                hover:scale-105 transition-all delay-75 ease-in-out hover:cursor-pointer hover:blur-[2px] '
                onClick={mahabharataQuiz}
                >
                    <img src="mahabharata.jpg" alt="" 
                    className='
                    h-[20rem] w-full rounded-lg border-4
                    sm:h-[20rem] sm:w-full sm:rounded-lg sm:border-4
                    md:h-[24rem] md:w-full md:rounded-lg md:border-4
                    lg:h-[28rem] lg:w-full lg:rounded-lg lg:border-4
                    xl:h-[30rem] xl:w-full xl:rounded-lg xl:border-4
                    2xl:h-[30rem] 2xl:w-full 2xl:rounded-lg 2xl:border-4 
                    
                    border-[#525e71]'/>
                    <div className="
                    absolute top-8 inset-0 flex justify-center items-start text-3xl z-30
                    sm:absolute sm:top-8 sm:inset-0 sm:flex sm:justify-center sm:items-start sm:text-3xl sm:z-30
                    md:absolute md:top-8 md:inset-0 md:flex md:justify-center md:items-start md:text-3xl md:z-10
                    lg:absolute lg:top-8 lg:inset-0 lg:flex lg:justify-center lg:items-start lg:text-3xl lg:z-10
                    xl:absolute xl:top-8 xl:inset-0 xl:flex xl:justify-center xl:items-start xl:text-3xl xl:z-10
                    2xl:absolute 2xl:top-8 2xl:inset-0 2xl:flex 2xl:justify-center 2xl:items-start 2xl:text-3xl 2xl:z-10
                    
                    text-white font-bold opacity-100 hover:opacity-0 transition-opacity duration-300
                    ">
                        Mahabharata
                    </div>
                </div>

            </div>

    </div>
    <Footer />

   </>
  )
}

export default Page