import React from "react";
import { blogsData } from "../assets/script.js";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBarBlog = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 text-orange-500">
          Latest Blog
        </h3>
        <div>
          {blogsData.slice(0, 5).map((data) => (
            <div
              key={data.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{data.title}</h4>
              <Link
                to={`/blogs/${data.id}`}
                className="text-base pb-2 font-medium hover:text-orange-500 inline-flex items-center py-1"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20 text-orange-500">
          Popular Blog
        </h3>
        <div>
          {blogsData.slice(6, 10).map((data) => (
            <div
              key={data.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{data.title}</h4>
              <Link
                to={`/blogs/${data.id}`}
                className="text-base pb-2 font-medium hover:text-orange-500 inline-flex items-center py-1"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarBlog;
