import React from "react";

export default function Home() {
    return (
        <div className="w-full h-screen p-4 bg-blue-900 text-gray-200">
            <h1 className="text-4xl md:text-6xl font-bold uppercase pt-24 text-center">Maduabuchi Angus Modum</h1>
            <h3 className="text-4xl md:text-6xl font-bold uppercase text-center">I am a Frontend Developer</h3>
            <p className="font-bold text-center justify-center text-xl md:text-2xl max-w-[1000px] mx-12 mt-4">I strive to be the best, obtain hands-on-deck skills, 
                to work tirelessly towards the growth, development and success of the organization and to make sure my impact 
                as a professional is felt positively in the day to day activities of the organization.</p>

            <div className="grid grid-cols-3 gap-2 text-2xl text-center">
                <h4 className="mx-0">Lagos, Nigeria</h4>
                <h4 className="mx-0">+2349037872259</h4>
                <h4  className="mx-0">Angusonyebuchi800@gmail.com</h4>
            </div>        
        </div>
    )
} 