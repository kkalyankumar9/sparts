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

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-sky-400 p-6">
      <h1 className="text-white text-left text-4xl ml-10 p-2">
        Explore Our Top <br /> Academies
      </h1>
      <div className="ml-10 p-2 flex items-center relative">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="absolute text-white bg-amber-400  p-2 rounded-full mr-2  hover:bg-slate-400"
        >
          {" "}
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex">
          {apiData
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((el) => (
              <div
                key={el.id}
                className="bg-white p-4 m-2 rounded shadow-md flex flex-col justify-top items-center w-1/2 max-h-1/2 hover:bg-slate-200 "
              >
                <img
                  src="https://kidsacademytxaledo.com/wp-content/uploads/bb-plugin/cache/Front-of-Office-Bldng-5-1-20-scaled-landscape-d718edff32127214f640053b4532e9da-.jpg"
                  className="w-72"
                  alt="error"
                />
                <p className="text-lg font-bold">{el.title}</p>
                <p className="text-left">{el.body}</p>
              </div>
            ))}
        </div>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= apiData.length}
          className="absolute right-4 bg-amber-400 text-white p-2 rounded-full ml-2 hover:bg-slate-400"
        >
          {" "}
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
