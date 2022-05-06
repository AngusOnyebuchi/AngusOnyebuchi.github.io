import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaPeopleArrows} from "react-icons/fa"

export default function Contact() {
  return (
    <div className='w-full'>

      <div className='flex justify-between items-center px-16 py-16'>

        <div>
          <FaPeopleArrows size={20} className="text-blue-700"/>
          <h1 className='font-bold py-4 text-xl'>Arctic Travels</h1>
          <p>Book your trip in minutes, get full <br/> control for much longer.</p>
          <div className='flex items-center justify-between py-10 pr-6'>
            <FaFacebook size={25} className="text-blue-700 cursor-pointer"/>
            <FaInstagram size={25} className="text-blue-700 cursor-pointer"/>
            <FaTwitter size={25} className="text-blue-700 cursor-pointer"/>
          </div>
        </div>

        <div className='flex items-center justify-between gap-16'>
          <div>
            <h2 className='uppercase font-semibold text-blue-700 pb-6 ml-2'>Company</h2>
            <ul>
              <li className='py-2'>About</li>
              <li className='py-2'>Career</li>
              <li className='py-2'>Mobile</li>
            </ul>
          </div>

          <div>
            <h2 className='uppercase font-semibold text-blue-700 pb-6 ml-2'>Contact</h2>
            <ul>
              <li className='py-2'>FAQ</li>
              <li className='py-2'>Press</li>
              <li className='py-2'>Affiliates</li>
            </ul>
          </div>

          <div>
            <h2 className='uppercase font-semibold text-blue-700 pb-6 ml-4'>more</h2>
            <ul>
              <li className='py-2'>Airlines</li>
              <li className='py-2'>Airfees</li>
              <li className='py-2'>Lowfare Tips</li>
            </ul>
          </div>
        </div>

      </div>

      <div className='flex items-center justify-between pl-16 pr-40 pb-6 text-gray-600'>
          <p>2022 Angus Designs - All right reserved</p>
          <div className='flex items-center justify-between gap-16'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
      </div>

    </div>
  )
}
