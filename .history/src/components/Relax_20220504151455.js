import React from 'react'

export default function Relax() {
  return (
    <div className='w-full h-[1895px] static l-[0px] t-[2740px]'>
      <div className='p-16'>
        <p className='font-bold text-4xl absolute w-[570px] h-[130px] l-[120px] t-[101px]'>The best resorts to chill <br/> and relax</p>
      </div>
      <div className='grid grid-cols-5 px-16'>
        <div>
            <div className='bg-blue-700 absolute w-[484px] h-[711px] l-[320px] t-[303px]'></div>
            <div className='bg-red-700 absolute w-[484px] h-[711px] l-[836px] t-[85px]'></div>
        </div>
        <div>
            <div className='h-[60px] w-[40px] bg-blue-700'></div>
            <div className='h-[60px] w-[40px] bg-blue-200'></div>
        </div>
      </div>
    </div>
  )
}
