import React from 'react'
import HomeImg from '../Images/Home.jpg'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen bg-cover bg-center text-white py-24 bg-linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%)">
            <div className='px-8 md:px-16 py-20'>
                <h1 className='capitalize font-bold text-5xl'>plan the perfect winter trip</h1>
                <p className='text-lg py-4 text-white'>Easily plan your ideal ski trip from home with the <br/> help of professionals</p>
                <button className='bg-blue-700 rounded-md py-3 px-8 mt-8'>Book Here</button>
            </div>
        </div>
  )
}

