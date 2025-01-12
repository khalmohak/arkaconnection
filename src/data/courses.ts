export const CourseTags = [
  { name: "Astrology", path: "/courses/astrology" },
  { name: "Numerology", path: "/courses/numerology" },
  { name: "Vastu", path: "/courses/vastu" },
  { name: "Palmistry", path: "/courses/palmistry" },
  { name: "Ayurveda", path: "/courses/ayurveda" },
  { name: "Spirituality", path: "/courses/spirituality" },
];

const courseData1 = {
  title: "Advanced Spiritual Healing & Meditation",
  price: 200,
  discountedPrice: 150,
  description:
    "Get an insight into everything the universe holds for your future.Enroll today in the best astrology course online and kick-start learning with masterfully-crafted guidance from world-renowned astrologer, Mr. Alok Khandelwal.",
  videoUrl: "https://youtube.com/embed/example",
  stats: {
    duration: "20 hours",
    enrolled: "100+",
    videos: "10+",
    support: "Lifetime",
  },
  benefits: [
    {
      title: "Live Classes & Recorded Videos",
      description:
        "Dive deep into spirituality with dynamic live sessions taught by renowned experts",
      icon: "/courses/static/live-classes.jpeg",
    },
    {
      title: "Downloadable PDFs",
      description:
        "Get comprehensive study material with 30+ downloadable PDFs",
      icon: "/courses/static/docs.jpeg",
    },
    {
      title: "Doubt Sessions",
      description: "25 dedicated doubt sessions with experienced mentors",
      icon: "/courses/static/doubt.jpeg",
    },
  ],
  curriculum: [
    {
      title: "Foundation of Spiritual Healing",
      content:
        "Learn the basic principles and history of spiritual healing practices",
    },
    {
      title: "Energy Centers & Chakras",
      content:
        "Deep dive into the seven major chakras and their significance",
    },
  ],
  mentor: {
    name: "Acharya Alok Awasthi",
    image:
      "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
    description: `Acharya Alok Awasthi is the founder of Maharishi Kapi, an institution focused on Vedic studies and traditional Shastras. He is notable for his unique approach to combining astrology and astronomy with modern corporate applications. Awasthi is distinguished by his innate ability to decode mantras from Vedas and Upanishads, which he has used to reinterpret astrological principles for the corporate world.
      As an educator and researcher, Awasthi maintains that astrology qualifies as a science, defining it as "a subject that needs probing, investigation and research." He has developed specialized courses that apply astronomical and astrological principles to various corporate designations and departments, aiming to help professionals achieve their goals methodically.`,
    credentials:
      "Vedic scholar and expert in decoding Vedic mantras, specializing in applying ancient astronomical and astrological principles to modern corporate development.",
  },
  testimonials: [
    {
      name: "John Doe",
      image: "/api/placeholder/50/50",
      review: "This course transformed my understanding of spiritual healing",
      rating: 5,
    },
  ],
  videoTestimonials: [
    {
      id: 1,
      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://youtube.com/embed/example1",
      studentName: "Maria Garcia",
      title: "Changed my perspective on spirituality",
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://youtube.com/embed/example2",
      studentName: "James Wilson",
      title: "Best investment in my spiritual journey",
    },
    // Add more video testimonials...
  ],
  whoShouldEnroll: [
    {
      image: "/courses/static/meditation.jpeg",
      title: "Spiritual Seekers",
      description:
        "Those who want to deepen their spiritual practice and understanding",
    },
    {
      image: "/courses/static/meditation2.jpeg",
      title: "Meditation Enthusiasts",
      description:
        "People looking to enhance their meditation practice with advanced techniques",
    },
    {
      image: "/courses/static/healing.jpeg",
      title: "Healing Practitioners",
      description:
        "Professional healers wanting to expand their knowledge and skills",
    },
    {
      image: "/courses/static/growth.jpeg",
      title: "Personal Growth Advocates",
      description:
        "Individuals committed to their personal and spiritual development",
    },
  ],
  faqs: [
    {
      question: "Do I need prior experience in spirituality?",
      answer:
        "No prior experience is required. This course is designed to accommodate both beginners and advanced practitioners.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You get lifetime access to all course materials, including future updates and additions.",
    },
    {
      question: "Are the live sessions recorded?",
      answer:
        "Yes, all live sessions are recorded and made available within 24 hours for those who cannot attend.",
    },
    // Add more FAQs...
  ],
  companyInfo: {
    name: "Maharishi Kapi",
    description: `Maharishi Kapi, founded by Acharya Alok Awasthi, is an institution dedicated to bridging ancient Vedic wisdom with modern applications. The institute offers comprehensive education in traditional subjects including Vedas, Upanishads, Astrology, Numerology, Vastu, Meditation, and Ayurveda, while uniquely applying these principles to contemporary corporate settings. Acharya Awasthi, known for his expertise in decoding Vedic mantras, has developed specialized courses that blend astronomical and astrological principles with professional development. The institution's mission extends beyond traditional education, aiming to build a community of Vedic learners while providing practical solutions for personal and professional growth. Through workshops, lectures, and certifications, Maharishi Kapi strives to make ancient wisdom accessible and applicable in today's world, helping individuals achieve success while maintaining spiritual well-being.`,
    values: `Driven by excellence, authenticity, and spiritual growth, Maharishi Kapi upholds the values of quality education, community building, and Vedic-centered learning while fostering personal transformation through the integration of ancient wisdom with modern practices. The institution values intellectual curiosity, traditional excellence, and practical application, ensuring that Vedic knowledge remains relevant and accessible in contemporary times, all while maintaining the highest standards of quality in knowledge transfer and spiritual development.`,
  },
};

