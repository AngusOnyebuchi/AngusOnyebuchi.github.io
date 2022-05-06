import React from 'react'
import {FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa"

export default function Regions() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-around px-8'>
        <FaLinkedin size={30}/>
        <FaInstagram size={30}/>
        <FaFacebook size={30}/>
        <FaWhatsapp size={30}/>
        <FaTwitter size={30}/>
      </div>

      <p>lorem this is a page </p>
    </div>
  )
}
