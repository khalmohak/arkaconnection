// data/quizData.js
export const quizData = {
  ramayana: {
    type: "Ramayana",
    title: "Ramayana Knowledge Quiz",
    description: "Test your knowledge of the great epic Ramayana",
    image: "/ramayana-quiz-photo.jpg",
    questions: [
      {
        id: 1,
        question: "Who was the author of the Ramayana?",
        options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"],
        answer: 0,
        explanation: "The Ramayana was authored by Sage Valmiki, who is also known as Adi Kavi (First Poet).",
        difficulty: "easy",
        category: "general"
      },
      // Add more questions...
    ]
  },
  mahabharata: {
    type: "Mahabharata",
    title: "Mahabharata Knowledge Quiz",
    description: "Test your knowledge of the epic Mahabharata",
    image: "/mahabharata.jpg",
    questions: [
      {
        id: 1,
        question: "Who was the eldest among the Pandavas?",
        options: ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
        answer: 0,
        explanation: "Yudhishthira was the eldest of the five Pandava brothers.",
        difficulty: "easy",
        category: "characters"
      },
      // Add more questions...
    ]
  }
};