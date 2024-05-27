import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const data = [
  {
    name: "Aarav",
    comment:
      "This is a great institute providing excellent education for kids.",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    name: "Diya",
    comment:
      "I highly recommend this place for children's education. Very satisfied with the quality of teaching.",
    image:
      "https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg",
  },
  {
    name: "Kiran",
    comment:
      "Amazing experience at this school. Teachers are very supportive and caring towards kids.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU",
  },
  {
    name: "Neha",
    comment:
      "Great institute for kids' education. They provide a well-rounded curriculum.",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    name: "Raj",
    comment:
      "Highly impressed with the facilities and teaching staff. My child loves going to school here.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU",
  },
  {
    name: "Priya",
    comment:
      "Very satisfied with the quality of education provided. It's a safe and nurturing environment for kids.",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    name: "Sandeep",
    comment:
      "Fast delivery! I mean, quick learning. My child has made remarkable progress since joining.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU",
  },
  {
    name: "Anjali",
    comment:
      "Great customer service! I mean, great education service. The staff is very helpful and friendly.",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    name: "Vikram",
    comment:
      "Awesome institute! The teaching methods are innovative and engaging for kids.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU",
  },
  {
    name: "Pooja",
    comment:
      "Impressive curriculum! My child is learning a lot and enjoying the activities.",
    image:
      "https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg",
  },
];

const KidsStats = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPage]);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(Math.ceil(data.length / itemsPerPage) - 1);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-amber-400 text-right font-semibold text-3xl md:text-4xl ml-10 p-2">
        Happy Kids <br /> Satisfied Parents!
      </h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="absolute left-0 z-10  text-white bg-amber-400 p-2 rounded-full hover:bg-slate-400 mt-24"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
        </button>

        {data
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((el, i) => (
            <div
              key={i}
              className="  bg-white p-6 flex flex-col justify-between shadow-lg hover:bg-pink-100 transition-transform duration-500 ease-in-out  rounded-lg "
            >
              <div className="text-left">
                <p className="font-bold text-xl md:text-2xl text-sky-400">
                  {el.name}
                </p>
                <p className="text-base md:text-xl">{el.comment}</p>
              </div>
              <div className="mt-auto flex justify-end">
                <img
                  src={el.image}
                  alt="error"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                />
              </div>
            </div>
          ))}

        <button
          onClick={handleNext}
          className="absolute right-0 text-white bg-amber-400 p-2 rounded-full mt-24 hover:bg-slate-400"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-800" />
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {Array(Math.ceil(data.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                currentPage === index ? "bg-amber-400" : "bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default KidsStats;
