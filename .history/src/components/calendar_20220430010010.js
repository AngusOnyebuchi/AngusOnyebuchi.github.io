import React, {useState} from 'react'

export default function Calendar(props) {

    const remove = "remove line"
    const [rem, setRem] = useState(props)

   
  return (
    <div>
        <p className='my-4 text-lg font-bold'>{props.day}</p>
        <p className='my-4 text-lg font-bold'>{props.food}</p>
        <button onClick={()=> setRem([])}>remove line</button>
    </div>
  )
}