export const HomePageCourseList = [
  {
    tag: "Astrology",
    name: "Predictions with Annual Horoscope",
    description:
      "Learn comprehensive Tithi Pravesh chart analysis and predictions",
    price: 14999,
    discountedPrice: 11999,
    slug: "predictions-annual-horoscope",
  },
  {
    tag: "Astrology",
    name: "Transit Workshop",
    description:
      "Master special transit techniques and practical prediction rules",
    price: 12999,
    discountedPrice: 9999,
    slug: "transit-workshop",
  },
  {
    tag: "Numerology",
    name: "Karmic Code Reading with Numerology",
    description: "Learn Vedic numerology and its applications in life analysis",
    price: 13999,
    discountedPrice: 10999,
    slug: "karmic-code-numerology",
  },
  {
    tag: "Palmistry",
    name: "Karmic Code Reading with Palmistry",
    description: "Master the art of palm reading and karmic analysis",
    price: 11999,
    discountedPrice: 9999,
    slug: "karmic-code-palmistry",
  },
  {
    tag: "Spirituality",
    name: "VedantKapi - Yogadarshan",
    description: "Comprehensive study of Yoga philosophy and spiritual texts",
    price: 16999,
    discountedPrice: 13999,
    slug: "vedantkapi-yogadarshan",
  },
  {
    tag: "Astrology",
    name: "Arka-connection Live Astrology",
    description: "Complete Vedic astrology course with practical applications",
    price: 19999,
    discountedPrice: 15999,
    slug: "arka-connection-astrology",
  },
];

export const CourseList = [
  {
    tag: "Astrology",
    name: "Predictions with Annual Horoscope",
    description:
      "Learn comprehensive Tithi Pravesh chart analysis and predictions",
    price: 14999,
    discountedPrice: 11999,
    slug: "predictions-annual-horoscope",
  },
  {
    tag: "Astrology",
    name: "Transit Workshop",
    description:
      "Master special transit techniques and practical prediction rules",
    price: 12999,
    discountedPrice: 9999,
    slug: "transit-workshop",
  },
  {
    tag: "Numerology",
    name: "Karmic Code Reading with Numerology",
    description: "Learn Vedic numerology and its applications in life analysis",
    price: 13999,
    discountedPrice: 10999,
    slug: "karmic-code-numerology",
  },
  {
    tag: "Palmistry",
    name: "Karmic Code Reading with Palmistry",
    description: "Master the art of palm reading and karmic analysis",
    price: 11999,
    discountedPrice: 9999,
    slug: "karmic-code-palmistry",
  },
  {
    tag: "Spirituality",
    name: "VedantKapi - Yogadarshan",
    description: "Comprehensive study of Yoga philosophy and spiritual texts",
    price: 16999,
    discountedPrice: 13999,
    slug: "vedantkapi-yogadarshan",
  },
  {
    tag: "Astrology",
    name: "Arka-connection Live Astrology",
    description: "Complete Vedic astrology course with practical applications",
    price: 19999,
    discountedPrice: 15999,
    slug: "arka-connection-astrology",
  },
];

