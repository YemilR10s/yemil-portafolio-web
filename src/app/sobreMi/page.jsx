// components/AboutUs.tsx

import Image from 'next/image';
import React from 'react';
import profilePic from '../assets/profilepic.png'; // Agrega la imagen del perfil

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#DBAF6E] to-[#2B1942] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Acerca de Mí</h2>
        </div>

        {/* Sección Perfil y Descripción */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <Image
              src={profilePic} // Reemplaza con tu imagen de perfil
              alt="Miguel Rivas"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl font-semibold">Quién Soy</h3>
            <p className="mt-4 text-lg">
              Soy <span className="font-bold">Miguel Rivas</span>, especialista en Desarrollo Web y Soluciones Digitales, con más de 5 años de experiencia en el campo. A lo largo de mi carrera, he ayudado a empresas a transformar su presencia online y a generar resultados medibles. Mi enfoque se centra en crear sitios web a medida que reflejan la identidad única de cada negocio, mientras aplico estrategias innovadoras de marketing digital para impulsar su crecimiento.
            </p>
          </div>
        </div>

        {/* Sección Experiencia */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Experiencia</h3>
          <p className="mt-4 text-lg">
            He trabajado en diversos sectores, desde pequeñas startups hasta negocios consolidados, brindando soluciones que abarcan desde el diseño web, la optimización para motores de búsqueda (SEO), la publicidad en redes sociales y la creación de contenido. Mi pasión por la tecnología y el marketing me ha permitido desarrollar estrategias digitales que no solo son visualmente atractivas, sino que también cumplen objetivos comerciales.
          </p>
        </div>

        {/* Sección Misión y Visión */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold">Misión</h3>
            <p className="mt-4 text-lg">
              Mi misión es ayudar a las empresas a destacar en un mundo digital cada vez más competitivo, creando soluciones tecnológicas personalizadas y estrategias de marketing efectivas que logren resultados tangibles para mis clientes.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Visión</h3>
            <p className="mt-4 text-lg">
              Mi visión es ser un referente en la industria del desarrollo web y el marketing digital, destacando por la creación de experiencias online que conecten marcas con su público objetivo de manera única, auténtica y memorable.
            </p>
          </div>
        </div>

        {/* Sección Valores */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Valores</h3>
          <ul className="mt-4 space-y-4 text-lg">
            <li><span className="font-bold">Innovación:</span> Siempre en la búsqueda de nuevas tendencias y tecnologías que permitan a mis clientes destacar.</li>
            <li><span className="font-bold">Transparencia:</span> La confianza es fundamental en cualquier relación. Por eso, mantengo una comunicación clara y fluida con cada cliente.</li>
            <li><span className="font-bold">Compromiso:</span> Estoy dedicado a cumplir con los plazos y objetivos, asegurando siempre la más alta calidad en cada proyecto.</li>
            <li><span className="font-bold">Pasión:</span> Amo lo que hago, y eso se refleja en cada solución que desarrollo.</li>
          </ul>
        </div>

        {/* Si hay un equipo, podrías añadir esta sección */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Nuestro Equipo</h3>
          <p className="mt-4 text-lg">
            Aunque soy el principal desarrollador, colaboro con una red de expertos en diseño gráfico, SEO y estrategias de contenido. Juntos, nos aseguramos de ofrecer un servicio integral que cubra todas las necesidades digitales de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
