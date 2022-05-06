import React from 'react'
import Nike from "../Images/Nike.png"
import Apple from "../Images/Apple.png"
import Vector from "../Images/Vector.png"
import Vector1 from "../Images/Vector1.png"
import Mastercard from "../Images/Mastercard.png"
import Arrow1 from "../Images/Arrow1.png"
import { FaArrowDown } from "react-icons/fa"

export default function Regions() {
  return (
    <div className='w-full h-screen bg-[#F8F9FC]'>

      <div className='flex justify-center gap-8 sm:gap-28 pt-28 pb-8'>
        <img src={Nike} alt='nike'/>
        <img src={Apple} alt='apple'/>
        <img src={Vector} alt='vector'/>
        <img src={Vector1} alt='vector1'/>
        <img src={Mastercard} alt='mastercard'/>
      </div>
      <hr/>

      <div style={{backgroundImage: `url(${Arrow1})`}} className='text-center bg-no-repeat bg-center pt-20 pb-20'>
        <h1 className='text-4xl font-bold pb-6'>Creating the best <span className='text-[#3E86F5]'>ice-cold!</span> experience <br/> you would never forget.</h1>
        <p className='pb-12 text-xl'>Would you explore nature paradise in the world, find the <br/> best destination in the world with us.</p>
        <h1 className='text-4xl font-bold'>View Regions <span className=''>available</span></h1>
        <img src={Arrow1} alt='Arrow1' className='ml-[670px] t-[400px]'/>
      </div>
    </div>
  )
}
