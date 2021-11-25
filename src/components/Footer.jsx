import React from 'react';


const  Footer = ({fecha})=>  ( // asume que lo que esta entre los parentesis es el return,solo cuando el componente 
                            //se declara de esta forma. Con las llaves va el return
    <footer>
        <p>Todos los Derechos Reservados &copy; {fecha}</p>
    </footer>
  );


export default Footer;
