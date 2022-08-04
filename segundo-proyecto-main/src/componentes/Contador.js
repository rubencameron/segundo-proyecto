import React from "react";
import '../hojas-de-estilo/Contador.css';


/*Contador toma el valor de numClics y lo retorna en pantalla, 
el valor actual depende de lo que App.js le pase*/

function Contador( {numClics} ){
   return(
    <div className='hola'>
      {numClics}
    </div>
   ); 
};

export default Contador;