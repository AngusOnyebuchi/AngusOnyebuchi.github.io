import React from 'react'
import {FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa"

export default function Regions() {
  return (
    <div className='w-full h-screen bg-[#F8F9FC]'>

      <div className='bg-red-600 h-8 w-32 mt-[-90deg]'></div>

      <div className='flex justify-center gap-8 sm:gap-28 pt-28 pb-8'>
        <FaLinkedin size={40} className="cursor-pointer"/>
        <FaInstagram size={40} className="cursor-pointer"/>
        <FaFacebook size={40} className="cursor-pointer"/>
        <FaWhatsapp size={40} className="cursor-pointer"/>
        <FaTwitter size={40} className="cursor-pointer"/>
      </div>
      <hr/>

      <div className='text-center pt-20 pb-24'>
        <h1 className='text-4xl font-bold pb-6'>Creating the best <span className='text-blue-700'>ice-cold!</span> experience <br/> you would never forget.</h1>
        <p className='pb-20 text-xl'>Would you explore nature paradise in the world, find the <br/> best destination in the world with us.</p>
        <h1 className='text-4xl font-bold'>View Regions <span className='text-blue-700'>available</span></h1>
      </div>
    </div>
  )
}
