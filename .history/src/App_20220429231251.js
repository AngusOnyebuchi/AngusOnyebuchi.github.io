import React from 'react'
import Calendar from './components/Calendar'

export default function App() {
  return (
    <React.Fragment>
      <section className='bg-pink-500 h-[2000px] w-[1500px] mx-[100px]'>
        <Calendar/>
      </section>
    </React.Fragment>
  )
}
