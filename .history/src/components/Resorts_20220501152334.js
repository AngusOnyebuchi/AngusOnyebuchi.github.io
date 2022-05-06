import React from 'react'
import MoveImg from "../Images/Move.jpg"
import SnowImg from "../Images/Snow.jpg"
import WomanImg from "../Images/Woman.jpg"

export default function Resorts() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3  h-screen'>
        <div style={{backgroundImage: `url(${MoveImg})`}} className="h-screen"></div>
        <img src={WomanImg} alt='Woman'/>
        <img src={SnowImg} alt='Snow'/>
      </div>
    </div>
  )
}
