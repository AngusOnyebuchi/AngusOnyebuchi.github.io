import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaPeopleArrows} from "react-icons/fa"

export default function Contact() {
  return (
    <div className='w-full'>

      <div className='flex justify-between items-center px-16 py-16'>

        <div>
          <FaPeopleArrows size={30} className="text-blue-700"/>
          <h1>Arctic Travels</h1>
          <p>Book your trip in minutes, get full <br/> control for much longer.</p>
          <div className='flex items-center justify-between py-12'>
            <FaFacebook size={30} className="text-blue-700"/>
            <FaInstagram size={30} className="text-blue-700"/>
            <FaTwitter size={30} className="text-blue-700"/>
          </div>
        </div>

        <div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li>FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>

      </div>

      <div className='flex items-center justify-between px-16 pb-6 text-gray-600'>
          <p>2022 Angus Designs - All right reserved</p>
          <div className='flex items-center justify-between'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
      </div>

    </div>
  )
}
