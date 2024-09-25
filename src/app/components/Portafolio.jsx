'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import proj1 from "../assets/proj1.jpg"
import proj2 from "../assets/proj2.jpg"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.jpg"
import project from "../assets/project.jpg"

const projects = [
        {
          "Title": "E-commerce Website",
          "Description": "A fully customized e-commerce platform with product listings, shopping cart functionality, and secure checkout. The site is responsive and includes animations for a smooth user experience.",
          "DevStack": "Next.js, Tailwind CSS, Firebase, TypeScript",
          "Link": "https://myecommerceplatform.com",
          "Git": "https://github.com/YemilR10s/ecommerce-website",
          "src": proj1
        },
        {
          "Title": "Portfolio Website",
          "Description": "A personal portfolio to showcase web development projects and skills, featuring animations, internationalization, and responsive design.",
          "DevStack": "React, Framer Motion, i18next, Netlify",
          "Link": "https://joseportfolioweb.netlify.app/",
          "Git": "https://github.com/YemilR10s/portfoli-jose",
          "src": proj2
        },
        {
          "Title": "Notary Public Website",
          "Description": "A landing page for a Notary Public business, featuring a FAQ section, contact form, and WhatsApp integration.",
          "DevStack": "React, Tailwind CSS, Netlify",
          "Link": "https://notarypublicincutlerbay.com/",
          "Git": "https://github.com/YemilR10s/notary-website",
          "src": proj3
        },
        {
          "Title": "Interactive Navigation",
          "Description": "An interactive navigation bar for a web application that filters and displays categories of products using dynamic animations.",
          "DevStack": "Next.js, Framer Motion, Tailwind CSS",
          "Link": "https://mynavigationexample.com",
          "Git": "https://github.com/YemilR10s/interactive-navigation",
          "src": proj4
        },
        {
          "Title": "Landing Page for Business Partnerships",
          "Description": "A landing page designed to attract business partners, with a focus on the user experience, social media integration, and lead generation.",
          "DevStack": "React, Tailwind CSS, Netlify",
          "Link": "https://businesspartnership.com",
          "Git": "https://github.com/YemilR10s/landing-partnership",
          "src": project
        }
]

const PortafolioComponent = () => {
  return (
        <div className="bg-gradient-to-b from-black to-[#381a5f] py-16 px-4">
            <div className="text-white space-y-24 flex flex-col items-center justify-center">
                {projects.map((project, index)=>(
                    <motion.div 
                    initial={{opacity:0, y:75}}
                    whileInView={{opacity:1 ,y:0}}
                    transition={{duration: 0.5, delay: 0.25}}
                    viewport={{once: true}}
                    className={`flex flex-col ${index % 2===1 ? "lg:flex-row-reverse gap-12":"lg:flex-row"}`} 
                    key={index}>
                        <div className="flex flex-col gap-4 px-8">
                            <h2 className='text-8xl text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl text-white/90'>{project.Title}</h2>
                            <p className='max-w-[500px] text-white/70'>{project.Description}</p>
                            <p className='text-orange-500'>{project.DevStack}</p>
                            <div className="w-64 h-[1px] bg-white">
                                <a href={project.Link}>Link</a>
                                <a href={project.Git}>Git</a>
                            </div>

                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <Image alt={project.Title} src={project.src} className='max-w-[300px] md:max-w-[600px] object-cover border border-white/20'/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default PortafolioComponent

























{/* <div className="bg-gradient-to-b from-black to-[#381a5f] py-16 pt-40">
<div className="max-w-[1000px] m-auto space-y-24 text-white">
    {projects.map((project, index)=>(
        <motion.div 
        className={`flex ${index % 2===1 ? "flex flex-col-reverse md:flex-row-reverse gap-12":"flex-col md:flex-row"}`} 
        initial={{opacity:0, y:75}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5, delay: 0.25}}
        viewport={{once: true}}
        key={index}
        >
        <div className="space-y-2 max-w-[500px]">
            <h2 className='text-7xl text-white/70'>{`0${index + 1}`}</h2>
            <h2 className='text-4xl'>{project.Title}</h2>
            <p className='text-lg text-white/70 break-words p-4'>{project.Description}</p>
            <p className='text-orange-500 text-xl font-semibold'>{project.DevStack}</p>
            <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.Link} className='mt-4'>Link</a>
                <a href={project.Git}>Git</a>
            </div>
            </div>
        <div className="">
            <Image alt={project.Title} src={project.src} className='w-[600px] h-[350px] object-cover border border-white/20'/>
        </div>
        </motion.div>
    ))}
</div>
</div> */}