import React from 'react'
import {FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa"

export default function Regions() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-center gap-8 sm:gap-28 pt-28 pb-8'>
        <FaLinkedin size={40}/>
        <FaInstagram size={40}/>
        <FaFacebook size={40}/>
        <FaWhatsapp size={40}/>
        <FaTwitter size={40}/>
      </div>
      <hr/>

      <p>lorem this is a page </p>
    </div>
  )
}
