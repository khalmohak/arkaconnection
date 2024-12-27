"use client";

import React from "react";

// interface YouTubeGridProps {
//   videoUrls: string[]
// }

const videoUrls = [
  "https://youtube.com/shorts/zQUSUZ9fPgo?si=dYEy6kreu-ohljlS",
  "https://youtube.com/shorts/G06KlmaMvYc?si=MP0pbYInRIaShiH9"
];

const VideoTestimonials = ({showTitle=true}) => {
  const getEmbedUrl = (url: string) => {
    let videoId = "";

    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtube.com/shorts")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="h-full max-w-[80rem] flex flex-col container 2xl:my-20 gap-y-10 mx-auto px-4 py-8">
      {showTitle && <div
        className=" 
        text-3xl font-extrabold
        sm:text-3xl sm:font-extrabold
        md:text-3xl md:font-extrabold
        lg:text-3xl lg:font-extrabold
        xl:text-3xl xl:font-extrabold
        2xl:text-3xl 2xl:font-extrabold 
        text-center
        
        text-[#344e41] "
      >
        Testimonials
      </div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {videoUrls.map((url, index) => (
          <div key={index} className="w-full max-w-md">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={getEmbedUrl(url)}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
