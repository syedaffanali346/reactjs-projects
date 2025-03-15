import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const BlogCards = ({ blogsData, currentPage, setCurrentPage }) => {
  const [search, setSearch] = useState("");
  const cardsPerPage = 12;

  console.log(search);

  // Calculate the indices for slicing the data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogsData.slice(indexOfFirstCard, indexOfLastCard);

  // For Searching
  const searchContent = currentCards.filter((curr)=>curr.title.toLowerCase().includes(search.toLocaleLowerCase()))

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogsData.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mb-6 relative">
        <input
          type="search"
          placeholder="Search here..."
          className="w-full pl-4 pr-12 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <button className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 focus:outline-none transition duration-200">
          <FaSearch/>
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {searchContent.map((data) => (
          <Link
            to={`/blogs/${data.id}`}
            key={data.id}
            className="p-5 shadow-lg rounded cursor-pointer"
          >
            <div>
              <img src={data.image} alt="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
              {data.title}
            </h3>
            <p className="mb-2 text-sm text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {data.author}
            </p>
            <p className="text-sm text-gray-500">
              Published : {data.published_date}
            </p>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 mr-4 rounded ${
            currentPage === 1 ? "bg-gray-300" : "bg-orange-500 text-white"
          }`}
        >
          Previous
        </button>
        <p className="text-sm">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ml-4 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-orange-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
