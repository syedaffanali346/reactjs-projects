import React, { useState } from "react";
import BlogCards from "./BlogCards";
import SideBarBlog from "./SideBarBlog";
import { blogsData } from "../assets/script.js";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from blogsData
  const categories = [
    "All",
    ...new Set(blogsData.map((data) => data.category)),
  ];

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((data) => data.category === selectedCategory);

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div>
      {/* Navbar */}
      <div className="mt-10 mb-6 overflow-x-auto">
        <div className="flex gap-4 justify-start items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10 flex flex-col lg:flex-row">
        {/* Blog Cards - takes 50% width */}
        <div className="lg:w-full w-full">
          <BlogCards
            blogsData={filteredBlogs}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Sidebar - takes 30% width */}
        <div className="lg:w-1/3 w-full">
          <SideBarBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
