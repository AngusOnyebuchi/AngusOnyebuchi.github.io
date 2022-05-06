import React, {useState} from "react";
import {FaTimes, FaBars} from "react-icons/fa"
import Link from "react-scroll/modules/components/Link";

export default function NavBar() {

    const [nav, setNav] = useState(true)
    const toggle = () => setNav(!nav)

    return(
        <div className="sm:fixed bg-[#0a192f] text-white w-full p-8 flex justify-between items-center border-b-2 border-pink-300">
            <div className="h-[40px] w-[120px] bg-black flex text items-center">
                <h1 className="uppercase text-lg">Angus CV</h1>
            </div>
            
            <ul className=" hidden sm:flex justify-between">
                <li className="hover:border-b-2 border-pink-300 ">
                <Link to="home" smooth={true} duration={500} >Home</Link>
                </li>
                <li className="hover:border-b-2 border-pink-300 ">
                <Link to="education" smooth={true} duration={500} >Education</Link>
                </li>
                <li className="hover:border-b-2 border-pink-300 ">
                <Link to="experience" smooth={true} duration={500} >Experience</Link>
                </li>
                <li className="hover:border-b-2 border-pink-300 ">
                <Link to="contact" smooth={true} duration={500} >Contact</Link>
                </li>
            </ul>

            {/** Mobile list */}
            <div onClick={toggle} className="sm:hidden z-10">
                {nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-full bg-inherit flex flex-col justify-center items-center my-8 sm:hidden'}>
                    <li onClick={toggle} className="py-6 text-4xl"><Link to="home" smooth={true} duration={500} >Home</Link></li>
                    <li onClick={toggle} className="py-6 text-4xl"><Link to="education" smooth={true} duration={500} >Education</Link></li>
                    <li onClick={toggle} className="py-6 text-4xl"><Link to="experience" smooth={true} duration={500} >Experience</Link></li>
                    <li onClick={toggle} className="py-6 text-4xl"><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>
        </div>
    )
}