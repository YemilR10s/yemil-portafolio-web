// components/Portfolio.tsx

import Image from 'next/image';
import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

// Ejemplo de datos del portafolio (puedes modificar esto según tus proyectos reales)
const portfolioData = [
  {
    title: 'Landing Page para E-commerce',
    description:
      'Aumento de conversiones en un 35% en los primeros tres meses. Diseño personalizado y optimizado para SEO.',
    imageSrc: project1, // Reemplaza con tu imagen importada
    stats: 'ROI +35%',
    testimonial: 'El diseño y la funcionalidad han sido excelentes. ¡El aumento en conversiones fue increíble!',
    clientName: 'Juan Pérez',
  },
  {
    title: 'Campaña Publicitaria Digital',
    description:
      'Incremento del tráfico en un 50% con estrategias de marketing digital personalizadas y altamente efectivas.',
    imageSrc: project2, // Reemplaza con tu imagen importada
    stats: 'Tráfico +50%',
    testimonial: 'Miguel nos ayudó a aumentar nuestras ventas de manera significativa en poco tiempo.',
    clientName: 'Laura Gómez',
  },
  {
    title: 'Sitio Web para Negocio Local',
    description:
      'Diseño web moderno para un negocio local que mejoró su presencia online, aumentando el tráfico un 60%.',
    imageSrc: project3, // Reemplaza con tu imagen importada
    stats: 'Tráfico +60%',
    testimonial: 'Nuestro sitio ahora se ve profesional y hemos visto un gran aumento en visitas.',
    clientName: 'Carlos López',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Portafolio de Proyectos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Aquí tienes algunos ejemplos de proyectos exitosos que he completado para mis clientes.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="block text-indigo-600 font-bold">{project.stats}</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <blockquote className="text-gray-500 italic">
                  {project.testimonial}
                </blockquote>
                <p className="mt-2 text-sm font-bold text-gray-700">— {project.clientName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

