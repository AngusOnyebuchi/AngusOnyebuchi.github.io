import React from 'react'
import WomanImg from "../Images/Woman.jpg"

export default function Passes() {
  return (
    <div style={{backgroundImage: `url(${WomanImg})`}} className="w-full h-screen">
      <div className='text-center text-white py-24'>
        <h1 className='capitalize'>View passes we've made <br/> available for you</h1>
        <button>View Passes</button>
      </div>
    </div>
  )
}
