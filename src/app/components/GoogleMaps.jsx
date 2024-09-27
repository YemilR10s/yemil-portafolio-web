'use client'
import React from 'react'

import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 6.279675936302136,
  lng: -75.56233735254042,
};

const GoogleMaps = () => {
  return (
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center}/>
        </GoogleMap>
      </LoadScript>
  )
}

export default GoogleMaps































/* // components/Map.js
'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 6.279675936302136,
    lng: -75.56233735254042,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; */

