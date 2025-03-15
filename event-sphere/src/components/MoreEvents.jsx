import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { eventsData } from '../assets/assets'

const MoreEvents = () => {
    return (
        <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>All <span className='underline underline-offset-4 decoration-1 under font-light'>Events</span> </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those Who Found Home With Us</p>

            {/* Cards Container */}
            <div className="flex justify-center items-start flex-wrap gap-6">

{
    eventsData.map((items)=>{
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

        </div>
    )
}

export default MoreEvents
