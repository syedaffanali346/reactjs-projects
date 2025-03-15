import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from '../assets/assets'

const EventDetails = () => {
  const { id } = useParams(); // Extract blog ID from the URL
  const event = eventsData.find((b) => b.id === Number(id)); // Find the blog by ID
  return (
    <div className="container mx-auto p-4 my-20">
      {/* Large Header Image */}
      <div className="w-full h-96 pt-10">
        <img
          src={event.image}
          alt={event.alt  }
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 p-5">{event.title}</h1>
      </div>
      {/* Two Columns Below the Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">

        {/* Event Details Section */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Details</h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Description</h2>
          <p className="text-gray-700 mb-2">{event.description}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Date and Time</h2>
          <p className="text-gray-700 mb-2">{event.datetime}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Floor Plans</h2>
          <p className="text-gray-700 mb-2">{event.floorplans}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Organized By</h2>
          {/* Organizer Section */}
          <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            {/* Organizer Image */}
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Organizer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Organizer Details */}
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800">Organizer Name</h3>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Register for the Event</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
