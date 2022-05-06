import React from 'react'
import MoveImg from "../Images/Move.png"
import SnowImg from "../Images/Snow.png"
import FujiImg from "../Images/Fuji.png"

export default function Resorts() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3  h-screen text-white'>
        <div style={{backgroundImage: `url(${MoveImg})`}} className="h-screen bg-cover bg-left ">
          <p className='text-5xl font-sans font-semibold rotate-[-90deg] mt-80 ml-36 '>Mountain Resort</p>
        </div>
        <div style={{backgroundImage: `url(${FujiImg})`}} className="h-screen bg-cover bg-center ">
        <p className='text-4xl font-sans font-semibold rotate-[-90deg] mt-80 ml-44'>Fuji Mountain</p>
        </div>
        <div style={{backgroundImage: `url(${SnowImg})`}} className="h-screen bg-cover bg-center ">
            <p className='text-4xl font-sans font-semibold rotate-[-90deg] mt-80 ml-16'>Freezing WinterLake</p>
        </div>
      </div>
    </div>
  )
}
