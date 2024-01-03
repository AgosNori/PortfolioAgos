// VentanaEmergente.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import './VentEmergente.css';

const VentanaEmergente = ({ descripcion,titulo,video }) => {
  const [ventanaVisible, setVentanaVisible] = useState(false);

  const mostrarVentana = () => {
    setVentanaVisible(true);
  };

  const cerrarVentana = () => {
    setVentanaVisible(false);
  };

  return (
    <div>
      <button onClick={mostrarVentana}>Descripción del proyecto</button>

      {ventanaVisible && (
        <div className="ventana-emergente">
          <div className="contenido">
            <span className="cerrar" onClick={cerrarVentana}>&times;</span>
            <video controls>
              <source src={video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

VentanaEmergente.propTypes = {
  descripcion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  video:PropTypes.string.isRequired
};

export default VentanaEmergente;
