import React from 'react'
import HomeImg from '../Images/Home.jpg'
import {FaPeopleArrows} from "react-icons/fa"

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen bg-cover bg-center text-white">
            <div className='flex items-center mr-8 px-16 py-8'>
                <div className='flex items-center'>
                    <FaPeopleArrows size={40} className="pr-4"/>
                    <h1 className='font-bold text-xl'>Arctic Travels</h1>
                </div>
                <div className='flex items-center '>
                    <div className='flex'>
                        <ul className='hidden sm:flex items-center gap-4 text-gray-100'>
                            <li>About Us</li>
                            <li>Support</li>
                            <li>Language</li>
                        </ul>
                    </div>
                    <div className='ml-[470px]'>
                        <button className='bg-white text-blue-800 py-2 px-8 rounded-md'>Sign In</button>
                    </div>
                </div>
            </div>

            <div className='px-16 py-20'>
                <h1 className='capitalize font-bold text-5xl'>plan the perfect winter trip</h1>
                <p className='text-lg py-4 text-white'>Easily plan your ideal ski trip from home with the help <br/> of professionals</p>
                <button className='bg-blue-600 rounded-md py-3 px-8 mt-8'>Book Here</button>
            </div>
        </div>
  )
}

