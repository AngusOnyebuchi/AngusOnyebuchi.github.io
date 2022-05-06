import React, {useState} from 'react'
import {FaPeopleArrows, FaTimes, FaBars} from "react-icons/fa"

export default function NavBar() {

    const [nav, setNav] = useState(true)

  return (
        <div className='fixed flex items-center mr-8 px-16 py-8 text-white'>
                <div className='flex items-center mr-12'>
                    <FaPeopleArrows size={40} className="pr-4"/>
                    <h1 className='font-bold text-xl'>Arctic Travels</h1>
                </div>
                {/** Menu Bar */}
                <div className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-4 text-gray-100'>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Language</li>
                    </ul>
                    <div className='ml-[400px]'>
                        <button className='bg-white text-blue-800 py-2 px-8 rounded-md'>Sign In</button>
                    </div>
                </div>

                {/** Menu Bar Icon */}
                `nav ? <FaBars/> : <FaTimes/>`


                {/** Menu Bar for mobile users */}
                <div className='hidden'>
                    <ul className='flex items-center gap-4 text-gray-100'>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Language</li>
                    </ul>
                    <div className='ml-[400px]'>
                        <button className='bg-white text-blue-800 py-2 px-8 rounded-md'>Sign In</button>
                    </div>
                </div>
        </div>
  )
}