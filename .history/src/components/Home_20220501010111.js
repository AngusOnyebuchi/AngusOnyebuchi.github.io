import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen text-white">
            <div className='flex justify-between items-center px-16 py-8'>
            <div className='flex gap-16'>
                <div className='flex'>
                    <img alt=''/>
                    <h1 className='font-bold'>Arctic Travels</h1>
                </div>
                <ul className='flex'>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Language</li>
                </ul>
            </div>
            <div>
                <button className='bg-white text-blue-800 py-2 px-8 rounded-md'>Sign In</button>
            </div>
            </div>
        </div>
  )
}

