import React from 'react'

export default function Counter() {

    const count = 0

  return (
    <div className='text-center text-white'>
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <div className='flex gap-8'>
            <button className='bg-red-500 p-2'>decrease</button>
            <button className='bg-gray-900 p-2'>reset</button>
            <button className='bg-green-500 p-2'>increase</button>
        </div>
    </div>
  )
}
