import React from "react";
import {FaWhatsapp, FaHeart, FaLinkedin, FaTwitter, FaFacebook, FaGithub} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

export default function Contact() {
    return(
        <div name="contact" className="bg-[#0a192f] p-12 w-full text-gray-200">

            <h3 className="uppercase text-center text-xl mb-8 mt-0">Contact us</h3>
            <div className="flex justify-center gap-8 sm:gap-16">
                <FaFacebook size={30} className="cursor-pointer"/>
                <FaTwitter size={30} className="cursor-pointer"/>
                <FaWhatsapp size={30} className="cursor-pointer"/>
                <FaLinkedin size={30} className="cursor-pointer"/>
                <FaGithub size={30} className="cursor-pointer"/>
                <HiMail size={30} className="cursor-pointer"/>
            </div>
            <p className="text-center mt-8">Designed with <FaHeart size={20}/> Angus Development 2022</p>
        </div>
    )
}