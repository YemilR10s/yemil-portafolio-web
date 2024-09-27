import React from 'react'
import { FaBullhorn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";

const Services = () => {
    const services = [
       { title: "Estrategias de Marketing Digital", icon: <AiOutlinePieChart size={30}/>, description: "Diseñamos estrategias para maximizar el alcance y las conversiones de tu negocio a través de canales digitales." },
       { title: "Publicidad en Redes Sociales", icon: <FaBullhorn size={30}/>, description: "Creación de campañas efectivas en Facebook Ads, Instagram Ads, y otras plataformas para aumentar tu visibilidad." },
       { title: "SEO (Optimización en Motores de Búsqueda)", icon: <FiSearch size={30}/>, description: "Mejoramos tu posición en los resultados de búsqueda para atraer tráfico orgánico de calidad a tu sitio web." },
       { title: "Creación de Contenido", icon: <BiPalette size={30}/>, description: "Desarrollamos contenido visual y textual que conecta con tu audiencia y refuerza la identidad de tu marca." },
       { title: "Branding y Diseño de Identidad", icon: <BiPalette size={30}/>, description: "Creamos identidades visuales únicas que comunican los valores y la esencia de tu marca." }
    ]
  
    return (
        <div className='py-20 bg-gradient-to-b from-[#381a5f] to-black '>
            <h1 className='text-white text-center text-3xl font-bold mb-8'>Servicios que <span className='text-orange-500'>Ofrezco</span></h1>
            <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-8">
                {services.map((service, index) => (
                    <div className="bg-white/20 hover:bg-white/40 p-6 flex flex-col items-center justify-center rounded-md  w-[200px]" key={index}>
                        <div className="text-6xl text-white/80">{service.icon}</div>
                        <h3 className='text-white text-center'>{service.title}</h3>
                        <p className='text-white/70 text-center'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
