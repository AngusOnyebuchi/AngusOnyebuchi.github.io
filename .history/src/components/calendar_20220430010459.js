import React from 'react'

export default function Calendar(props) {

   
  return (
    <div>
        <p className='my-4 text-lg font-bold'>{props.day}</p>
        <p className='my-4 text-lg font-bold'>{props.food}</p>
    </div>
  )
}
