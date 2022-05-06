import React from "react";

export default function Home() {
    return (
        <div className="w-full h-screen p-4 bg-blue-900 text-gray-200">
            <h1 className="text-4xl md:text-6xl font-bold uppercase pt-24 text-center text-gray-50">Maduabuchi Angus Modum</h1>
            <h3 className="text-xl md:text-3xl font-bold uppercase pt-8 text-center">Chemist | Frontend Developer | Graphics Designer</h3>
            <p className="font-bold text-center justify-center text-lg md:text-xl max-w-[1200px] mx-12 mt-4">I strive to be the best, obtain hands-on-deck skills, 
                to work tirelessly towards the growth, development and success of the organization and to make sure my impact 
                as a professional is felt positively in the day to day activities of the organization.</p>

            <div className="flex flex-cols-3 gap-8 text-2xl justify-center text-center">
                <h4 className="mx-0">Lagos, Nigeria</h4>
                <h4 className="mx-0">+2349037872259</h4>
                <h4  className="mx-0">Angusonyebuchi800@gmail.com</h4>
            </div>        
        </div>
    )
} 