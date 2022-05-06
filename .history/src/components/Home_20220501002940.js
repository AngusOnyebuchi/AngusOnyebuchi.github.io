import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}}>
            <img className='relative' src="" alt="Home"/>
            <div className='absolute top-0 '>
                <div>This is the home page</div>
            </div>
        </div>
  )
}

