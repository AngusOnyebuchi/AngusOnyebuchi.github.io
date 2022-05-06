import React from "react";
import {FaTimes, Fa} from "react-icons/fa"

export default function NavBar() {
    return(
        <div className="bg-blue-900 text-white w-full p-4 flex justify-between">
            <h1>Angus CV</h1>
            
            <ul className=" hidden sm:flex justify-between">
                <li className="border-b-2 border-pink-700 ">Home</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Footer</li>
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