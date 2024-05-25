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
  }, [images]);

  return (
    <div className="flex justify-center items-center h-1/3">
      <div className="w-full h-screen max-w-full rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-full">
          {images.map((imageUrl, i) => (
            <img
              key={i}
              src={imageUrl}
              alt="err"
              className={
                i === currentImageIndex
                  ? "block w-full h-full object-cover"
                  : "hidden"
              }
            />
          ))}

          <p className="absolute inset-0 flex items-center text-left text-white bg-opacity-50 p-5 rounded-lg font-bold text-5xl ml-11">
            Find the Best <br /> Activity for your <br /> Child!
            <span className="ml-3 mt-2 rounded-full bg-sky-400">
              <ChevronRightIcon className="h-8 w-8 text-white" />
            </span>
          </p>

          <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-center py-4">
            <button className="w-full md:w-64 text-lg sm:text-xl md:text-2xl bg-orange-400 text-white p-3 rounded-full mb-2 md:mb-0 md:mr-2.5 mt-10">
              For Academies
            </button>
            <button className="w-full md:w-80 text-lg sm:text-xl md:text-2xl bg-orange-400 text-white p-3 rounded-full mt-10">
              SpArts in your home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
