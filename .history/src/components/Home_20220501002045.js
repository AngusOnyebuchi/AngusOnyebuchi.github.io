import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div>
            <img className='relative' src={HomeImg} alt="Home"/>
            <div className='absolute top-0 '>
                <div>This is the home page</div>
            </div>
        </div>
  )
}

