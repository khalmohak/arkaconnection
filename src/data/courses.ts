export const CourseTags = [
  { name: "Astrology", path: "/courses/astrology" },
  { name: "Numerology", path: "/courses/numerology" },
  { name: "Vastu", path: "/courses/vastu" },
  { name: "Palmistry", path: "/courses/palmistry" },
  { name: "Ayurveda", path: "/courses/ayurveda" },
  { name: "Spirituality", path: "/courses/spirituality" },
];

export const CourseList = [
  // Astrology
  { tag: "Astrology", name: "Astrology Basics", description: "Learn the fundamentals of astrology.", price: 100, discountedPrice: 80, slug: "astrology-basics-1" },
  { tag: "Astrology", name: "Horoscope Reading", description: "Master horoscope reading techniques.", price: 150, discountedPrice: 120, slug: "horoscope-reading-2" },
  { tag: "Astrology", name: "Advanced Astrology", description: "Dive deep into advanced astrological concepts.", price: 200, discountedPrice: 160, slug: "advanced-astrology-3" },
  { tag: "Astrology", name: "Astrological Predictions", description: "Learn to make accurate predictions.", price: 180, discountedPrice: 140, slug: "astrological-predictions-4" },
  { tag: "Astrology", name: "Zodiac Signs Mastery", description: "Understand zodiac signs in depth.", price: 130, discountedPrice: 100, slug: "zodiac-signs-mastery-5" },

  // Numerology
  { tag: "Numerology", name: "Numerology Basics", description: "Discover the basics of numerology.", price: 90, discountedPrice: 70, slug: "numerology-basics-6" },
  { tag: "Numerology", name: "Life Path Numbers", description: "Understand life path numbers.", price: 120, discountedPrice: 90, slug: "life-path-numbers-7" },
  { tag: "Numerology", name: "Master Numbers Explained", description: "Unravel the secrets of master numbers.", price: 140, discountedPrice: 110, slug: "master-numbers-explained-8" },
  { tag: "Numerology", name: "Numerology for Beginners", description: "An introduction to numerology for novices.", price: 80, discountedPrice: 60, slug: "numerology-for-beginners-9" },
  { tag: "Numerology", name: "Numerology in Daily Life", description: "Apply numerology to enhance daily life.", price: 100, discountedPrice: 75, slug: "numerology-daily-life-10" },

  // Vastu
  { tag: "Vastu", name: "Vastu for Homes", description: "Create harmony in your living space.", price: 110, discountedPrice: 85, slug: "vastu-for-homes-11" },
  { tag: "Vastu", name: "Office Vastu", description: "Optimize your office for success.", price: 140, discountedPrice: 105, slug: "office-vastu-12" },
  { tag: "Vastu", name: "Vastu Shastra Basics", description: "Learn the principles of Vastu Shastra.", price: 100, discountedPrice: 80, slug: "vastu-shastra-basics-13" },
  { tag: "Vastu", name: "Vastu for Prosperity", description: "Enhance prosperity through Vastu.", price: 150, discountedPrice: 120, slug: "vastu-for-prosperity-14" },
  { tag: "Vastu", name: "Advanced Vastu Practices", description: "Explore advanced Vastu techniques.", price: 180, discountedPrice: 140, slug: "advanced-vastu-practices-15" },

  // Palmistry
  { tag: "Palmistry", name: "Palmistry Basics", description: "Decode the lines on your palms.", price: 90, discountedPrice: 70, slug: "palmistry-basics-16" },
  { tag: "Palmistry", name: "Reading Hand Shapes", description: "Understand the significance of hand shapes.", price: 110, discountedPrice: 85, slug: "reading-hand-shapes-17" },
  { tag: "Palmistry", name: "Finger Analysis", description: "Learn the art of finger analysis.", price: 130, discountedPrice: 100, slug: "finger-analysis-18" },
  { tag: "Palmistry", name: "Love Lines in Palmistry", description: "Decode love lines on the palms.", price: 100, discountedPrice: 75, slug: "love-lines-palmistry-19" },
  { tag: "Palmistry", name: "Advanced Palmistry", description: "Master advanced palmistry techniques.", price: 150, discountedPrice: 120, slug: "advanced-palmistry-20" },

  // Ayurveda
  { tag: "Ayurveda", name: "Ayurveda Basics", description: "Discover the science of Ayurveda.", price: 100, discountedPrice: 80, slug: "ayurveda-basics-21" },
  { tag: "Ayurveda", name: "Ayurvedic Diet", description: "Plan diets based on Ayurvedic principles.", price: 120, discountedPrice: 90, slug: "ayurvedic-diet-22" },
  { tag: "Ayurveda", name: "Herbal Remedies", description: "Learn about Ayurvedic herbal remedies.", price: 140, discountedPrice: 110, slug: "herbal-remedies-23" },
  { tag: "Ayurveda", name: "Ayurvedic Massage", description: "Explore Ayurvedic massage techniques.", price: 130, discountedPrice: 100, slug: "ayurvedic-massage-24" },
  { tag: "Ayurveda", name: "Yoga and Ayurveda", description: "Integrate yoga with Ayurvedic practices.", price: 150, discountedPrice: 120, slug: "yoga-ayurveda-25" },

  // Spirituality
  { tag: "Spirituality", name: "Meditation Techniques", description: "Learn different meditation methods.", price: 90, discountedPrice: 70, slug: "meditation-techniques-26" },
  { tag: "Spirituality", name: "Chakra Healing", description: "Balance your chakras through healing.", price: 130, discountedPrice: 100, slug: "chakra-healing-27" },
  { tag: "Spirituality", name: "Spiritual Growth", description: "Expand your spiritual horizons.", price: 150, discountedPrice: 120, slug: "spiritual-growth-28" },
  { tag: "Spirituality", name: "Mindfulness Practice", description: "Practice mindfulness daily.", price: 110, discountedPrice: 85, slug: "mindfulness-practice-29" },
  { tag: "Spirituality", name: "Advanced Meditation", description: "Deep dive into advanced meditation.", price: 180, discountedPrice: 140, slug: "advanced-meditation-30" },
];

export const getCoursesByTag = (tag:string) => {
  return CourseList.filter((course) => course.tag === tag);
};
