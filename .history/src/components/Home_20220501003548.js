import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen">
            <div className=''>
                <div>This is the home page</div>
            </div>
        </div>
  )
}

