import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen text-white">
            <div className='flex justify-between px-16 py-12'>
            <div className='flex'>
                <div className='flex'>
                    <img alt=''/>
                    <h3>Arctic Travels</h3>
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

