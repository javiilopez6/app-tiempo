import React, { useState, useEffect } from 'react';

const EstadosFuncionales = () => {

    //codigo funcional del trabajo

    //crear un estado en React a traves de componentes funcionales
    const[contador1,setContador1]= useState(0);
    const[contador2,setContador2]= useState(0);


    const handlerContador1 = (e) =>{
        //return setContador1(contador1 + 1 ); //esto funciona el 95% de las veces
        return setContador1((previoEstado) => previoEstado+1); //esto funciona el 100% de las veces
    }
    const handlerContador2 = (e) =>{
        return setContador2((previoEstado) => previoEstado+1); 
    }
    const handlerContador2Restar = (e) =>{
        return setContador2((previoEstado) => previoEstado-1);
    }

    //useEffect se utiliza para realizar tareas que no tienen porque pintar en el DOM element 
    //useEffect(()=>{},[])
    useEffect(()=>{
        console.log("Se ejecuta al inicio");
    });
    useEffect(()=>{
        console.log("Se ejecuta una sola vez inicio");
    },[]); //cuando ponemos [] vacio se ejecuta una sola vez 

    useEffect(()=>{
        console.log("Se ejecuta cuando modificamos el state contador1");
    },[contador1]); 


    useEffect(()=>{
        console.log("Se ejecuta cuando modificamos el state contador1 o contador2");
    },[contador1, contador2]); 



    // useEffect(()=>{
    //     console.log("Se ejecuta al inicio");
    // });

    //pintamos el componente
  return (
      <div>
         {console.log("Pintamos el componente")}
        <h1>Ciclo de Vida</h1>
        <h2>clicks contador 1 .{contador1}</h2>             {/* alt + shift + ⬇ */}
        <h2>clicks contador 2 :{contador2}</h2>
        <button onClick={handlerContador1}>Incrementar contador 1</button>
        <button onClick={handlerContador2}>Incrementar contador 2</button>
        <button onClick={handlerContador2Restar}>Decrementar contador 2</button>

    </div>

  );
};

export default EstadosFuncionales;
