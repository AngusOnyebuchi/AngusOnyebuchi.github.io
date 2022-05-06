import React from 'react'

export default function Calendar(props) {
  return (
    <div className='flex items-center gap-8'>
        <p className='my-4 text-lg font-bold'>{props.day}</p>
        <button className='bg-black'>Remove day</button>
    </div>
  )
}
