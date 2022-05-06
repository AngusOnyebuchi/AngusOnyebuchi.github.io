import React from 'react'
import MoveImg from "../Images/Move.jpg"
import SnowImg from "../Images/Snow.jpg"
import WomanImg from "../Images/Woman.jpg"

export default function Resorts() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3  h-screen text-white'>
        <div style={{backgroundImage: `url(${MoveImg})`}} className="h-screen bg-cover bg-left ">
          <p className='text-4xl font-sans font-semibold rotate-[-90deg] mt-80 ml-56'>Mountain Resort</p>
        </div>
        <div style={{backgroundImage: `url(${WomanImg})`}} className="h-screen bg-cover bg-center ">
        <p className='text-4xl font-sans font-semibold'>Fuji Mountain</p>
        </div>
        <div style={{backgroundImage: `url(${SnowImg})`}} className="h-screen bg-cover bg-center ">
        <p className='text-4xl font-sans font-semibold'>Freezing WinterLake</p>
        </div>
      </div>
    </div>
  )
}
