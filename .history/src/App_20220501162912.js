import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Regions from './components/Regions'
import Resorts from './components/Resorts'
import Relax from './components/Relax'
import Passes from './components/Passes'


export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Regions/>
      <Resorts/>
      <Relax/>
      <Passes/>
    </div>
  )
}
