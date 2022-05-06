import React from 'react'
import MoveImg from "../Images/Move.jpg"
import SnowImg from "../Images/Snow.jpg"
import WomanImg from "../Images/Woman.jpg"

export default function Resorts() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3 h-screen'>
        <img src={MoveImg} alt='Move'/>
        <img src={SnowImg} alt='Snow'/>
        <img src={WomanImg} alt='Woman'/>
      </div>
    </div>
  )
}
