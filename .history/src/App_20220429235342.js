import React, {useState} from 'react'
import Calendar from './components/Calendar'
import CalendarData from './components/CalendarData'

export default function App() {

const [Bar, setBar] = useState(CalendarData)

  const calendarElements = Bar.map((data) => {
    return(
      <Calendar  key={data.id} day={data.day}/>
    )
  })

  return (
    <React.Fragment>
      <section className='bg-pink-500 h-[500px] w-[500px] mx-[350px] my-[50px] text-white text-center pt-8'>
        {calendarElements}
      </section>
    </React.Fragment>
  )
}
