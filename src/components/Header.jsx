import React from 'react';


function Header({titulo,numero,capacidad}) { // el  destructuring es para no tener que escribir props.titulo
  return (
    <h1 className='encabezado'>{titulo} - {numero}</h1>
  );
}

export default Header;