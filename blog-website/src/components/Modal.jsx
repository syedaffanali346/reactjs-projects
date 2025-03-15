import React from "react";
import { FaX } from "react-icons/fa6";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-gray-900 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          <div className="flex justify-end cursor-pointer">
            <a onClick={onClose}>
              <FaX className="hover:text-orange-500"/>
            </a>
          </div>
          <h2 className="text-xl font-semibold mt-10 mb-5 uppercase">
            Please Login Here
          </h2>
          <form className="px-4">
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
