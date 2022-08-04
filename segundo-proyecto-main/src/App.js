import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/logo1.png';
import { useState } from 'react'; /*Importamos el hook que es useState del paquete de react.
                                    este es uno de los hooks mas utilizados en react*/ 


function App() {

  const [numClics, setNumClics] = useState(0); /*Entre parentesis va el valor inicial del estado "numClics, en este caso cero"*/

  const manejarClick = () => {
    setNumClics(numClics + 1); /*setNumClics es una funcion, aqui la llamamos y le pasamos los argumentos que estan entre parentesis */
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  
  return (
     <div className='App'>
      
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo} 
        alt='Logo de FreeCodeCamp' //alt significa Atributo de accesibilidad 
        />
      </div>
      
      <div className='contenedor-principal'> 
        <div className='textoRandom'>
        <h1>El numero de clicks es:</h1>
        </div> 

        <Contador /*usamos el estado actual del componente que es numClics, y lo pasamos como un prop*/
        numClics={ numClics }/> 

        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={ manejarClick } />

        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={ reiniciarContador } />

        

      </div>
      
    </div>
  );
}

export default App;
