import React from 'react';
import "./Header.scss";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className='header text-white'>
    <div className='container'>
      <div className='header-cnt'>
        <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
           <div className='header-cnt-top-l'>
            <ul className='flex top-links align-center'>
                <li className='flex align-center'>
                  <span className='fs-13'><b>Siguenos</b></span>
                  <ul className='social-links flex align-center'>
                  <li className='mx-2'>
                      <a href = "https://www.instagram.com/pabloduarte97" target='blank' className='fs-15'>
                      <i class="fa-brands fa-square-instagram fa-bounce"></i>
                      </a>
                    </li>
                    <li className='mx-2'>
                      <a href = "https://www.facebook.com/pablo.duarte.3701779/" target='blank' className='fs-15'>
                      <i class="fa-brands fa-facebook fa-bounce"></i>
                      </a>
                    </li>
                    <li className='mx-2'>
                      <a href = "https://www.linkedin.com/in/pablo-duarte097/" target='blank' className='fs-15'>
                      <i class="fa-brands fa-linkedin fa-bounce"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/">
                    <span className='top-link-itm-txt'>Registrarse</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/">
                    <span className='top-link-itm-txt'>Iniciar sesión</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='header-cnt-bottom'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header