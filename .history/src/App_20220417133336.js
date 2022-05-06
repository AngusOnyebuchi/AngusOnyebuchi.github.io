import React from "react";
import Home from "./components/Home"
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Education/>
      <Experience/>
    </div>
  )
}