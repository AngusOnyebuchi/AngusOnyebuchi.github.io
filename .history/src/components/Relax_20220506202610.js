import React from 'react'
import Pic from "../Images/Pic.png"
import Pic1 from "../Images/Pic1.png"
import Pic2 from "../Images/Pic2.png"
import Pic3 from "../Images/Pic3.png"


export default function Relax() {
  return (
    <div className='w-full h-[1850px] static t-[2740px]'>

      <div className='p-24 mt-[10px]'>
        <p className='font-bold text-5xl absolute '>The best resorts to chill <br/> and relax</p>
      </div>
      <div className='ml-[700px] mt-[15px]'>
          <div style={{backgroundImage: `url(${Pic})`}} className='absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
            <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter landscape Chalet</h2>
              <p className='text-gray-50'>Cambodia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-[#3E86F5] font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[150px] mt-[230px]'>
          <div style={{backgroundImage: `url(${Pic1})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Excellence Playa Mujeres</h2>
              <p className='text-white'>Mexico</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-[#3E86F5] font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[700px] mt-[730px]'>
          <div style={{backgroundImage: `url(${Pic2})`}} className='bg-red-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Winter Whistler Blackcomb</h2>
              <p className='text-white'>Canada</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-[#3E86F5] font-bold'>Book Now</button>
            </div>
          </div>
      </div>
      <div className='ml-[150px] mt-[940px]'>
          <div style={{backgroundImage: `url(${Pic3})`}} className='bg-blue-700 absolute w-[484px] h-[650px] rounded-md bg-cover bg-center'>
          <div className='ml-6 mt-96'>
              <h2 className='text-white text-[32px] mb-2'>Nihi Sumba Island</h2>
              <p className='text-white'>Indonesia</p>
              <button className='px-[180px] py-4 text-white mt-8 rounded-md bg-[#3E86F5] font-bold'>Book Now</button>
            </div>
          </div>
      </div>
    </div>
  )
}
