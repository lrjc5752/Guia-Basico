import React, {Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Personas from './components/personas';
import Persona from './components/persona';

function App() {

  // crear listado de  productos con un State
  const [personas,guardarPersonas] = useState([       // array destructuring
    {id:1,nombre:'Luis Jimenez',edad:50},
    {id:2,nombre:'Pedro Perez',edad:40},
    {id:3,nombre:'Maria Quintana',edad:30},
    {id:4,nombre:'Carla Bustamante',edad:20}
  ]);   

  //State para incluir personas
    const [persona,incluirPersona] = useState([]); // persona es la referencia al valor del State,
                                                    //incluirPersona es la funcion que va a modificar ese valor

  // obtener la fecha
  const fecha = new Date().getFullYear();
  
  return (
    <Fragment> 
        <Header
          titulo ='Tienda Virtual'
          numero = {2020}
          capacidad= 'media'
        />
        <h1>Lista de Personas</h1>  
        {
          personas.map(personasMap=> (
            <Personas
              key={personasMap.id}
              personasMap={personasMap}
              personas={personas}

              persona={persona}
              incluirPersona={incluirPersona}
            />
          ))}
            <Persona
              persona={persona}
              incluirPersona={incluirPersona}
          />  
        <Footer
          fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
