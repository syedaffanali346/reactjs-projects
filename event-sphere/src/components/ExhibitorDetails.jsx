import React from "react";
import { useParams } from "react-router-dom";
import { exhibitorsData } from '../assets/assets'

const ExhibitorDetails = () => {
    const { id } = useParams(); // Extract blog ID from the URL
  const exhibitor = exhibitorsData.find((e) => e.id === Number(id)); // Find the blog by ID
    return (
        <div className="relative">
            {/* Large Blurred Background */}
            <div
                className="h-80 bg-cover bg-center filter blur-md"
                style={{
                    backgroundImage: `url(${exhibitor.image})`,
                }}
            ></div>

            {/* White Card with Circular Image */}
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                {/* Circular Image */}
                <div className="flex justify-center mt-16">
                    <img
                        src={exhibitor.image}
                        alt="Exhibitor"
                        className="w-60 h-60 rounded-full border-4 border-white"
                    />
                </div>

                {/* Exhibitor Details */}
                <div className="text-center mt-4 mb-16">
                    <h1 className="text-2xl font-bold text-gray-800">{exhibitor.name}</h1>
                    <p className="text-gray-500 text-sm">{exhibitor.email}</p>
                </div>
            </div>

            {/* Description Below the Background */}
            <div className="mt-96 mb-20 px-6 md:px-16 lg:px-32">
                <h2 className="text-xl font-bold text-gray-800 my-4 text-center">About the Exhibitor</h2>
                <p className="text-gray-700 leading-7 text-center">
                    {exhibitor.about}
                </p>
            </div>
        </div>
    );
};

export default ExhibitorDetails;
