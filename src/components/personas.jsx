import React from 'react';
   

const  Personas = ({personasMap,personas,persona,incluirPersona})=>  {
  

    ////////////////CODIGO MIO/////no renderizaba al DOM///////////////
      let sw = 0,objeto={};
      console.log(personas)

      personas ?  sw = 1: console.log();
        if (sw == 0){
         personasMap.map(indice=>(objeto = indice));
         personasMap = objeto;
       }
      ///////////////////////////////////////////////////////
    const {id,nombre,edad} = personasMap; // destructuring para evitar el : personasMap.nombre
   // console.log(`${id} ${nombre} ${edad} años`);
  
    // incluir persona al arreglo del State persona con su funcion incluirPersona
      const seleccionarPersona = id => {  // un solo parametro puedo obviar los parentesis
            const personasMap = personas.filter(personaRef => personaRef.id === id);
            incluirPersona([...persona,personasMap]);
      }

      // Elimina personas del array
      const eliminarPersona = id => {  // un solo parametro puedo obviar los parentesis
        /////////CODIGO MIO///////////////////////////////////
        let k = 0, personasMap = [];
        for(let i = 0; i < persona.length; i++ ){
          for(let j = 0; j < persona[i].length; j++ ){
            if (persona[i][j].id !== id){
              personasMap[k++] = persona[i][j];
            } } }
      /////////////////////////////////////////////////////////
        // const personasMap = persona.filter(personaRef => personaRef.id !== id);
       // console.log(personasMap);
        incluirPersona(personasMap);//colocar las personas en el State

      } 
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Edad:{edad} años</p>
            
            {personas 
            ?
            (<button
                type='button'
                onClick={ () => seleccionarPersona(id) }
            >Incluir</button>)
            :
            (
                <button
                type='button'
                 onClick={ () => eliminarPersona(id) }
            >Eliminar</button>  
            )
            }
        </div>
    )
};
export default Personas;

//const personasFilter = personas.filter(personaRef => personaRef.id === id)[1];
 // console.log(personasFilter[1]);
// en el onClick se utiliza una arrow function para que espere a que el evento suceda,
// osea el click del  boton,con  una function normal se ejecutaria de una vez,sin esperar el evento