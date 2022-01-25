import React from 'react';

const ApiClimaInfo = ({ temp, humidity, pressure, description, name, speed, country, sunset }) => {
  return <div>
      Nombre: {name}<br/>
      Pais: {country}<br/>
      Clima: {Math.round(temp)}ºC<br/>
      Humedad: {humidity}<br/>
      Presion: {pressure} atm<br/>
      Descripción: {description}<br/>
      Velocidad del vientos: {speed}km/h<br/>


  </div>;
};

export default ApiClimaInfo;
