import React from 'react';
import './persona.css';  // se  requiere la extension .css
import Personas from './personas'; 

const  Persona = ({persona,incluirPersona})=>

     ( // elimino el return, porque no voy a hacer ninguna operacion antes de el return
          <div className='persona'>
             <h2>Persona incluida</h2>
             {persona.length === 0
             ?
             <p>No hay personas para  incluir</p>
             :
             (persona.map(personasMap => (
                  <Personas
                       key={personasMap.id}
                       personasMap={personasMap}
                       persona={persona}
                       incluirPersona={incluirPersona}
                  />
                  )))
  
            }
          </div>
      );
export default Persona;