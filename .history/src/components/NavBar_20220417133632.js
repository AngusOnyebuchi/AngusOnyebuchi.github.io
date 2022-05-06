import React from "react";

export default function NavBar() {
    return(
        <div className="bg-blue-700 text-white w-full p-4 flex justify-between">
            <h1>This is the NavBar section</h1>
            
            <ul className="flex justify-between">
                <li>Home</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Footer</li>
            </ul>
        </div>
    )
}