import React from "react";
import {FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaGithub} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

export default function Contact() {
    return(
        <div className="bg-[#0a192f] w-full h-screen text-gray-200">

            <div className="flex justify-center gap-4">
                <FaFacebook/>
                <FaTwitter/>
                <FaWhatsapp/>
                <FaLinkedin/>
                <FaGithub/>
                <HiMail/>
            </div>
            <p className="text-center">An Angus Development 2022</p>
        </div>
    )
}