import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen">
            <div className=''>
                <div>
                    <img/>
                    <h3>Arctic Travels</h3>
                </div>
                <div>
                    <p>About Us</p>
                    <p>Support</p>
                    <p>Language</p>
                </div>
            </div>
        </div>
  )
}

