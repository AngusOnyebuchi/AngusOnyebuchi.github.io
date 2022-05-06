import React from "react";

export default function NavBar() {
    return(
        <div className="bg-blue-900 text-white w-full p-4 flex justify-between">
            <h1>Angus CV</h1>
            
            <ul className=" hidden sm:flex justify-between">
                <li>Home</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Footer</li>
            </ul>
        </div>
    )
}