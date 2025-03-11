'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda en desarrollarse una página web?',
      answer: 'El tiempo de desarrollo depende de la complejidad del proyecto, pero en promedio puede tomar entre 2 y 6 semanas.'
    },
    {
      question: '¿Ofrecen mantenimiento después de entregar la web?',
      answer: 'Sí, ofrecemos planes de mantenimiento para garantizar el correcto funcionamiento de tu sitio web.'
    },
    {
      question: '¿Puedo solicitar cambios después de la entrega?',
      answer: 'Sí, podemos realizar cambios según tus necesidades. Algunos cambios pueden tener costos adicionales.'
    },
    {
      question: '¿Qué necesito para iniciar un proyecto?',
      answer: 'Necesitamos conocer tu idea, objetivos y cualquier material gráfico o de contenido que tengas disponible.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl text-orange-600 font-bold text-center mb-8">Preguntas Frecuentes</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              {openIndex === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

