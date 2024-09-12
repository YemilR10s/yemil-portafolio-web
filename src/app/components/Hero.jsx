'use client'
import Image from 'next/image'
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import perfil from '../assets/profilepic.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#333333] to-[#dd1818] h-[100VH] w-full relative overflow-clip">

        <div className="absolute w-[3000px] h-[1300px] rounded-[50%] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%]
                        -translate-x-1/2"></div>

        <div className="py-12 relative">
          <h2 className='text-center text-6xl text-[#F5F5F5] font-bold'>Hi I am</h2>
          <h1 className='text-center text-8xl text-[#ECFFE6] font-bold pt-4'>Yemil Rios</h1>

          <motion.div className="absolute top-20 left-[240px]" drag>
          <Image 
          alt=''
          src={icon1}
          draggable={false}
          className='cursor-pointer'
          />
          </motion.div>

          <motion.div className="absolute top-20 right-[140px]" drag>
          <Image 
          alt=''
          src={icon2}
          draggable={false}
          className='cursor-pointer'
          />
          </motion.div>

          <p className='max-w-[500px] text-center m-auto pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam omnis. Sequi repellendus corrupti veniam tenetur aspernatur expedita.</p>
          <Image 
          alt=''
          src={perfil}
          className='m-auto'/>
        </div>
      </div>
    </>
  )
}

export default Hero