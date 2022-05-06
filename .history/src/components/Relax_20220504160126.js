import React from 'react'
import MoveImg from "../Images/Move.jpg"
import SnowImg from "../Images/Snow.jpg"
import WomanImg from "../Images/Woman.jpg"

export default function Relax() {
  return (
    <div className='w-full h-[1895px] static t-[2740px]'>

      <div className='p-16 mt-[100px]'>
        <p className='font-bold text-5xl absolute '>The best resorts to chill <br/> and relax</p>
      </div>
      <div style={{backgroundImage: url(MoveImg)}} className='ml-[700px] mt-[15px]'>
          <div className='bg-red-700 absolute w-[484px] h-[650px] rounded-md'></div>
      </div>
      <div className='ml-[150px] mt-[230px]'>
          <div className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md'></div>
      </div>
      <div className='ml-[700px] mt-[730px]'>
          <div className='bg-red-700 absolute w-[484px] h-[650px] rounded-md'></div>
      </div>
      <div className='ml-[150px] mt-[950px]'>
          <div className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md'></div>
      </div>
    </div>
  )
}
