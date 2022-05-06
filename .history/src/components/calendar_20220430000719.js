import React from 'react'

export default function Calendar(props) {
  return (
    <div className='flex'>
        <p className='my-4 text-lg font-bold'>{props.day}</p>
        <button>Remove day</button>
    </div>
  )
}
