import React, { useEffect, useState } from 'react';
import ApiClimaInfo from './ApiClimaInfo';

const ApiClima =  () => {

    const [searchTemp, setSearchTerm]= useState("Granada");
    const [tempInfo, setTempInfo]= useState({});


    const getWeatherInfo = async ()=> {
        try {
            
            //ahora realizamos la consulta a la API
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchTemp}&units=metric&appid=8515c539c407dca9858087bb1dc4167b&lang=ES`
            let respuesta = await fetch(url);
            let data = await respuesta.json();
            const { temp, humidity, pressure }=data?.main;
            const { description } = data.weather[0];
            const { name }= data;
            const { speed }= data.wind;
            const { country, sunset } = data.sys;
            const miInfo={ 
                temp, humidity, pressure, description, name, speed, country, sunset,
            };
            setTempInfo(miInfo);
            console.log(miInfo);



            
        } catch (error) {
            console.log(error);
        }


    };

useEffect(()=>{
    getWeatherInfo();
},[]);

    //Pintado en el DOM
  return (
      <>
  <div>
      <h1>App de consulta del Clima</h1>
      <div>
          <input
            type="search"
            placeholder="Introduce ciudad, Pais"
            id="search"
            onChange={(e) =>setSearchTerm(e.target.value)}
          
          
          />
          <button onClick={getWeatherInfo}>Buscar</button>
      </div>


  </div>
{/* 
  Aqui debo de cargar un componente nuevo con los datos recogidos de la API  */}
  
<ApiClimaInfo{... tempInfo}/>
</>
);
};

export default ApiClima;
