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
      content: "Deep dive into the seven major chakras and their significance",
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
    name: "Advanced Vedic Astrology Certification Program",
    description:
      "Master the intricate art and science of Vedic Astrology with comprehensive training and practical chart analysis",
    price: 19999,
    discountedPrice: 15999,
    slug: "advanced-vedic-astrology",
    image:'/courses/wheel.jpg'
  },
  {
    tag: "Numerology",
    name: "Professional Vedic Numerology Certification Program",
    description:
      "Learn to decode the vibrational energies of numbers and their influence on life's various aspects",
    price: 14999,
    discountedPrice: 11999,
    slug: "professional-numerology",
    image:'/courses/chakra.jpg'
  },
  {
    tag: "Palmistry",
    name: "Advanced Vedic Palmistry Certification Program",
    description:
      "Dive deep into the study of palm lines, mounts, and symbols for personality and potential analysis",
    price: 12999,
    discountedPrice: 9999,
    slug: "advanced-palmistry",
    image:'/courses/palmistry.jpg'

  },
  {
    tag: "Vastu",
    name: "Vedic Vastu Mastery Program",
    description:
      "Learn to harmonize living and working spaces with cosmic energies using ancient Vastu principles",
    price: 16999,
    discountedPrice: 13999,
    slug: "vastu-mastery",
    image:'/courses/vastu.jpg'
  },
  {
    tag: "Psychology",
    name: "Vedic Psychology & Meditation Therapy Course",
    description:
      "Master the integration of Ayurvedic psychology and meditation techniques for holistic healing",
    price: 15999,
    discountedPrice: 12999,
    slug: "vedic-psychology-meditation",
    image:'/courses/meditation.jpg'
  },
  {
    tag: "Sound Healing",
    name: "Sacred Sound Therapy: Mantra Healing Mastery Program",
    description:
      "Learn the ancient science of sound healing and mantra therapy for transformation",
    price: 13999,
    discountedPrice: 10999,
    slug: "sacred-sound-therapy",
    image:'/courses/sound.jpeg'
  },
];

