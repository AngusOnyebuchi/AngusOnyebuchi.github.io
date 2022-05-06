import React from 'react'

export default function Relax() {
  return (
    <div className='w-full h-[1895px] static left-[0px] top-[2740px]'>
      <div className='p-16'>
        <p className='font-bold text-4xl absolute w-[570px] h-[130px] l-[120px] t-[101px]'>The best resorts to chill <br/> and relax</p>
      </div>
      <div className='grid grid-cols-5 px-16'>
        <div>
            <div className='h-[150px] w-[100px] bg-blue-700'></div>
            <div className='h-[150px] w-[100px] bg-blue-200'></div>
        </div>
        <div>
            <div className='h-[60px] w-[40px] bg-blue-700'></div>
            <div className='h-[60px] w-[40px] bg-blue-200'></div>
        </div>
      </div>
    </div>
  )
}
