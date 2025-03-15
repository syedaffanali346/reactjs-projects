import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { assets, eventsData, exhibitorsData } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link component

const FindEvents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const visibleCount = 6;

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(exhibitorsData.length);
            } else {
                setCardsToShow(1)
            }
        }
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % exhibitorsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? exhibitorsData.length - 1 : prevIndex - 1);
    }
    return (


        <motion.div
    
        initial={{opacity:0, x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                <span className="underline underline-offset-4 decoration-1 font-light">Events</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Cards Container */}
            <div className="flex justify-center items-start flex-wrap gap-6">

                {
                    eventsData.slice(0, visibleCount).map((items)=>{
                        return <div key={items.id} className="relative group w-80 rounded-lg overflow-hidden transition-all duration-300 bg-white hover:shadow-xl">
                        <div className="relative">
                            <img
                                src={items.image}
                                alt={items.alt}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="text-white text-3xl" title="Add to Favourite ">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                            </div>
                        </div>
    
                        <Link to={`/event-details/${items.id}`}>
                            <div className="p-4 cursor-pointer">
                                <h3 className="text-lg font-bold text-gray-800">{items.title}</h3>
                                <p className="text-gray-600">{items.location}</p>
                                <p className="text-gray-600">Exhibitor Name</p>
                                <p className="text-gray-600">{items.datetime}</p>
                            </div>
                        </Link>
                    </div>
                    })
                }

            </div>

            <div className='flex justify-end items-center mb-8'>
                <button className='p-2 bg-gray-200 rounded mr-2 hover:text-blue-500' aria-label='Previous Project'>
                    <Link to="/more-events" className='cursor-pointer'>See more....</Link>
                </button>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center mt-32">
                Exhibitor <span className="underline underline-offset-4 decoration-1 font-light">List</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Slider Buttons */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {exhibitorsData.map((items) => (
                        <div key={items.id} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={items.image} alt={items.name} className='w-full h-60 object-fit mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-5/6 px-2 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>

                                        <Link to={`/exhibitor-details/${items.id}`} className='cursor-pointer hover:text-blue-600'>{items.name}</Link>
                                        
                                    </h2>
                                    <p className='text-gray-500 text-sm'>{items.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            </motion.div>
    )
}

export default FindEvents
