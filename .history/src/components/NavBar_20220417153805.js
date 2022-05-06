import React, {useState} from "react";
import {FaTimes, FaBars} from "react-icons/fa"

export default function NavBar() {

    const [nav, setNav] = useState(true)
    const toggle = () => setNav(!nav)

    return(
        <div className="bg-blue-900 text-white w-full p-8 flex justify-between items-center border-b-2 border-pink-300">
            <h1 className="uppercase text-lg">Angus CV</h1>
            
            <ul className=" hidden sm:flex justify-between">
                <li className="hover:border-b-2 border-pink-300 ">Home</li>
                <li className="hover:border-b-2 border-pink-300 ">Education</li>
                <li className="hover:border-b-2 border-pink-300 ">Experience</li>
                <li className="hover:border-b-2 border-pink-300 ">Footer</li>
            </ul>

            {/** Mobile list */}
            <div onClick={toggle} className="sm:hidden">
                {nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen my-8 bg-inherit flex flex-col justify-center items-center md:hidden'}>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Footer</li>
            </ul>
        </div>
    )
}