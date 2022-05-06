import React from "react";
import About from "./components/About"
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Education/>
      <Experience/>
    </div>
  )
}