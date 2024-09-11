'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    /* Menu state */
    const [activeMenu, setActiveMenu]= useState(false)

    /* Menu links */
    const navLinks=[
        {title:'About', path:'#About'},
        {title:'Contact', path:'#Contac'},
    ]

    /* toggle menu */
    const toggleMenu = ()=>{
        setActiveMenu(!activeMenu)
    }
    /* menu motion */
    const menuVariants = {
        open:{
            x:0,
            transition:{
                duration:0.5
            }
        },
        close:{
            x:'-100%',
            transition:{
                duration:0.5
            }
        }
    }
  return (
    <>
    <div className="w-full">
            {/* mobile */}
        <motion.div 
            initial={false}
            animate={activeMenu ? 'open':'close'}
            variants={menuVariants}
            className="flex justify-center items-center py-4 md:hidden">
            <ul className='flex items-center justify-center'>
                {navLinks.map((link, id)=>(
                    <li key={id} className='text-white mx-4'>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </motion.div>
        {/* destock */}
        <div className="hidden md:flex justify-center items-center py-4">
            <ul className='flex items-center justify-center'>
                {navLinks.map((link, id)=>(
                    <li key={id} className='text-white mx-4'>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className="text-white absolute top-0 right-0 m-4 md:hidden" onClick={()=>toggleMenu()}>
            {activeMenu ? <IoCloseOutline size={30}/>: <FaBars size={30}/>}
        </div>
    </div>
    </>
  )
}

export default Navbar