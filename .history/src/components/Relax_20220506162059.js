import React from 'react'
import MoveImg from "../Images/Move.jpg"
import Pic1 from "../Images/Pic1.png"
import WomanImg from "../Images/Woman.jpg"


export default function Relax() {
  return (
    <div className='w-full h-[1850px] static t-[2740px]'>

      <div className='p-24 mt-[10px]'>
        <p className='font-bold text-5xl absolute '>The best resorts to chill <br/> and relax</p>
      </div>
      <div className='ml-[700px] mt-[15px]'>
          <div style={{backgroundImage: `url(${MoveImg})`}} className='absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
            <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter landscape Chalet</h2>
              <p className='text-gray-50'>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-blue-600 font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[150px] mt-[230px]'>
          <div style={{backgroundImage: `url(${Pic1})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter landscape Chalet</h2>
              <p className='text-gray-50'>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-blue-600 font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[700px] mt-[730px]'>
          <div style={{backgroundImage: `url(${SnowImg})`}} className='bg-red-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter landscape Chalet</h2>
              <p className='text-gray-50'>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-blue-600 font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[150px] mt-[940px]'>
          <div style={{backgroundImage: `url(${WomanImg})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter landscape Chalet</h2>
              <p className='text-gray-50'>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-blue-600 font-bold'>Book Now</button>
            </div>
          </div>
      </div>
    </div>
  )
}
