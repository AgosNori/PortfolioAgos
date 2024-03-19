// Proyectos.js

import Proyecto from './Proyecto';
import './Proyectos.css';
const proyectosData = [
  {
    url: 'https://agosnori.github.io/DePapa-Front-/',
    imagen: './depapa.png',
    alt: 'DePapa-Front Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Esta pagina esta diseñada para un restaurante, esta creada con HTML y CSS',
    video: './dePapa.mp4'

  },
  {
    url: 'https://github.com/AgosNori/CrudReact',
    imagen: './CrudReact (1).png',
    alt: 'CrudReact Image',
    titulo: 'CrudReact',
    descripcion: 'Esta pagina ha sido creada mediante un CRUD con React Js',
    video: './crudReact.mp4'
  },
  {
    url: 'https://github.com/AgosNori/ProyectReact',
    imagen: './ProyRickMorty.png',
    alt: 'ProyectReact Image',
    titulo: 'Consumiendo API',
    descripcion: 'Esta pagina esta consumiendo una API, realizada con React Js',
    video: './reactRickMorty.mp4'
  },
  {
    url: 'https://agosnori.github.io/MyPerfum/',
    imagen: './perfumeria.png',
    alt: 'MyPerfum Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Esta pagina estad diseñada para una perfumeria, realizada con HTML y CSS',
    video: './Myperfum.mp4'
  },
  {
    url: 'https://agosnori.github.io/TimerForCubbing/',
    imagen: './timer.png',
    alt: 'TimerForCubbing Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Proyecto de un Timmer para Cubbing , creada con HTML, CSS y JS',
    video: './TimmerForCubbing.mp4'
  },
  {
    url: 'https://github.com/AgosNori/react15-11',
    imagen: './crud.png',
    alt: 'React15-11 Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Proyecto de una biblioteca virtual , trabajando con CRUD y realizado con React Js',
    video: './biblioReact.mp4'
  },
  {
    url: 'https://agosnori.github.io/Vet/',
    imagen: './vet.png',
    alt: 'Vet Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Esta pagina fue realizada para una veterinaria, con HTML y CSS',
    video: ''
  },
  {
    url: 'https://github.com/AgosNori/TPFinalFrontend',
    imagen: './ecommerce.png',
    alt: 'TPFinalFrontend Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Trabajo final de la diplomatura de desarrollo full stack, React',
    video: './TpFinalDiplo.mp4'
  },
  {
    url: 'https://github.com/AgosNori/JuegoDicFinal',
    imagen: './juegojs.png',
    alt: 'JuegoDicFinal Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Juego ahorcado, creado con HTML, CSS y Js',
    video: './juegoAhorcado.mp4'
  },
  {
    url:'https://github.com/AgosNori/ToDoListDjango',
    imagen:'./todolist.png',
    alt:'TodoListDjango Image',
    titulo:'To do List With Django',
    descripcion:'Lista de tareas realizadas con Django',
    video:''
  },
  {
    url:'https://github.com/AgosNori/Dino--SinConexi-n',
    imagen:'./dino.png',
    alt:'JuegoDino Image',
    titulo:' Dino--SinConex-n',
    descripcion:'Juego del dino de google hecho con HTML, CSS y JS',
    video:''
  },
];

const Proyectos = () => {
  return (
    <div id='proyectos'>
      <h2>Mis proyectos</h2>
      <ul className='proy'>
        {proyectosData.map((proyecto, index) => (
          <Proyecto
            key={index}
            url={proyecto.url}
            imagen={proyecto.imagen}
            alt={proyecto.alt}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            video={proyecto.video}
          />
        ))}
      </ul>
    </div>
  );
};

export default Proyectos;
