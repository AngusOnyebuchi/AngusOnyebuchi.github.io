import React from 'react'

export default function Calendar(props) {

    const handleClick = () => {
        return ("")
    }
  return (
    <div className='flex items-center gap-8'>
        <p className='my-4 text-lg font-bold'>{props.day}</p>
        <button onClick={handleClick} className='bg-black'>remove day</button>
    </div>
  )
}
