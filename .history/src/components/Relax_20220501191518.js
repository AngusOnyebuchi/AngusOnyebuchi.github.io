import React from 'react'

export default function Relax() {
  return (
    <div className='w-full h-screen'>
      <div className='p-16'>
        <p className='font-bold text-4xl'>The best resorts to chill <br/> and relax</p>
      </div>
      <div className='grid grid-cols-3'>
        <div className=''>
            <div className='h-[600px] w-[400px] bg-red-500'></div>
            <div className='h-[600px] w-[400px] bg-green-500'></div>
        </div>
        <div className=''>
            <div className='h-[60px] w-[40px] bg-red-500'></div>
            <div className='h-[60px] w-[40px] bg-green-500'></div>
        </div>
      </div>
    </div>
  )
}