export const CourseDetailData = [
  {
      title: "Predictions with Annul Horoscope/ तिथि प्रवेश कुण्डली",
      price: 14999,
      discountedPrice: 11999,
      slug: "predictions-annual-horoscope",
      tag: "Astrology",
      description: "A comprehensive masterclass covering Tithi pravesh chart and its practical applications in Vedic astrology. Learn how to make precise predictions using annual horoscopes through ancient and tested methodologies.",
      videoUrl: "https://example.com/annual-horoscope-preview",
      stats: {
        duration: "30 hours",
        enrolled: "500+",
        videos: "45+",
        support: "3 months",
      },
      benefits: [
        {
          title: "Complete Foundation",
          description: "Master the fundamental concepts of Tithi Pravesh chart and its elements",
          icon: "/icons/foundation.svg",
        },
        {
          title: "Practical Analysis",
          description: "Learn chart analysis techniques with real-world examples and applications",
          icon: "/icons/analysis.svg",
        },
        {
          title: "Prediction Mastery",
          description: "Develop expertise in daily, monthly and yearly predictions",
          icon: "/icons/prediction.svg",
        }
      ],
      curriculum: [
        {
          title: "Fundamentals of Tithi Pravesh",
          content: [
            "What is Tithi Pravesh chart?",
            "Role of five elements in Tithi Pravesh chart",
            "Tithi Pravesh chart and Dagdha Rashis",
            "Importance of Lagna lord in Tithi Pravesh chart"
          ]
        },
        {
          title: "Predictive Techniques",
          content: [
            "Comparison with Natal Chart to outline coming year events",
            "Significant events predictions",
            "Daily & monthly predictions",
            "Ashtakvarga in Tithi Pravesh chart"
          ]
        },
        {
          title: "Advanced Applications",
          content: [
            "How to use Dasha in Tithi Pravesh chart",
            "Practical chart analysis",
            "Integration of multiple prediction techniques",
            "Real-world case studies"
          ]
        }
      ],
      mentor: {
        name: "Acharya Vedashvapati",
        image: "/mentors/vedashvapati.jpg",
        description: "A renowned Vedic astrologer with over 20 years of experience",
        credentials: "Expert in Tithi Pravesh and predictive astrology"
      },
      faqs: [
        {
          question: "Do I need prior knowledge of astrology?",
          answer: "Basic understanding of astrology fundamentals is recommended but not mandatory. The course is designed to accommodate both beginners and advanced practitioners."
        },
        {
          question: "How will I view the webinars?",
          answer: "Live webinars are conducted via Zoom platform. You'll receive clear instructions to join. You need good internet access and a device with video/audio capabilities."
        },
        {
          question: "What if I can't attend live sessions?",
          answer: "You'll have full access to recorded webinars for at least 90 days after the live broadcast."
        }
      ]
    },
    {
      title: "Transit Workshop",
      price: 12999,
      discountedPrice: 9999,
      slug: "transit-workshop",
      tag: "Astrology",
      description: "Master special transit techniques not available in standard texts, with tested practical rules for accurate predictions. Learn exclusive insights and methodologies developed through years of research and practice.",
      videoUrl: "https://example.com/transit-workshop-preview",
      stats: {
        duration: "25 hours",
        enrolled: "400+",
        videos: "35+",
        support: "3 months",
      },
      benefits: [
        {
          title: "Exclusive Knowledge",
          description: "Access to special transit techniques not found in standard texts",
          icon: "/icons/exclusive.svg",
        },
        {
          title: "Practical Application",
          description: "Learn tested and proven prediction techniques",
          icon: "/icons/practical.svg",
        },
        {
          title: "Comprehensive Coverage",
          description: "Master all aspects of transit predictions",
          icon: "/icons/comprehensive.svg",
        }
      ],
      curriculum: [
        {
          title: "Transit Fundamentals",
          content: [
            "Transit of Saturn, Jupiter & Rahu/Ketu",
            "Transit of planets over their Natal Positions",
            "Understanding basic transit principles"
          ]
        },
        {
          title: "Special Positions",
          content: [
            "Sadhe Sati & Dhaiyya Results",
            "Transit of Planets over other natal planets",
            "Transit of Lagna lord and Bhava lord"
          ]
        },
        {
          title: "Practical Applications",
          content: [
            "Snapshot prediction techniques",
            "Case studies and examples",
            "Real-world applications"
          ]
        }
      ],
      mentor: {
        name: "Acharya Vedashvapati",
        image: "/mentors/vedashvapati.jpg",
        description: "Expert in transit predictions with decades of experience",
        credentials: "Developer of unique transit prediction techniques"
      },
      faqs: [
        {
          question: "Is this course suitable for beginners?",
          answer: "While some basic knowledge of astrology is helpful, the course is structured to accommodate learners at all levels."
        },
        {
          question: "What makes this transit workshop unique?",
          answer: "This workshop teaches special techniques not available in standard texts, based on practical research and testing."
        }
      ]
    },
    {
      title: "Retrograde and Combust Graha Workshop",
      price: 13999,
      discountedPrice: 10999,
      slug: "retrograde-combust-workshop",
      tag: "Astrology",
      description: "Comprehensive exploration of retrograde and combust planets, their effects, and predictive techniques in Vedic astrology.",
      videoUrl: "https://example.com/retrograde-workshop-preview",
      stats: {
        duration: "30 hours",
        enrolled: "350+",
        videos: "40+",
        support: "3 months",
      },
      benefits: [
        {
          title: "Deep Understanding",
          description: "Master the concepts of retrograde and combust planets",
          icon: "/icons/understanding.svg",
        },
        {
          title: "Comprehensive Analysis",
          description: "Learn effects of all planets in retrograde and combustion",
          icon: "/icons/analysis.svg",
        },
        {
          title: "Practical Applications",
          description: "Apply knowledge to real-world predictions",
          icon: "/icons/practical.svg",
        }
      ],
      curriculum: [
        {
          title: "Retrograde Fundamentals",
          content: [
            "What is Retrograde planet",
            "When do Rahu and Ketu become direct and results",
            "Effects of Retrograde planet (Mercury, Mars, Jupiter, Venus, Saturn, Rahu, Ketu)",
            "Planets in signs of Retrograde Planet"
          ]
        },
        {
          title: "House and Dasha Effects",
          content: [
            "Effects of house when Lord is Retrograde",
            "Dasha of retrograde planet",
            "Impact on predictions and timing"
          ]
        },
        {
          title: "Combustion Studies",
          content: [
            "What is Combustion",
            "Benefits of combustion",
            "Effects of Combust planet (Moon, Mercury, Mars, Jupiter, Venus, Saturn)",
            "Maha Vipreet Raj Yog formation and results"
          ]
        }
      ],
      mentor: {
        name: "Acharya Vedashvapati",
        image: "/mentors/vedashvapati.jpg",
        description: "Specialist in planetary movements and retrograde effects",
        credentials: "Expert in combustion and retrograde calculations"
      }
    },
    {
      title: "Karmic Code Reading with Palmistry Course",
      price: 11999,
      discountedPrice: 9999,
      slug: "karmic-code-palmistry",
      tag: "Palmistry",
      description: "Embark on a fascinating journey into palmistry, where the lines on your hands tell a unique story about your life. Learn to interpret the hidden messages encoded in palms through ancient wisdom.",
      videoUrl: "https://example.com/palmistry-preview",
      stats: {
        duration: "40 hours",
        enrolled: "600+",
        videos: "50+",
        support: "3 months",
      },
      benefits: [
        {
          title: "Complete Learning System",
          description: "Access to comprehensive video lectures and study materials",
          icon: "/icons/learning.svg",
        },
        {
          title: "Practical Training",
          description: "Hands-on practice with real case studies and examples",
          icon: "/icons/practice.svg",
        },
        {
          title: "Professional Certification",
          description: "Earn a certificate upon course completion",
          icon: "/icons/certificate.svg",
        }
      ],
      curriculum: [
        {
          title: "Course Materials",
          content: [
            "Recorded Videos: Easy-to-follow videos to learn at your own pace",
            "PPTs/PDFs: Visual slides and materials for better understanding",
            "Quiz/Assignment: Test your knowledge and practice",
            "Certificate: Receive a certificate upon completion"
          ]
        }
      ],
      mentor: {
        name: "Acharya Vedashvapati",
        image: "/mentors/vedashvapati.jpg",
        description: "Master palmist with expertise in karmic readings",
        credentials: "Certified palm reader and karmic analyst"
      }
    },
]

export const getCoursesByTag = (tag: string) => {
  return CourseList.filter((course) => course.tag === tag);
};
