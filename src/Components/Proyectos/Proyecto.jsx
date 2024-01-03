// Proyecto.js

import PropTypes from 'prop-types';
import VentanaEmergente from './VentEmergente';
import './Proyectos.css';

const Proyecto = ({ url, imagen, alt, descripcion, titulo ,video}) => {
  return (
    <div className='item'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <img src={imagen} width='30%' alt={alt} />
      </a>

      <VentanaEmergente descripcion={descripcion}
      titulo={titulo} 
      video={video}/>
    </div>
  );
};

Proyecto.propTypes = {
  url: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  video:PropTypes.string.isRequired,
};

export default Proyecto;
