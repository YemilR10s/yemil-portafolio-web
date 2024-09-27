 import React from 'react'
import enfoque from '../assets/enfoque.png'
import monitor from '../assets/monitor.png'
import promocion from '../assets/promocion.png'
import solucionDeProblemas from '../assets/resolucion-de-problemas.png'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,#DBAF6E,#2B1942_80%,#000_90%)]">
          <h2 className='text-4xl text-white/50 font-bold mb-10 text-center'>¿Por qué trabajar conmigo?</h2>
        <div className="max-w-[1200px] grid md:grid-cols-8 gap-6 p-4">

          <div className="flex flex-col p-6 bg-white/10 rounded-xl border border-white/20 relative md:col-span-5 lg:flex-row">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient rounded-xl"></div>
            <Image alt='' src={solucionDeProblemas} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Experto en Soluciones Personalizadas</h2>
              <p className='text-sm  text-white/80 font-bold mt-4'>Cada negocio es único, y cada sitio web que creo también. Obtendrás una solución personalizada que refleja tu marca</p>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-white/10 rounded-lg border border-white/20 relative md:col-span-3 lg:flex-row ">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={enfoque} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Enfoque en Resultados</h2>
              <p className='text-sm  text-white/80 font-bold mt-4'>Mi objetivo es ayudarte a crecer, ya sea con más tráfico, o mayores conversiones.</p>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-white/10 rounded-lg border border-white/20 relative md:col-span-3 lg:flex-row">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={monitor} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Fiable y Transparente</h2>
              <p className='text-sm text-white/80 font-bold mt-4'>Comunicación clara y plazos de proyecto para asegurar que el trabajo se realice correctamente.</p>
            </div>
          </div>

          <div className="flex  flex-col p-6  bg-white/10 rounded-lg border border-white/20  relative md:col-span-5 lg:flex-row">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={promocion} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Comprometido con tu Éxito</h2>
              <p className='text-sm text-white/80 font-bold mt-4'>Estoy aquí para ayudarte en cada paso del proceso, asegurándome de que tus necesidades sean escuchadas y atendidas.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About 
