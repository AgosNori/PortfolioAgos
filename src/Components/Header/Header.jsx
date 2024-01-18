import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="header">
      <div className='titulo'>
        <h2>Agostina Noriega</h2>
      </div>
      <nav className='barra'>
        {isMobile && (
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            &#9776;
          </div>
        )}
        <ul className={`nav ${showMobileMenu ? 'show' : ''}`}>
          <li>
            <a href="#App">Home</a>
          </li>
          <li>
            <a href="#proyectos">Portfolio</a>
          </li>
          <li>
            <a href="#sobremi">Sobre Mi</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="./CvNoriegaActualizado (2).pdf">CV</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
