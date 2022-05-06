import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen text-white">
            <div className=''>
                <div>
                    <img alt=''/>
                    <h3>Arctic Travels</h3>
                </div>
                <ul>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Language</li>
                </ul>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
  )
}

