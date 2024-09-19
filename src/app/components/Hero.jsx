'use client'

import Image from 'next/image'
import profile from '../assets/profilepic.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full relative overflow-clip py-24 bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>

      <div className="absolute rounded-[50%] w-[3000px] h-[3000px] top-[700px] -translate-x-1/2 left-[50%]
                     bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative flex flex-col items-center justify-center gap-12">
        <h2 className='font-bold text-6xl text-[#98B4CE]'>Hi, I am</h2>
        <h1 className='font-bold text-8xl text-[#E48A57]'>Dev R10s</h1>
        <p className='font-bold text-xl text-white/80 max-w-[500px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit commodi quas, voluptatem sapiente velit a impedit odio, esse voluptas sit minima tempora</p>
        <Image alt='' src={profile}/>
      </div>

      <motion.div className="absolute top-[100px] right-[200px]" drag>
        <Image alt='' src={icon1} draggable='false'/> 
      </motion.div>
      <motion.div className="absolute top-[200px] left-[200px]" drag>
        <Image alt='' src={icon2} draggable='false'/> 
      </motion.div>
    </div>
  )
}

export default Hero
































/* 'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Profile from '../assets/profilepic.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'

const Hero = () => {
  return (
    <div className='relative py-24 overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
        <div className="flex flex-col justify-center items-center gap-8">
            <h2 className='text-[#98B4CE] text-6xl font-bold'>Hi, I am</h2>
            <h1 className='text-[#E48A57] text-8xl mt-6 font-bold'>Yemil Rios</h1>
            <p className='text-xl text-white/80 text-center font-bold max-w-[500px] mx-auto mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi dicta cumque atque quasi suscipit placeat quia ullam velit sint dolor dolore vel eius</p>
            <Image src={Profile} alt=''/>
        </div>
        <motion.div className="absolute top-[250px] right-[200px]"
        drag
        >
            <Image 
                alt='' 
                src={icon1} 
                className='' 
                draggable='false' 
                />
        </motion.div>
        <motion.div className="absolute top-[100px] left-[200px]"
        drag
        >
            <Image 
                alt='' 
                src={icon2} 
                className='' 
                draggable='false' 
                />
        </motion.div>
    </div>
  )
}

export default Hero */