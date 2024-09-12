'use client'

import Link from "next/link"
import { useState } from "react";
/* icons */
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
/* animation librarys  */
import { motion } from "framer-motion";


const Navbar = () => {
    /* states */
    const [activeMenu, setActiveMenu]=useState(false)
    /* nav links */
    const navLinks =[
        {title: 'About', path:'#About'},
        {title: 'Portafolios', path:'#Portafolios'},
    ]
    /* menu toogle */
    const toggleMenu = ()=>{
        setActiveMenu(!activeMenu)
    }
    /* Menu animation */
    const menuVariants = {
        open:{
            x:0,
            transition:{
                duration:0.5
            }
        },
        close:{
            x:'-200%',
            transition:{
                duration:0.5
            }
        }
        
    }
  return (
    <>
    <div className="w-full">
        <div className="flex items-center justify-center py-4">
            {/* mobile */}
            <motion.ul 
                initial={false}
                animate={activeMenu ? 'close':'open'}
                variants={menuVariants}
                className="flex items-center justify-center md:hidden">
                {navLinks.map((link, id)=>(
                    <li key={id} className="mx-2 text-white">
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </motion.ul>
            {/* desctok */}
            <ul className="hidden md:flex items-center justify-center">
                {navLinks.map((link, id)=>(
                    <li key={id} className="mx-2 text-white">
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        <div className="absolute top-0 right-0 m-4 cursor-pointer md:hidden" onClick={()=>toggleMenu()}>
            {activeMenu ? <FaBars size={30} color="white"/> :   <IoClose size={30} color="white"/>}
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar