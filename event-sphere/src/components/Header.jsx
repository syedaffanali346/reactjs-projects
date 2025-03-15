import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Home from './Home';
import image from "../assets/event.jpg";

const Header = () => {
  return (
    <>
    <div className='min-h-screen bg-cover bg-center flex item-center w-full overflow-hidden ' 
    id='Header'
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >

<div className="absolute inset-0 bg-black/50"></div>
      <Navbar/>
      <motion.div 
      
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}

      className='container text-center mx-auto py-32 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'><span >Empowering Events</span>, Inspiring Moments</h2>
        <div className='space-x-6 mt-16'>
            <Link to="/find-events" className="border border-white px-8 py-3 rounded">Find Events</Link>
            <Link to="/contact" className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600'>Contact</Link>
        </div>
      </motion.div>
    </div>
    <Home/>
    </>
  )
}

export default Header
