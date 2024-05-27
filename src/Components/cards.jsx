import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Cards = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setApiData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        return nextPage * itemsPerPage < apiData.length ? nextPage : 0;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [apiData.length]);

  const handleNext = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage * itemsPerPage < apiData.length ? nextPage : 0;
    });
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-sky-400 p-6 relative">
      <h1 className="text-white text-left text-3xl sm:text-4xl ml-4 md:ml-10 p-2 animate-fadeInOut">
        Explore Our Top <br /> Academies
      </h1>
      <div className="ml-4 md:ml-10 p-6 flex items-center relative flex-wrap ">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="absolute left-0 z-10 text-white bg-amber-400 p-2 rounded-full  hover:bg-amber-500"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
        </button>
        <div className="flex flex-wrap justify-between w-full">
          {apiData
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((el) => (
              <div
                key={el.id}
                className="bg-white p-4 m-2 rounded-lg shadow-lg flex flex-col justify-top items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-h-1/2 hover:bg-green-100 "
              >
                <img
                  src="https://kidsacademytxaledo.com/wp-content/uploads/bb-plugin/cache/Front-of-Office-Bldng-5-1-20-scaled-landscape-d718edff32127214f640053b4532e9da-.jpg"
                  className="w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  alt="error"
                />
                <p className="text-lg font-bold text-sky-600">{el.title}</p>
                <p className="text-left text-gray-700">{el.body}</p>
              </div>
            ))}
        </div>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= apiData.length}
          className="absolute right-0 z-10 bg-amber-400 text-white p-2 rounded-full ml-2 hover:bg-amber-500"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
