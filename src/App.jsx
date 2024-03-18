import { useState, useEffect } from 'react';
import AboutMe from "./Components/AboutMe/AboutMe";
import Banner from "./Components/Banner/Banner";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";

import Proyectos from "./Components/Proyectos/Proyectos";
import Redes from "./Components/RedesSociales/Redes";
import Skills from "./Components/Skills/Skills";
import './App.css';
import Loader from "./Components/Loader/Loader";

import Header from './Components/Header/Header';
function App() {
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Redes />
          <Banner />
          <AboutMe />
          <Skills />
          <Proyectos />
          <Contacto />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
