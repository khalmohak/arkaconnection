'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const HomeGallery: React.FC = () => {

    const router = useRouter();

  const images = [
    { src: "https://img.freepik.com/free-vector/geometric-astrological-symbols-tarot-card_53876-78879.jpg", alt: "Gallery Image 1" },
    { src: "https://img.freepik.com/free-vector/zodiac-wheel-space-background_52683-10930.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 2" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
  ];

  return (
    <div className="h-full max-w-[80rem] flex flex-col 2xl:my-20 gap-y-10 container mx-auto px-4 py-8">
      <h2 className="text-black text-3xl font-bold text-center mb-8">Image Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="bg-black text-white hover:bg-gray-800"
        onClick={ () => router.push("/gallery") }
        >
          View Full Gallery
        </Button>
      </div>
    </div>
  );
};

export default HomeGallery;
