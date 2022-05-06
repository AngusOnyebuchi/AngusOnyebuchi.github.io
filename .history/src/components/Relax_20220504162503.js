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
      <div className='ml-[700px] mt-[15px]'>
          <div style={{backgroundImage: `url(${MoveImg})`}} className='absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
            <div>
              <h2 className='text-white text-[32px] mb-4'>Winter landscape Chalet</h2>
              <p>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-blue-600 font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[150px] mt-[230px]'>
          <div style={{backgroundImage: `url(${SnowImg})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'></div>
      </div>
      <div className='ml-[700px] mt-[730px]'>
          <div style={{backgroundImage: `url(${SnowImg})`}} className='bg-red-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'></div>
      </div>
      <div className='ml-[150px] mt-[950px]'>
          <div style={{backgroundImage: `url(${WomanImg})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'></div>
      </div>
    </div>
  )
}
