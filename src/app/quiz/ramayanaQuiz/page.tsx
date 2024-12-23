'use client'

import Question from '@/app/appComponents/Question';
import React, { useState, useEffect } from 'react'

function Page() {

    const quizzes = [ 

      [
      {
        "question": "Who was the father of Lord Rama?",
        "options": ["Dasharatha", "Vishwamitra", "Janaka", "Sugriva"],
        "answer": 0
      },
      {
        "question": "Which kingdom was ruled by Ravana?",
        "options": ["Ayodhya", "Mithila", "Kishkindha", "Lanka"],
        "answer": 3
      },
      {
        "question": "Who helped Lord Rama in building a bridge to Lanka?",
        "options": ["Hanuman", "Vibhishana", "Sugriva", "Nala and Nila"],
        "answer": 3
      },
      {
        "question": "What was the name of Lord Rama's devoted wife?",
        "options": ["Mandodari", "Kaikeyi", "Sita", "Urmila"],
        "answer": 2
      },
      {
        "question": "Who was the mother of the demon king Ravana?",
        "options": ["Kaushalya", "Mandodari", "Kaikeyi", "Kaikesi"],
        "answer": 3
      }
      ],
      
      [
        {
          "question": "Who was the mentor and teacher of Lord Rama?",
          "options": ["Vishwamitra", "Vashistha", "Valmiki", "Narada"],
          "answer": 1
        },
        {
          "question": "Who was Ravana's primary ally and trusted companion during the battle with Lord Rama?",
          "options": ["Kumbhakarna", "Vibhishana", "Indrajeet", "Shurpanakha"],
          "answer": 0
        },
        {
          "question": "Which demoness tried to seduce Lord Rama and later played a pivotal role in his exile?",
          "options": ["Shurpanakha", "Tataka", "Surasa", "Trijata"],
          "answer": 0
        },
        {
          "question": "Who was the monkey king who helped Rama during the war against Ravana?",
          "options": ["Sugriva", "Hanuman", "Angada", "Vibhishana"],
          "answer": 0
        },
        {
          "question": "Which sacred river did Lord Rama bathe in before beginning his journey to rescue Sita?",
          "options": ["Yamuna", "Ganga", "Sarasvati", "Godavari"],
          "answer": 1
        }
      ],

      [
        {
          "question": "Who was the one who informed Rama about Sita's abduction by Ravana?",
          "options": ["Hanuman", "Jatayu", "Sugriva", "Vibhishana"],
          "answer": 1
        },
        {
          "question": "Which city was Sita originally from?",
          "options": ["Ayodhya", "Mithila", "Lanka", "Kishkindha"],
          "answer": 1
        },
        {
          "question": "Which demon did Lord Rama kill at the beginning of his exile, during the journey to the forest?",
          "options": ["Tataka", "Maricha", "Surpanakha", "Vibhishana"],
          "answer": 0
        },
        {
          "question": "What was the name of the bow that Lord Rama broke during his marriage ceremony with Sita?",
          "options": ["Pinaka", "Sharanga", "Maheswara", "Vajra"],
          "answer": 0
        },
        {
          "question": "Who was the loyal brother of Ravana who defected to Lord Rama's side?",
          "options": ["Kumbhakarna", "Vibhishana", "Bibhishana", "Indrajeet"],
          "answer": 1
        }
      ]

  ]


    const [quizNumber, setQuizNumber] = useState<number>(0);
    // const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  
    useEffect( () => {
        const min: number = 0;
        const max: number = 2; 
        const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
        setQuizNumber(randomNumber);
    }, [] )

    useEffect( () => {
      console.log("Value inside quizNumber: ", quizNumber);
    }, [] )

  return (
    <div className="
    min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-white
    sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:gap-y-20 sm:justify-center sm:items-center 
    md:min-h-screen md:w-full md:flex md:flex-col md:gap-y-20 md:justify-center md:items-center 
    lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:gap-y-20 lg:justify-center lg:items-center 
    xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:gap-y-20 xl:justify-center xl:items-center 
    2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:gap-y-20 2xl:justify-center 2xl:items-center 
    ">
        <div className="
        min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:gap-y-20 sm:justify-center sm:items-center 
        md:min-h-screen md:w-full md:flex md:flex-col md:gap-y-20 md:justify-center md:items-center 
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:gap-y-20 lg:justify-center lg:items-center 
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:gap-y-20 xl:justify-center xl:items-center 
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:gap-y-20 2xl:justify-center 2xl:items-center
        ">
            {
            quizNumber === 0
                ? ( <> <Question quiz={quizzes[0]} /> </> ) 
                : quizNumber === 1
                ? ( <> <Question quiz={quizzes[1]} /> </> ) 
                : ( <> <Question quiz={quizzes[2]} /> </> ) 
            }
        </div>
    </div>
  )
}

export default Page