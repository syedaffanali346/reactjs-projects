import React from "react";
import BlogPage from "../components/BlogPage";

const Blog = () => {
  return (
    <div>
      <div className="py-40 bg-black px-4 text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          All Blogs
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
};

export default Blog;
