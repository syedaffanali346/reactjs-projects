import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../assets/script.js";
import { FaClock, FaUser } from "react-icons/fa6";
import SideBarBlog from "../components/SideBarBlog";

const SingleBlog = () => {
  const { id } = useParams(); // Extract blog ID from the URL
  const blog = blogsData.find((b) => b.id === Number(id)); // Find the blog by ID
  const {image, title, author, published_date, reading_time, content} = blog

  return (
    <div className="mt-32">
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
            <div>
                <img src={image} alt="" className="w-full mx-auto rounded "/>
            </div>
            <h2 className="text-3xl font-bold my-4 text-blue-500 cursor-pointer">{title}</h2>
            <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2"/> {author} | {published_date} </p>
            <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2"/> {reading_time} </p>
            <p className="text-base text-gray-500 mb-6"> {content} </p>
            <div className="text-base text-gray-500">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p> <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus ex quisquam repellat quos ea esse fuga dolor officia pariatur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p> <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus ex quisquam repellat quos ea esse fuga dolor officia pariatur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p> <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus ex quisquam repellat quos ea esse fuga dolor officia pariatur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae?</p> <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam asperiores quisquam omnis optio ex quis molestias beatae error tempora deleniti, quasi dolor molestiae consequuntur cum architecto. Minus eligendi eius recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus ex quisquam repellat quos ea esse fuga dolor officia pariatur.</p>
                
            </div>
        </div>
        <div className="lg:w-1/2">
            <SideBarBlog/>
        </div>
      </div>
    </div> 
  );
};

export default SingleBlog;
