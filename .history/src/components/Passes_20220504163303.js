import React from 'react'
import WomanImg from "../Images/Woman.jpg"

export default function Passes() {
  return (
    <div style={{backgroundImage: `url(${WomanImg})`}} className="w-full h-[550px]">
      <div className='pl-16 text-white py-40'>
        <h1 className='capitalize text-5xl font-bold pb-4'>View passes we've made </h1> 
        <h1 className='capitalize text-5xl font-bold pb-12'>available for you</h1>
        <button className='bg-blue-700 py-3 px-10 rounded-md'>View Passes</button>
      </div>
    </div>
  )
}
