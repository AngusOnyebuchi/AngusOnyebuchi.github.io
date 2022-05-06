import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen text-white">
            <div className='flex justify-between items-center px-16 py-8'>
            <div className='flex gap-16'>
                <div className='flex'>
                    <img alt=''/>
                    <h1 className='font-lg'>Arctic Travels</h1>
                </div>
                <ul className='flex gap-4 text-gray-100'>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Language</li>
                </ul>
            </div>
            <div>
                <button className='bg-white text-blue-800 py-2 px-8 rounded-md'>Sign In</button>
            </div>
            </div>

            <div>
                <h1>plan the perfect winter trip</h1>
                <p>Easily plan your ideal ski trip from home with the help of professionals</p>
                <button>Book Here</button>
            </div>
        </div>
  )
}

