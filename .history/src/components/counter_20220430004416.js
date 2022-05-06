import React from 'react'

export default function Counter() {

    const count = 0

  return (
    <div className='text-center text-white'>
        <h2 className='text-black text-center'>Counter App</h2>
        <h3 className='text-black text-center'>{count}</h3>
        <div className='flex gap-8 items-center ml-86'>
            <button className='bg-red-500 p-2'>decrease</button>
            <button className='bg-gray-900 p-2'>reset</button>
            <button className='bg-green-500 p-2'>increase</button>
        </div>
    </div>
  )
}
