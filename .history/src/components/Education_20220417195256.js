import React from "react";

export default function Education() {
    return(
        <div className="bg-blue-900 w-full h-screen text-gray-200">
            <h1 className="text-4xl md:text-6xl font-bold uppercase pt-24 text-center text-gray-200 inline border-b-2 ml-60">Education</h1>
            <div className="grid grid-cols-2 gap-12 mx-16 pt-8 ">
                <h3 className="capitalize text-xl md:text-4xl text-right">Federal university of technology owerri, Imo state</h3>
                <h4 className="text-lg md:text-3xl ">2015 – 2021</h4>
            </div>
            <div className="grid grid-cols-2 gap-12 mx-16 pt-4">
                <h3 className="capitalize text-xl md:text-4xl text-right">Bachelor of Science (BSc.) in Chemistry</h3>
                <h4 className="text-lg md:text-3xl ">First Class (Honours)</h4>
            </div>
        </div>
    )
}