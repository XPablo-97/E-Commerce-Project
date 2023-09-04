import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>Políticas de privacidad</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>Terminos de uso</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>Sobre Hi-Pulsar</Link>
        </div>
        <span className='text-white copyright-text text-manrope'><i class="fa-regular fa-copyright fa-beat-fade"></i> 2023 <b><u>Hi-Pulsar</u></b>. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer