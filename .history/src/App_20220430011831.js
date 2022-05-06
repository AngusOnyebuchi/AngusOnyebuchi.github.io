import React, {useState} from 'react'
import Calendar from './components/Calendar'
import CalendarData from './components/CalendarData'
import Counter from './components/counter'

export default function App() {

  const [books, setBooks] = useState({name: "Angus", age: "27", gender: "male"})
  setBooks((book) => {[...book, book.gender="female"]})
  console.log(books)
  

const [Bar, setBar] = useState(CalendarData)

  const calendarElements = Bar.map((data) => {
    return(
      <Calendar  key={data.id} day={data.day} food={data.food}/>
    )
  })

  return (
    <React.Fragment>
      <section className='bg-pink-500 h-[700px] w-[500px] mx-[350px] my-[50px] text-white text-center pt-8'>
        {calendarElements}
        <button onClick={()=> setBar([])} className='p-4 bg-black '>Clear Days</button>
      </section>

      <div>
      <Counter/>
      </div>
    </React.Fragment>
  )
}