export const CourseDetailData = [
  {
    title: "Vedic Psychology & Meditation Therapy Course",
    slug: "vedic-psychology-meditation",
    image:'/courses/meditation.jpg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Ayurvedic Psychology & Meditation Therapy Mastery Program by Arka Connection Institute is the ultimate guide to understanding and healing the mind using the ancient wisdom of Ayurveda, combined with meditation techniques tailored for the modern world. This course integrates timeless principles with practical tools to foster mental clarity, emotional balance, and spiritual alignment.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "210 hours",
      enrolled: "100+",
      videos: "30+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Extensive Curriculum",
        description:
          "A holistic exploration of Ayurvedic psychology and meditation therapy with practical tools",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Real-Life Practice",
        description:
          "Analyze and implement therapies in real-world scenarios through case studies",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Career Growth",
        description:
          "Globally recognized certification with opportunity to join Arka Connection Panel",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Ayurvedic Psychology",
        content:
          "Introduction to Ayurvedic Psychology, The Three Doshas and the Mind, The Role of Gunas, Mental Imbalances, The Panchakosha Framework, The Chakras and the Mind",
      },
      {
        title: "Meditation Therapy",
        content:
          "Principles of Meditation, Customized Meditation Practices, Guided Visualization Techniques, Breathwork and Pranayama, Mantra Therapy, Meditation for Stress Management",
      },
      {
        title: "Ayurvedic Tools for Mental Wellness",
        content:
          "Ayurvedic Nutrition for the Mind, Daily Rituals for Clarity, Healing Through Colors and Aromas, Yoga Nidra, Self-Care Practices, Sound Therapy",
      },
      {
        title: "Practical Training and Advanced Techniques",
        content:
          "Real-Life Case Studies, Building Client Relationships, Crafting Personalized Healing Plans, Stress and Trauma Management, Advanced Meditation Techniques",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is a renowned master in Ayurvedic psychology and meditation practices. His expertise combines ancient wisdom with modern therapeutic techniques, guiding students through a transformative journey of understanding and healing the mind using timeless principles adapted for the contemporary world.",
      credentials:
        "Master in Ayurvedic psychology and meditation practices, Expert in holistic wellness, Pioneer in integrating ancient wisdom with modern therapy",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This program transformed my understanding of mental wellness and meditation therapy",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "Journey to mental clarity and emotional balance",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "Transforming lives through Ayurvedic psychology",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Mental Health Professionals",
        description:
          "Therapists and counselors seeking to integrate holistic approaches",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Wellness Practitioners",
        description:
          "Yoga teachers and healers looking to expand their therapeutic toolkit",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Meditation Teachers",
        description:
          "Those wanting to deepen their understanding of meditation therapy",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Personal Growth Enthusiasts",
        description:
          "Individuals interested in holistic approaches to mental wellness",
      },
    ],
    faqs: [
      {
        question: "What is the duration of the course?",
        answer:
          "The course consists of 30 classes over 6 months (60 hours live + 150 hours recordings) with lifetime access to materials.",
      },
      {
        question: "Is there practical training involved?",
        answer:
          "Yes, you'll work on real-life case studies and design customized therapy plans under expert guidance.",
      },
      {
        question: "What certification will I receive?",
        answer:
          "You'll receive a globally recognized certificate in Ayurvedic Psychology & Meditation Therapy upon passing the evaluations.",
      },
    ],
    companyInfo: {
      name: "Arka Connection Institute",
      description:
        "Arka Connection Institute is a premier institution offering comprehensive education in Vedic sciences. Through our Ayurvedic Psychology & Meditation Therapy Program, we provide students with advanced training in understanding and healing the mind using ancient wisdom combined with modern therapeutic approaches.",
      values:
        "At Arka Connection Institute, we are committed to preserving and promoting holistic approaches to mental wellness while making them relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of Ayurvedic psychology and meditation.",
    },
  },
  {
    title: "Advanced Vedic Astrology Certification Program",
    slug: "advanced-vedic-astrology",
    image:'/courses/wheel.jpg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Arka Connection Advanced Vedic Astrology Certification Program is a one-of-a-kind course designed to master the intricate art and science of Vedic Astrology. Taught by Acharya Alok Awasthi, a distinguished scholar blending ancient wisdom with modern insights, this program offers the most comprehensive and transformative curriculum for the 21st century.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "96 hours",
      enrolled: "100+",
      videos: "48+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Comprehensive Curriculum",
        description:
          "48 classes covering foundational to advanced topics in astrology",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Practical Experience",
        description:
          "Analyze and interpret 600 real-life charts, including those of celebrities",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Career Growth",
        description:
          "Top scorers can join the Arka Connection Panel of Consultants",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Vedic Astrology",
        content:
          "The Origins of Astrology, The Zodiac Wheel, The 9 Grahas, Houses of Life, Nakshatras, Planetary Yogas",
      },
      {
        title: "Predictive Astrology and Dashas",
        content:
          "Vimshottari Dasha System, Transits, Rahu and Ketu, Retrograde and Combust Planets, Annual Progression Charts, Ashtakavarga",
      },
      {
        title: "Divisional Charts and Special Techniques",
        content:
          "Navamsa Chart, Dashamsha and Career Analysis, Chandra Kundali, Compatibility and Synastry, Medical Astrology",
      },
      {
        title: "Remedial Astrology and Spiritual Guidance",
        content:
          "Remedies for Planetary Challenges, Vedic Psychology, Role of Panchanga, Astrology for Mental Wellness",
      },
      {
        title: "Advanced Applications and Practical Training",
        content:
          "Astrology for Professionals, Understanding Global Trends, Astrology and Spiritual Growth, Predictive Techniques",
      },
      {
        title: "Internship and Certification",
        content:
          "Practical Internship working under Acharya Alok Awasthi, analyzing 600 real-life charts",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is a pioneer in Vedic Astrology and Psychology, distinguished scholar blending ancient wisdom with modern insights. The program offers the most comprehensive and transformative curriculum for the 21st century, integrating astrology, spiritual guidance, and psychological principles to create a holistic learning experience.",
      credentials:
        "Expert in Vedic Astrology, Pioneer in blending traditional astrology with modern psychology, Distinguished scholar of ancient wisdom",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This comprehensive program transformed my understanding of Vedic Astrology",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "A life-changing journey into Vedic wisdom",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "Best investment in my astrological career",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Aspiring Astrologers",
        description: "Those who want to build a career in Vedic Astrology",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Spiritual Seekers",
        description:
          "People looking to deepen their understanding of Vedic wisdom",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Practicing Consultants",
        description:
          "Professional astrologers wanting to enhance their expertise",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Personal Growth Advocates",
        description:
          "Individuals interested in combining astrology with personal development",
      },
    ],
    faqs: [
      {
        question: "Do I need prior experience in astrology?",
        answer:
          "No prior experience is required. This course is designed to accommodate both beginners and advanced practitioners.",
      },
      {
        question: "How long do I have access to the course?",
        answer:
          "You get lifetime access to all course materials, including MP3 recordings and future updates.",
      },
      {
        question: "What is the duration of the course?",
        answer:
          "The course consists of 48 classes (96 hours) spread over 6 months, plus 150 hours of MP3 recordings.",
      },
    ],
    companyInfo: {
      name: "Arka Connection",
      description:
        "Arka Connection is a premier institution offering comprehensive education in Vedic Astrology and related spiritual sciences. Through our Advanced Vedic Astrology Certification Program, we provide students with the most comprehensive and transformative curriculum for the 21st century, blending ancient wisdom with modern insights.",
      values:
        "At Arka Connection, we are committed to preserving and promoting the ancient wisdom of Vedic Astrology while making it relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of celestial sciences.",
    },
  },
  {
    title: "Vedic Vastu Mastery Program",
    slug: "vastu-mastery",
    image:'/courses/vastu.jpg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Vedic Vastu Mastery Program offered by Arka Connection Institute is the most advanced course on Vastu Shastra, crafted for the 21st century. This transformative program combines ancient Vedic principles with modern architectural and psychological insights, teaching students how to harmonize living and working spaces with cosmic energies.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "180 hours",
      enrolled: "100+",
      videos: "30+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Extensive Curriculum",
        description:
          "A deep dive into foundational and advanced Vastu Shastra principles with practical training",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Practical Training",
        description:
          "Analyze real-life case studies and apply Vastu corrections to homes and offices",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Career Growth",
        description:
          "Globally recognized certification with opportunity to join Arka Connection Panel",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Vastu Shastra",
        content:
          "Origins and Philosophy, The Five Elements, Vastu Purusha Mandala, Directional Energies, Basic Vastu Corrections",
      },
      {
        title: "Advanced Vastu Principles",
        content:
          "Residential Vastu, Commercial Vastu, Health and Wellness, Wealth and Prosperity, Sacred Geometry, Structural Vastu Defects, Urban Living, Eco-Vastu",
      },
      {
        title: "Applications of Vastu in Different Domains",
        content:
          "Healing Spaces, Educational Institutions, Retail and Hospitality, Factories and Industries, Relationships, Astrological Integration, Technology",
      },
      {
        title: "Advanced Techniques and Remedies",
        content:
          "Vastu Remedies Without Structural Changes, Mantra and Yantra, Crystal and Color Therapy, Energy Flow Mapping, Case Studies",
      },
      {
        title: "Practical Training and Certification",
        content:
          "Internship with real-life case studies, Customized Solutions, Client Interaction Skills, Final Project Presentation",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is a visionary and authority in Vedic sciences, leading students through an advanced journey into Vastu Shastra. His expertise combines ancient Vedic principles with modern architectural and psychological insights, teaching students how to harmonize living and working spaces with cosmic energies.",
      credentials:
        "Authority in Vedic sciences, Expert in Vastu Shastra, Pioneer in combining ancient wisdom with modern architectural principles",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This program revolutionized my understanding of space design and energy flow",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "Transforming spaces with Vastu wisdom",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "Creating harmony through Vastu principles",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Architects & Designers",
        description:
          "Professionals looking to integrate Vastu principles in their designs",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Property Consultants",
        description:
          "Real estate professionals seeking to enhance their expertise",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Spiritual Practitioners",
        description:
          "Those interested in the spiritual aspects of space design",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Homeowners & Entrepreneurs",
        description:
          "People wanting to optimize their living and working spaces",
      },
    ],
    faqs: [
      {
        question: "What is the duration of the course?",
        answer:
          "The course consists of 30 classes over 6 months (60 hours live + 120 hours recordings) with lifetime access to materials.",
      },
      {
        question: "Is there practical training involved?",
        answer:
          "Yes, you'll work on real-life case studies of homes, offices, and public spaces through internships.",
      },
      {
        question: "What certification will I receive?",
        answer:
          "You'll receive a globally recognized certificate as a professional Vastu consultant upon passing the evaluations.",
      },
    ],
    companyInfo: {
      name: "Arka Connection Institute",
      description:
        "Arka Connection Institute is a premier institution offering comprehensive education in Vedic sciences. Through our Vedic Vastu Mastery Program, we provide students with the most advanced training in Vastu Shastra, combining ancient principles with modern architectural and psychological insights.",
      values:
        "At Arka Connection Institute, we are committed to preserving and promoting the ancient wisdom of Vastu Shastra while making it relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of spatial design.",
    },
  },
  {
    title: "Advanced Vedic Palmistry Certification Program",
    slug: "advanced-palmistry",
    image:'/courses/palmistry.jpg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Arka Connection Advanced Vedic Palmistry Certification Program is an unparalleled journey into the ancient science of palmistry, combining timeless Vedic knowledge with modern interpretations. This program, led by Acharya Alok Awasthi, dives deep into the study of palm lines, mounts, and symbols, providing insights into personality, potential, and life's direction.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "36 hours",
      enrolled: "100+",
      videos: "12+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Comprehensive Curriculum",
        description:
          "Covers foundational to advanced palmistry techniques with expert guidance",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Real-Life Practice",
        description:
          "Analyze and interpret 130 palms under expert guidance including celebrity cases",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Certification & Career",
        description:
          "Globally recognized certificate with opportunity to join Arka Connection Panel",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Vedic Palmistry",
        content:
          "The History and Philosophy of Palmistry, Basic Anatomy of the Palm, The Primary Lines: Life, Heart, and Head Lines",
      },
      {
        title: "Advanced Palmistry Techniques",
        content:
          "Secondary Lines, Mounts and Their Influence, Special Symbols and Signs, Palm Zones and planetary energies",
      },
      {
        title: "Applications of Palmistry",
        content:
          "Career and Finance Insights, Relationships and Compatibility, Health and Wellness through palm analysis",
      },
      {
        title: "Practical Training and Advanced Case Studies",
        content:
          "Real-Life Case Studies analyzing 130 palms, Customized Interpretations for clients",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is a master of Vedic sciences and psychology, leading students through an unparalleled journey into the ancient science of palmistry. His expertise combines timeless Vedic knowledge with modern interpretations, providing deep insights into personality, potential, and life's direction.",
      credentials:
        "Master of Vedic sciences and psychology, Expert in palm analysis and interpretation, Pioneer in combining ancient wisdom with modern applications",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This program opened my eyes to the profound wisdom hidden in palm analysis",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "Discovering life's potential through palm analysis",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "The art and science of palm reading",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Aspiring Palmists",
        description:
          "Those seeking to master the ancient art of palm reading professionally",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Spiritual Guides",
        description:
          "Counselors and mentors looking to expand their guidance toolkit",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Holistic Practitioners",
        description:
          "Wellness professionals wanting to integrate palm analysis",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Self-Development Enthusiasts",
        description:
          "Individuals interested in understanding human potential through palmistry",
      },
    ],
    faqs: [
      {
        question: "What is the duration of the course?",
        answer:
          "The course consists of 12 classes over 3 months (24 hours live + 12 hours recordings) with lifetime access to materials.",
      },
      {
        question: "Is there practical training involved?",
        answer:
          "Yes, you'll analyze 130 real-life palmistry cases, including celebrities, under expert guidance.",
      },
      {
        question: "What certification will I receive?",
        answer:
          "You'll receive a globally recognized certificate upon passing the online written test and live interview.",
      },
    ],
    companyInfo: {
      name: "Arka Connection",
      description:
        "Arka Connection is a premier institution offering comprehensive education in Vedic sciences. Through our Advanced Vedic Palmistry Certification Program, we provide students with an unparalleled journey into the ancient science of palmistry, combining timeless Vedic knowledge with modern interpretations.",
      values:
        "At Arka Connection, we are committed to preserving and promoting the ancient wisdom of Vedic sciences while making it relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of palmistry.",
    },
  },
  {
    title: "Professional Vedic Numerology Certification Program",
    slug: "professional-numerology",
    image:'/courses/chakra.jpg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Professional Vedic Numerology Certification Program is an advanced 20-day course designed to empower participants with an in-depth understanding of numerology and its practical applications. Rooted in Vedic wisdom and integrated with modern professional needs, this course is tailored to decode the vibrational energies of numbers, offering transformative insights into health, career growth, relationships, and spiritual alignment.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "40 hours",
      enrolled: "100+",
      videos: "20+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Comprehensive Curriculum",
        description:
          "Covers predictive, remedial, and spiritual dimensions of numerology with real-world case studies",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Interactive Learning",
        description:
          "Includes real-world case studies, group discussions, and workshops with hands-on training",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Global Certification",
        description:
          "Earn a globally recognized Professional Certificate in Vedic Numerology",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Vedic Numerology",
        content:
          "The history and evolution of Vedic Numerology, Key concepts: Root Numbers, Destiny Numbers, and Maturity Numbers, Linking numbers with planetary energies",
      },
      {
        title: "Decoding the Vibrations of Numbers",
        content:
          "Detailed exploration of numbers 1–9, The spiritual and material dimensions of each number, The vibrational essence of numbers and their impact on life",
      },
      {
        title: "Career, Leadership, and Relationships",
        content:
          "Numerology in career growth, leadership, and decision-making, Compatibility analysis for relationships and team dynamics, Choosing auspicious dates",
      },
      {
        title: "Predictive and Medical Numerology",
        content:
          "Predicting life events with Personal Year Numbers, Exploring Medical Numerology for health tendencies and remedies, Linking numbers to emotional and spiritual well-being",
      },
      {
        title: "Advanced Applications and Vedic Remedies",
        content:
          "Advanced calculations for complex predictions, Applying numerology to business branding, Remedies: gemstones, mantras, colors, yoga, and rituals",
      },
      {
        title: "Real-World Integration and Certification",
        content:
          "Ethical practices and boundaries in professional numerology, Integrating numerology with modern professions and practices",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is an expert with a nine-generation legacy in Vedic sciences. As a renowned expert in Vedic Numerology, he has curated this program to go beyond theoretical learning, including interactive live sessions, real-life case studies, and actionable strategies to help participants integrate numerology into their personal and professional lives.",
      credentials:
        "Expert with nine-generation legacy in Vedic sciences, Specialist in Vedic Numerology, Pioneer in integrating ancient wisdom with modern applications",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This comprehensive program transformed my understanding of Vedic Numerology",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "A journey into the power of numbers",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "Best investment in my numerological practice",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Professionals",
        description:
          "Looking to enhance decision-making, leadership, and productivity",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Wellness Practitioners",
        description:
          "Yoga teachers and meditation coaches exploring holistic frameworks",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Spiritual Seekers",
        description:
          "Individuals passionate about spiritual alignment and self-discovery",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Entrepreneurs",
        description:
          "Executives seeking innovative approaches to career and business strategies",
      },
    ],
    faqs: [
      {
        question: "What is the duration of the course?",
        answer:
          "The course is a 20-day program with 2 hours of daily sessions, totaling 40 hours of intensive training.",
      },
      {
        question: "Do I get lifetime access to the materials?",
        answer:
          "Yes, you get lifetime access to handouts, charts, recorded lectures, and practical tools for numerological analysis.",
      },
      {
        question: "Is there any post-course support?",
        answer:
          "Yes, you get access to online forums and exclusive mentorship opportunities after course completion.",
      },
    ],
    companyInfo: {
      name: "Arka Connection Institute",
      description:
        "Arka Connection Institute is a premier institution offering comprehensive education in Vedic sciences. Through our Professional Vedic Numerology Certification Program, we provide students with an advanced understanding of numerology and its practical applications, blending ancient wisdom with modern professional needs.",
      values:
        "At Arka Connection Institute, we are committed to preserving and promoting Vedic wisdom while making it relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of numerology.",
    },
  },
  {
    title: "Sacred Sound Therapy: The Ultimate Mantra Healing Mastery Program",
    slug: "sacred-sound-therapy",
    image:'/courses/sound.jpeg',
    price: 200,
    discountedPrice: 150,
    description:
      "The Sacred Sound Therapy Mastery Program by Arka Connection is the definitive course on Mantra Healing Therapy for the 21st century. This transformational program integrates the ancient science of sound with modern techniques to provide a comprehensive approach to healing and personal transformation.",
    videoUrl: "https://youtube.com/embed/example",
    stats: {
      duration: "150 hours",
      enrolled: "100+",
      videos: "15+",
      support: "Lifetime",
    },
    benefits: [
      {
        title: "Comprehensive Curriculum",
        description:
          "A complete exploration of mantra healing, from foundational principles to advanced techniques",
        icon: "/courses/static/live-classes.jpeg",
      },
      {
        title: "Practical Application",
        description:
          "Real-life case studies to ensure hands-on experience in applying mantra therapy",
        icon: "/courses/static/docs.jpeg",
      },
      {
        title: "Career Growth",
        description:
          "Globally recognized certification with opportunity to join Arka Connection Panel",
        icon: "/courses/static/doubt.jpeg",
      },
    ],
    curriculum: [
      {
        title: "Foundations of Mantra Healing Therapy",
        content:
          "The Science of Sacred Sounds, The Origins of Mantras, The Mechanics of Mantras, Types of Mantras, Mantras and the Subconscious",
      },
      {
        title: "Therapeutic Applications of Mantras",
        content:
          "Mantras for Physical Healing, Emotional Well-Being, Spiritual Growth, Chakra Balancing with Mantras, Mantras for Prosperity, Protection and Cleansing",
      },
      {
        title: "Advanced Techniques and Practical Training",
        content:
          "Customized Mantra Prescriptions, Combining Mantras with Meditation, Case Studies and Analysis, Developing a Healing Practice",
      },
    ],
    mentor: {
      name: "Acharya Alok Awasthi",
      image:
        "https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp",
      description:
        "Acharya Alok Awasthi is an expert guide in Sacred Sound Therapy, leading students through a transformative journey of understanding and applying mantra healing. His expertise combines ancient sound science with modern therapeutic techniques, providing a comprehensive approach to healing and personal transformation.",
      credentials:
        "Expert in Sacred Sound Therapy, Master of Mantra Healing, Pioneer in integrating ancient sound science with modern healing techniques",
    },
    testimonials: [
      {
        name: "John Doe",
        image: "/api/placeholder/50/50",
        review:
          "This program opened my eyes to the profound healing power of sacred sounds",
        rating: 5,
      },
    ],
    videoTestimonials: [
      {
        id: 1,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example1",
        studentName: "Maria Garcia",
        title: "Transforming lives through sacred sound",
      },
      {
        id: 2,
        thumbnail: "/api/placeholder/300/200",
        videoUrl: "https://youtube.com/embed/example2",
        studentName: "James Wilson",
        title: "The healing power of mantras",
      },
    ],
    whoShouldEnroll: [
      {
        image: "/courses/static/meditation.jpeg",
        title: "Sound Healers",
        description:
          "Practitioners looking to integrate mantra therapy into their practice",
      },
      {
        image: "/courses/static/meditation2.jpeg",
        title: "Wellness Professionals",
        description:
          "Therapists and healers seeking to expand their healing toolkit",
      },
      {
        image: "/courses/static/healing.jpeg",
        title: "Spiritual Practitioners",
        description:
          "Those wanting to deepen their understanding of sacred sounds",
      },
      {
        image: "/courses/static/growth.jpeg",
        title: "Personal Growth Enthusiasts",
        description:
          "Individuals interested in sound healing and spiritual transformation",
      },
    ],
    faqs: [
      {
        question: "What is the duration of the course?",
        answer:
          "The course consists of 15 classes over 4 months (30 hours live + 120 hours recordings) with lifetime access to materials.",
      },
      {
        question: "Is there practical training involved?",
        answer:
          "Yes, you'll work on real-life case studies applying mantra healing techniques under expert guidance.",
      },
      {
        question: "What certification will I receive?",
        answer:
          "You'll receive a globally recognized certificate as a professional mantra therapist upon passing the evaluations.",
      },
    ],
    companyInfo: {
      name: "Arka Connection",
      description:
        "Arka Connection is a premier institution offering comprehensive education in Vedic sciences. Through our Sacred Sound Therapy Program, we provide students with advanced training in mantra healing, combining ancient sound science with modern therapeutic approaches.",
      values:
        "At Arka Connection, we are committed to preserving and promoting the sacred science of sound healing while making it relevant and applicable in the modern world. We value excellence in education, practical experience, and personal transformation through the study of mantra therapy.",
    },
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

export const CourseDetailData2 = [
  {
    title: "Predictions with Annul Horoscope/ तिथि प्रवेश कुण्डली",
    price: 14999,
    discountedPrice: 11999,
    slug: "predictions-annual-horoscope",
    tag: "Astrology",
    description:
      "A comprehensive masterclass covering Tithi pravesh chart and its practical applications in Vedic astrology. Learn how to make precise predictions using annual horoscopes through ancient and tested methodologies.",
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
        description:
          "Master the fundamental concepts of Tithi Pravesh chart and its elements",
        icon: "/icons/foundation.svg",
      },
      {
        title: "Practical Analysis",
        description:
          "Learn chart analysis techniques with real-world examples and applications",
        icon: "/icons/analysis.svg",
      },
      {
        title: "Prediction Mastery",
        description:
          "Develop expertise in daily, monthly and yearly predictions",
        icon: "/icons/prediction.svg",
      },
    ],
    curriculum: [
      {
        title: "Fundamentals of Tithi Pravesh",
        content: [
          "What is Tithi Pravesh chart?",
          "Role of five elements in Tithi Pravesh chart",
          "Tithi Pravesh chart and Dagdha Rashis",
          "Importance of Lagna lord in Tithi Pravesh chart",
        ],
      },
      {
        title: "Predictive Techniques",
        content: [
          "Comparison with Natal Chart to outline coming year events",
          "Significant events predictions",
          "Daily & monthly predictions",
          "Ashtakvarga in Tithi Pravesh chart",
        ],
      },
      {
        title: "Advanced Applications",
        content: [
          "How to use Dasha in Tithi Pravesh chart",
          "Practical chart analysis",
          "Integration of multiple prediction techniques",
          "Real-world case studies",
        ],
      },
    ],
    mentor: {
      name: "Acharya Vedashvapati",
      image: "/mentors/vedashvapati.jpg",
      description:
        "A renowned Vedic astrologer with over 20 years of experience",
      credentials: "Expert in Tithi Pravesh and predictive astrology",
    },
    faqs: [
      {
        question: "Do I need prior knowledge of astrology?",
        answer:
          "Basic understanding of astrology fundamentals is recommended but not mandatory. The course is designed to accommodate both beginners and advanced practitioners.",
      },
      {
        question: "How will I view the webinars?",
        answer:
          "Live webinars are conducted via Zoom platform. You'll receive clear instructions to join. You need good internet access and a device with video/audio capabilities.",
      },
      {
        question: "What if I can't attend live sessions?",
        answer:
          "You'll have full access to recorded webinars for at least 90 days after the live broadcast.",
      },
    ],
  },
  {
    title: "Transit Workshop",
    price: 12999,
    discountedPrice: 9999,
    slug: "transit-workshop",
    tag: "Astrology",
    description:
      "Master special transit techniques not available in standard texts, with tested practical rules for accurate predictions. Learn exclusive insights and methodologies developed through years of research and practice.",
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
        description:
          "Access to special transit techniques not found in standard texts",
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
      },
    ],
    curriculum: [
      {
        title: "Transit Fundamentals",
        content: [
          "Transit of Saturn, Jupiter & Rahu/Ketu",
          "Transit of planets over their Natal Positions",
          "Understanding basic transit principles",
        ],
      },
      {
        title: "Special Positions",
        content: [
          "Sadhe Sati & Dhaiyya Results",
          "Transit of Planets over other natal planets",
          "Transit of Lagna lord and Bhava lord",
        ],
      },
      {
        title: "Practical Applications",
        content: [
          "Snapshot prediction techniques",
          "Case studies and examples",
          "Real-world applications",
        ],
      },
    ],
    mentor: {
      name: "Acharya Vedashvapati",
      image: "/mentors/vedashvapati.jpg",
      description: "Expert in transit predictions with decades of experience",
      credentials: "Developer of unique transit prediction techniques",
    },
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "While some basic knowledge of astrology is helpful, the course is structured to accommodate learners at all levels.",
      },
      {
        question: "What makes this transit workshop unique?",
        answer:
          "This workshop teaches special techniques not available in standard texts, based on practical research and testing.",
      },
    ],
  },
  {
    title: "Retrograde and Combust Graha Workshop",
    price: 13999,
    discountedPrice: 10999,
    slug: "retrograde-combust-workshop",
    tag: "Astrology",
    description:
      "Comprehensive exploration of retrograde and combust planets, their effects, and predictive techniques in Vedic astrology.",
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
        description:
          "Learn effects of all planets in retrograde and combustion",
        icon: "/icons/analysis.svg",
      },
      {
        title: "Practical Applications",
        description: "Apply knowledge to real-world predictions",
        icon: "/icons/practical.svg",
      },
    ],
    curriculum: [
      {
        title: "Retrograde Fundamentals",
        content: [
          "What is Retrograde planet",
          "When do Rahu and Ketu become direct and results",
          "Effects of Retrograde planet (Mercury, Mars, Jupiter, Venus, Saturn, Rahu, Ketu)",
          "Planets in signs of Retrograde Planet",
        ],
      },
      {
        title: "House and Dasha Effects",
        content: [
          "Effects of house when Lord is Retrograde",
          "Dasha of retrograde planet",
          "Impact on predictions and timing",
        ],
      },
      {
        title: "Combustion Studies",
        content: [
          "What is Combustion",
          "Benefits of combustion",
          "Effects of Combust planet (Moon, Mercury, Mars, Jupiter, Venus, Saturn)",
          "Maha Vipreet Raj Yog formation and results",
        ],
      },
    ],
    mentor: {
      name: "Acharya Vedashvapati",
      image: "/mentors/vedashvapati.jpg",
      description: "Specialist in planetary movements and retrograde effects",
      credentials: "Expert in combustion and retrograde calculations",
    },
  },
  {
    title: "Karmic Code Reading with Palmistry Course",
    price: 11999,
    discountedPrice: 9999,
    slug: "karmic-code-palmistry",
    tag: "Palmistry",
    description:
      "Embark on a fascinating journey into palmistry, where the lines on your hands tell a unique story about your life. Learn to interpret the hidden messages encoded in palms through ancient wisdom.",
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
        description:
          "Access to comprehensive video lectures and study materials",
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
      },
    ],
    curriculum: [
      {
        title: "Course Materials",
        content: [
          "Recorded Videos: Easy-to-follow videos to learn at your own pace",
          "PPTs/PDFs: Visual slides and materials for better understanding",
          "Quiz/Assignment: Test your knowledge and practice",
          "Certificate: Receive a certificate upon completion",
        ],
      },
    ],
    mentor: {
      name: "Acharya Vedashvapati",
      image: "/mentors/vedashvapati.jpg",
      description: "Master palmist with expertise in karmic readings",
      credentials: "Certified palm reader and karmic analyst",
    },
  },
];

export const getCoursesByTag = (tag: string) => {
  return []
  // return CourseDetailData.filter((course) => course.tag === tag);
};
