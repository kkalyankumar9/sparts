import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

const images = [
  "https://melbournechildpsychology.com.au/wp-content/uploads/2016/08/bigstock-Sports-kid-Boy-playing-footba-77211935.jpg",
  "https://images.ctfassets.net/9wtva4vhlgxb/6CViMv6ReF6m7S1RVBO8hc/2140656ac1c61aa20dd76af708645b36/Toddler-activities_hero_720x432.jpg?fm=webp&q=70",
  "https://cdn.cdnparenting.com/articles/2018/07/287130371-H-1024x700.webp",
  "https://melodymakersdubai.com/wp-content/uploads/2022/01/Dance-classes-in-dubai-1170x650.jpg",
  "https://www.avivaindia.com/sites/default/files/Dummy-for-blog_18.png",
];

const Poster = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-screen max-w-full rounded-lg overflow-hidden shadow-lg relative">
        <div className="relative w-full h-full">
          {images.map((imageUrl, i) => (
            <img
              key={i}
              src={imageUrl}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 flex items-center text-left text-sky-400 bg-opacity-50 p-5 rounded-lg font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 sm:ml-8 md:ml-12 lg:ml-16">
            <p className="animate__animated animate__fadeInLeft transition duration-500 ease-in-out">
              Find the Best <br /> Activity for your <br /> Child!
            </p>

            <span className="ml-3 mt-2 rounded-full bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out">
              <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
            </span>
          </div>

          <div className="absolute bottom-6 w-full flex flex-col md:flex-row justify-center py-4">
            <button className="w-full md:w-64 lg:w-72 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-orange-500 text-white p-3 rounded-full mb-2 md:mb-0 md:mr-2.5 mt-10 hover:bg-sky-500 transition duration-300 ease-in-out">
              For Academies
            </button>
            <button className="w-full md:w-80 lg:w-96 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-orange-500 text-white p-3 rounded-full mt-10 hover:bg-sky-500 transition duration-300 ease-in-out">
              SpArts in your home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
