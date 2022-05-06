import React from "react";
import {FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaGithub} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

export default function Contact() {
    return(
        <div className="bg-[#0a192f] w-full text-gray-200">

            <h3 className="uppercase text-center text-xl mb-8 mt-0">Contact us</h3>
            <div className="flex justify-center gap-8 sm:gap-16">
                <FaFacebook size={30} className="hover:transition-transform cursor-pointer"/>
                <FaTwitter size={30}/>
                <FaWhatsapp size={30}/>
                <FaLinkedin size={30}/>
                <FaGithub size={30}/>
                <HiMail size={30}/>
            </div>
            <p className="text-center mt-8">An Angus Development 2022</p>
        </div>
    )
}