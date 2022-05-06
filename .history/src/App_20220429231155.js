import React from 'react'
import Calendar from './components/Calendar'

export default function App() {
  return (
    <React.Fragment>
      <section className='bg-pink-500 h-[90px] w-[150px] mx-[500px]'>
        <Calendar/>
      </section>
    </React.Fragment>
  )
}
