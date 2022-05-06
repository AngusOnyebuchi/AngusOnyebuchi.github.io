import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Regions from './components/Regions'
import Resorts from './components/Resorts'


export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Regions/>
      <Resorts/>
    </div>
  )
}
