import { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';
import App from '../../App';
import './Loader.css';
function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula un tiempo de carga de 10 segundos
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        // Limpia el timeout al desmontar el componente
        return () => clearTimeout(loadingTimeout);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <div className='containerLoader'>
            {isLoading && (
                <Triangle
                    visible={true}
                    height="100"
                    width="100%"
                    color="rgb(107, 139, 139)"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    position="relative"
                    margin="0"
                />
            )}
            {!isLoading && (
                // Contenido de tu página
                <>
                    <App />
                </>
            )}
        </div>
    );
}

export default Loader;
