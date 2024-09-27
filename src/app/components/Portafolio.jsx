'use client'
import { motion } from 'framer-motion'
import React from 'react'

const testimonials = [
  {
    "name": "Juan Pérez",
    "feedback": "Trabajar con Miguel fue increíble, su profesionalismo y habilidades nos ayudaron a impulsar nuestro negocio online.",
    "video": "https://example.com/video1.mp4" // Enlace al video testimonial
  },
  {
    "name": "María González",
    "feedback": "La experiencia de colaborar con Miguel superó nuestras expectativas. Nuestra página web es rápida, atractiva y muy funcional.",
    "video": "https://example.com/video2.mp4" // Enlace al video testimonial
  },
  {
    "name": "Carlos Martínez",
    "feedback": "Gracias a su conocimiento en desarrollo web, nuestro sitio ahora tiene mejor posicionamiento y una tasa de conversión superior.",
    "video": "https://example.com/video3.mp4" // Enlace al video testimonial
  },
  {
    "name": "Ana López",
    "feedback": "Recomiendo sus servicios al 100%. La dedicación y el soporte ofrecidos por Miguel hicieron toda la diferencia en nuestro proyecto.",
    "video": "https://example.com/video4.mp4" // Enlace al video testimonial
  }
]

const TestimoniosComponent = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#381a5f] py-16 px-4">
      <div className="text-white space-y-24 flex flex-col items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse gap-12" : "lg:flex-row"} items-center`}
            key={index}
          >
            <div className="flex flex-col gap-4 px-8 max-w-md lg:max-w-lg">
              <h2 className='text-6xl text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl text-white/90'>{testimonial.name}</h2>
              <p className='text-white/70'>{testimonial.feedback}</p>
            </div>
            <div className="flex items-center justify-center mt-8 max-w-full w-full lg:w-auto">
              <video className='w-full max-w-[300px] md:max-w-[800px] object-cover border border-white/20' controls>
                <source src={testimonial.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TestimoniosComponent


























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