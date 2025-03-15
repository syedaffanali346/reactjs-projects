import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import {
  assets,
  eventsData,
  testimonialsData,
  destination,
} from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link component

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const visibleCount = 6;

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(destination.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destination.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destination.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="w-full h-auto container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 mb-20 overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Best
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Events
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>

      <motion.div
    
      initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}

    className="flex justify-center items-start flex-wrap gap-6">
        {eventsData.slice(0, visibleCount).map((items) => {
          return (
            <div
              key={items.id}
              className="relative group w-80 rounded-lg overflow-hidden transition-all duration-300 bg-white hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={items.image}
                  alt={items.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="text-white text-3xl"
                    title="Add to Favourite "
                  >
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                </div>
              </div>

              <Link to={`/event-details/${items.id}`}>
                <div className="p-4 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-800">
                    {items.title}
                  </h3>
                  <p className="text-gray-600">{items.location}</p>
                  <p className="text-gray-600">Exhibitor Name</p>
                  <p className="text-gray-600">{items.datetime}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </motion.div>

      <div className="flex justify-end items-center mb-8">
        <button
          className="p-2 bg-gray-200 rounded mr-2 hover:text-blue-500"
          aria-label="Previous Project"
        >
          <Link to="/more-events" className="cursor-pointer">
            See more....
          </Link>
        </button>
      </div>

      {/* Destination */}

      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center mt-20">
        Destination
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <motion.div
    
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
               
    className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </motion.div>

      {/* Project Slider Container */}
      <motion.div
    
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
               
    className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {destination.map((items) => (
            <div key={items.id} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group flex-shrink-0 sm:w-1/4">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${items.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold">{items.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}

      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center mt-20">
        Costumer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>{" "}
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>

      <motion.div
    
      initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}

    className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[320px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
