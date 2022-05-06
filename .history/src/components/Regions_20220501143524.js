import React from 'react'
import {FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa"

export default function Regions() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-around px-8'>
        <FaLinkedin size={50}/>
        <FaInstagram size={50}/>
        <FaFacebook size={50}/>
        <FaWhatsapp size={50}/>
        <FaTwitter size={50}/>
      </div>

      <p>lorem this is a page </p>
    </div>
  )
}
