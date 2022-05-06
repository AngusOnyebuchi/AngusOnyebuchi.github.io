import React from "react";

export default function Experience() {
    return(
        <div className="bg-[#0a192f] w-full h-screen text-gray-200">
            <h1 className="text-3xl md:text-5xl font-bold uppercase pt-24 text-center text-gray-200 inline border-b-2 border-pink-300 ml-12 sm:ml-60">research experience</h1>
            <div className="grid grid-cols-3 gap-12 mx-16 pt-8 ">
                <h3 className="capitalize text-xl md:text-4xl text-right col-span-2">Advanced Ceramics Institute, University of Bremen Germany</h3>
                <h4 className="text-lg md:text-3xl ">2019 – 2020</h4>
            </div>
            <div className="grid grid-cols-3 gap-12 mx-16 pt-4">
                <h3 className="capitalize text-xl md:text-3xl text-right col-span-2">ACE FUELS FUTO, Imo state, Nigeria</h3>
                <h4 className="text-lg md:text-3xl ">2021</h4>
            </div>
        </div>
    )
}