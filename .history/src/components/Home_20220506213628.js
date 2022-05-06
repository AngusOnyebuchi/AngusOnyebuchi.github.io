import React from 'react'
import HomeImg from '../Images/Home.png'
import Map from '../Images/map.png'
import User from '../Images/user.png'
import Calendar from '../Images/calendar.png'
import Arrow from '../Images/arrow.png'
import Plane1 from '../Images/Plane1.png'


export default function Home() {
  return (
        <div style={{backgroundImage: `url(${HomeImg})`}} className="w-full h-screen bg-cover bg-center bg-blend-darken text-white py-24">
            <div className='px-8 md:px-16 py-20'>
                <h1 className='capitalize font-bold text-5xl'>plan the perfect winter trip</h1>
                <p className='text-lg py-4 text-white'>Easily plan your ideal ski trip from home with the <br/> help of professionals</p>
                <button className='bg-[#3E86F5] rounded-md py-3 px-8 mt-8'>Book Here</button>
                
                <div className='h-[140px] w-[1200px] rounded-md bg-[#FFFFFF] absolute mt-32'>
                  <div className='flex text-black'>

                    <div>
                      <div className='flex'>
                        <img src={Map} alt="map"/>
                        <p>LOCATION</p>
                      </div>
                      <div className='flex'>
                        <p>Iceland</p>
                        <img src={Arrow} alt="arrow"/>
                      </div>
                    </div>

                    <div>
                      <div className='flex'>
                        <img src={User} alt="user"/>
                        <p>PERSONS</p>
                      </div>
                      <div className='flex'>
                        <p>4 Persons</p>
                        <img src={Arrow} alt="arrow"/>
                      </div>
                    </div>

                    <div>
                      <div className='flex'>
                        <img src={Calendar} alt="calendar"/>
                        <p>CHECK IN</p>
                      </div>
                      <div className='flex'>
                        <p>12 January 2022</p>
                        <img src={Arrow} alt="arrow"/>
                      </div>
                    </div>

                    <div>
                      <div className='flex'>
                        <img src={Calendar} alt="calendar"/>
                        <p>CHECK OUT</p>
                      </div>
                      <div className='flex'>
                        <p>18 January 2022</p>
                        <img src={Arrow} alt="arrow"/>
                      </div>
                    </div>

                    <div>
                      <button>Book Trip <img src={Plane1} alt="plane1"/> </button>
                    </div>

                  </div>
                </div>
            </div>
        </div>
  )
}

