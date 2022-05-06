import React from 'react'
import HomeImg from '../Images/Home.png'
import Frame from '../Images/Frame.png'

export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen bg-cover bg-center bg-blend-darken text-white py-24">
            <div className='px-8 md:px-16 py-20'>
                <h1 className='capitalize font-bold text-5xl'>plan the perfect winter trip</h1>
                <p className='text-lg py-4 text-white'>Easily plan your ideal ski trip from home with the <br/> help of professionals</p>
                <button className='bg-[#3E86F5] rounded-md py-3 px-8 mt-8'>Book Here</button>

                <img src={Frame} alt='frame' className='mt-36'/>
                <div className='h-32 w-60 bg-red-500'></div>
            </div>
        </div>
  )
}

