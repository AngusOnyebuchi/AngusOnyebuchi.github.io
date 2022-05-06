import React from "react";
import {FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaGithub} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

export default function Contact() {
    return(
        <div className="bg-[#0a192f] w-full text-gray-200">

            <div className="flex justify-center gap-4">
                <FaFacebook size={30}/>
                <FaTwitter size={30}/>
                <FaWhatsapp size={30}/>
                <FaLinkedin size={30}/>
                <FaGithub size={30}/>
                <HiMail size={30}/>
            </div>
            <p className="text-center mt-4">An Angus Development 2022</p>
        </div>
    )
}