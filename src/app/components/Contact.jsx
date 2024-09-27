'use client';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: ['places'],
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '2em',
  };

  const center = {
    lat: 6.279675936302136,
    lng: -75.56233735254042,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center relative lg:flex-row md:max-w-[1200px] m-auto">
        <div className="relative w-full h-[400px]"> 
          {/* Map Container */}
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>

          {/* Button Overlay */}
          <button
            className="absolute z-10 bg-black rounded-md p-2 text-xl bottom-4 left-4 text-white"
            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`, '_blank')}
          >
            ¿Cómo llegar?
          </button>
        </div>

        {/* Form */}
        <form
          action="https://getform.io/f/awngzlwb"
          method="POST"
          className="max-w-[500px] md:w-1/2 text-white flex flex-col justify-center items-center gap-12 bg-gray-600/30 rounded-xl p-4 m-6"
        >
          <div className="text-center">
            <h1 className="text-4xl text-orange-600 font-bold mt-5">Contáctame</h1>
            <p className="mt-3">Envíame un mensaje y agendamos una llamada</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-16 xl:flex-nowrap">
            <input
              name="name"
              type="text"
              required
              placeholder="Escribe tu nombre"
              className="bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md text-sm"
            />
            <input
              name="lastName"
              type="text"
              required
              placeholder="Escribe tu apellido"
              className="bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-16 xl:flex-nowrap">
            <input
              name="email"
              type="email"
              required
              placeholder="Escribe tu correo"
              className="bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md  text-sm"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Escribe tu teléfono"
              className="bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md  text-sm"
            />
          </div>

          <textarea
            name="message"
            className="bg-transparent border-2 border-gray-400/20 w-full p-4 mx-4 rounded-xl xl:w-[90%]"
            required
            placeholder="Escribe tu mensaje"
          ></textarea>
          <button className="bg-orange-600 w-[90%] mb-4 px-4 py-2 rounded-xl hover:bg-orange-400">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
