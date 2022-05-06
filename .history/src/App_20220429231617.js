import React from 'react'
import Calendar from './components/Calendar'

export default function App() {
  return (
    <React.Fragment>
      <section className='bg-pink-500 h-[500px] w-[500px] mx-[350px] my-[50px] text-white text-center'>
        <Calendar/>
      </section>
    </React.Fragment>
  )
}
