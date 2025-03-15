import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="bg-black text-white fixed top-0 right-0 left-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          Blog<span className="text-orange-500">BL</span>
        </a>
        <ul className="lg:flex gap-12 text-lg hidden">
        </ul>
        <div className="lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
          >
            Login
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />

        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaX className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`lg:hidden gap-12 text-center text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all duration-150 ease-out"
              : "hidden"
          }`}
        >
          <div className="lg:flex gap-4 items-center flex flex-row justify-center text-2xl my-5">
            <a href="/" className="hover:text-orange-500 text-black">
              <FaFacebook/>
            </a>
            <a href="/" className="hover:text-orange-500 text-black">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-orange-500 text-black">
              <FaTwitter />
            </a>
          </div>
          <button className="px-4 py-2 rounded whitespace-nowrap bg-gray-200 text-gray-800 hover:bg-orange-500 hover:text-white">
            login
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
