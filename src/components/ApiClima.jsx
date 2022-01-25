import React, { useEffect, useState } from 'react';
import getInfo from '../helpers/getInfo';
import ApiClimaInfo from './ApiClimaInfo';

const ApiClima =  () => {

    const [searchTemp, setSearchTerm]= useState("Granada");
    const [tempInfo, setTempInfo]= useState({});


    const getWeatherInfo =  ()=> {
        try {
            
            //ahora realizamos la consulta a la API
            getInfo(searchTemp)
            .then((data)=>{
                

            })

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
