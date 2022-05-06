import React from 'react'
import MoveImg from "../Images/Move.jpg"
import SnowImg from "../Images/Snow.jpg"
import WomanImg from "../Images/Woman.jpg"

export default function Resorts() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3  h-screen text-white'>
        <div style={{backgroundImage: `url(${MoveImg})`}} className="h-screen bg-cover bg-left ">
          <p className='text-4xl font-sans'>Mountain Resort</p>
        </div>
        <div style={{backgroundImage: `url(${WomanImg})`}} className="h-screen bg-cover bg-center ">
        <p>Fuji Mountain</p>
        </div>
        <div style={{backgroundImage: `url(${SnowImg})`}} className="h-screen bg-cover bg-center ">
        <p>Freezing WinterLate</p>
        </div>
      </div>
    </div>
  )
}
