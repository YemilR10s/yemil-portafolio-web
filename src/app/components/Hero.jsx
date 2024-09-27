'use client'

import Image from 'next/image'
import profile from '../assets/profilepic.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative overflow-clip py-24 bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      
      <div className="relative">
        <div className=" flex flex-col items-center justify-center gap-12">
          <h2 className='font-bold text-6xl text-[#98B4CE]'>Hola, soy</h2>
          <h1 className='text-6xl font-bold md:text-8xl text-[#E48A57]'>Miguel Rivas</h1>
          <p className='text-sm font-bold px-4 md:text-xl text-white/80 max-w-[500px] text-center'>
            Ayudo a marcas y negocios a destacarse en el mundo digital. Con más de 5 años de experiencia en desarrollo web y estrategias digitales, he transformado negocios con soluciones creativas y personalizadas. ¡Haz crecer tu presencia en línea conmigo!
          </p>
          <Image alt='Miguel Rivas' src={profile} />
        </div>

        {/* Iconos flotantes */}
        <motion.div className="hidden lg:block absolute lg:top-[100px] lg:right-[100px] xl:top-[100px] xl:right-[200px] animate-pulse cursor-grab" drag>
          <Image alt='' src={icon1} draggable='false'/> 
        </motion.div>
        <motion.div className="hidden lg:block absolute lg:top-[200px] lg:left-[100px] xl:top-[200px] xl:left-[200px] animate-pulse cursor-grab" drag>
          <Image alt='' src={icon2} draggable='false'/> 
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

