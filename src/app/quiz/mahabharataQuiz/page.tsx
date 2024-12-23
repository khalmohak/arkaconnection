'use client'

import Question from '@/app/appComponents/Question'
import React, { useEffect, useState } from 'react'

function Page() {

    const quizzes = [
      [
        {
          "question": "Who is considered the author of the *Mahabharata*?",
          "options": ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
          "answer": 0
        },
        {
          "question": "Who was the eldest of the Pandavas?",
          "options": ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
          "answer": 0
        },
        {
          "question": "Which warrior from the Kaurava side was invincible until his death?",
          "options": ["Duryodhana", "Bhishma", "Karna", "Dushasana"],
          "answer": 1
        },
        {
          "question": "What is the name of the sacred conversation between Arjuna and Krishna?",
          "options": ["Vishnu Sahasranama", "Bhagavad Gita", "Ramayana", "Mahabharata"],
          "answer": 1
        },
        {
          "question": "Who was the main antagonist of the *Mahabharata* war?",
          "options": ["Karna", "Duryodhana", "Bhishma", "Shakuni"],
          "answer": 1
        }
      ],

      [
        {
          "question": "Which character is known as the great archer of the Pandavas?",
          "options": ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
          "answer": 2
        },
        {
          "question": "Who was the mother of the Kauravas?",
          "options": ["Kunti", "Gandhari", "Satyavati", "Subhadra"],
          "answer": 1
        },
        {
          "question": "Who was the teacher of both the Pandavas and Kauravas in the *Mahabharata*?",
          "options": ["Drona", "Kripacharya", "Bhishma", "Narada"],
          "answer": 0
        },
        {
          "question": "Who is known for having caused the downfall of Draupadi during the game of dice?",
          "options": ["Duryodhana", "Shakuni", "Karna", "Bhishma"],
          "answer": 1
        },
        {
          "question": "Which epic battle is the central event of the *Mahabharata*?",
          "options": ["Kurukshetra War", "Ramayana War", "Mahapadma War", "War of the Devas"],
          "answer": 0
        }
      ],

      [
        {
          "question": "Who was the eldest son of the Kauravas?",
          "options": ["Dushasana", "Duryodhana", "Vikarna", "Dhrishtadyumna"],
          "answer": 1
        },
        {
          "question": "Which warrior was known as the *Karna* of the Pandavas?",
          "options": ["Bhima", "Draupadi", "Abhimanyu", "Arjuna"],
          "answer": 2
        },
        {
          "question": "Who was the wife of Arjuna and mother of his son Abhimanyu?",
          "options": ["Draupadi", "Subhadra", "Ulupi", "Chitrangada"],
          "answer": 1
        },
        {
          "question": "Which character had a boon that made him invincible against all warriors except Arjuna?",
          "options": ["Karna", "Bhishma", "Duryodhana", "Shakuni"],
          "answer": 0
        },
        {
          "question": "Who was the mother of the Pandavas?",
          "options": ["Gandhari", "Kunti", "Satyavati", "Subhadra"],
          "answer": 1
        }
      ]

    ]
    
    const [quizNumber, setQuizNumber] = useState<number>(1);
    // const [currentQuestion, setCurrentQuestion] = useState<number>(1);

    useEffect( () => {
        const min: number = 1;
        const max: number = 100; 
        const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
        setQuizNumber(randomNumber);
    }, [] )

  return (
    <div className="
    min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-white
    sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:gap-y-20 sm:justify-center sm:items-center 
    md:min-h-screen md:w-full md:flex md:flex-col md:gap-y-20 md:justify-center md:items-center 
    lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:gap-y-20 lg:justify-center lg:items-center 
    xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:gap-y-20 xl:justify-center xl:items-center 
    2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:gap-y-20 2xl:justify-center 2xl:items-center ">
        {
        quizNumber === 1
            ? ( <> <Question quiz={quizzes[0]} /> </> ) // <ComponentForQuiz1 /> 
            : quizNumber === 2
            ? ( <> <Question quiz={quizzes[1]} /> </> )  // <ComponentForQuiz2 />
            : ( <> <Question quiz={quizzes[2]} /> </> )  // <ComponentForOtherQuiz />  
        }
    </div>
  )
}

export default Page
