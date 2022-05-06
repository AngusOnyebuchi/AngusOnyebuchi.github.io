import React from "react";
import {FaTimes, Fa} from "react-icons/fa"

export default function NavBar() {
    return(
        <div className="bg-blue-900 text-white w-full p-8 flex justify-between border-b-4 border-shadow shadow-orange-100">
            <h1 className="uppercase">Angus CV</h1>
            
            <ul className=" hidden sm:flex justify-between">
                <li className="hover:border-b-2 border-pink-700 ">Home</li>
                <li className="hover:border-b-2 border-pink-700 ">Education</li>
                <li className="hover:border-b-2 border-pink-700 ">Experience</li>
                <li className="hover:border-b-2 border-pink-700 ">Footer</li>
            </ul>

            {/** Mobile list */}
            <ul className=" hidden">
                <li>Home</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Footer</li>
            </ul>
        </div>
    )
}