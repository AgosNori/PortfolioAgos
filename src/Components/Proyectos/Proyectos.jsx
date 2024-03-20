// Proyectos.js

import Proyecto from './Proyecto';
import './Proyectos.css';
const proyectosData = [
  {
    url: 'https://agosnori.github.io/DePapa-Front-/',
    imagen: './depapa.png',
    alt: 'DePapa-Front Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Esta pagina presenta un catálogo completo de las recetas exclusivas del restaurante, detallando paso a paso cómo preparar cada plato de manera fácil y comprensible. Cada receta está meticulosamente explicada para que los usuarios puedan replicar los deliciosos sabores en la comodidad de sus hogares. Herramientas utilizadas para la creción de la misma: HTML, CSS y Bootstrap.',
    video: './dePapa.mp4'

  },
  {
    url: 'https://github.com/AgosNori/CrudReact',
    imagen: './CrudReact (1).png',
    alt: 'CrudReact Image',
    titulo: 'CrudReact',
    descripcion: 'Este proyecto es un sistema de gestión de usuarios desarrollado utilizando React.js, una biblioteca de JavaScript de código abierto ampliamente utilizada para la construcción de interfaces de usuario interactivas. El sistema ofrece operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar) para administrar una base de datos de usuarios de manera eficiente. Herramientas utilizadas para la creación de la misma: React Js',
    video: './crudReact.mp4'
  },
  {
    url: 'https://github.com/AgosNori/ProyectReact',
    imagen: './ProyRickMorty.png',
    alt: 'ProyectReact Image',
    titulo: 'Consumiendo API',
    descripcion: 'Este proyecto es un explorador de personajes de la famosa serie "Rick and Morty", desarrollado utilizando React.js. Utiliza una API pública que proporciona información detallada sobre los personajes de la serie, incluyendo nombres, imágenes, especies, géneros, origen, ubicación actual y más.Herramientas utilizadas para la creación de la misma: React Js',
    video: './reactRickMorty.mp4'
  },
  {
    url: 'https://agosnori.github.io/MyPerfum/',
    imagen: './perfumeria.png',
    alt: 'MyPerfum Image',
    titulo: 'MyPerfum',
    descripcion: 'Esta página web es el catálogo en línea de la perfumería "My Perfum", donde los clientes pueden explorar una amplia selección de perfumes y fragancias de alta calidad. Herramientas utilizadas para la creación de la misma: HTML y CSS.',
    video: './Myperfum.mp4'
  },
  {
    url: 'https://agosnori.github.io/TimerForCubbing/',
    imagen: './timer.png',
    alt: 'TimerForCubbing Image',
    titulo: 'Timmer',
    descripcion: 'Este proyecto consiste en un temporizador de cubing. El temporizador permite a los participantes cronometrar el tiempo que tardan en resolver el cubo, lo que les ayuda a medir su progreso y mejorar su habilidad en la resolución del cubo. Herramientas utilizadas para la creación del mismo: HTML, CSS y Js.',
    video: './TimmerForCubbing.mp4'
  },
  {
    url: 'https://github.com/AgosNori/react15-11',
    imagen: './crud.png',
    alt: 'React15-11 Image',
    titulo: 'Biblioteca Virtual',
    descripcion: 'Este proyecto es una biblioteca virtual desarrollada con React.js que permite a los usuarios gestionar una colección de libros de manera eficiente. La aplicación ofrece operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar) para administrar la información de los libros de manera dinámica.Herramientas utilizadas para la creación del mismo: React Js',
    video: './biblioReact.mp4'
  },
  {
    url: 'https://agosnori.github.io/Vet/',
    imagen: './vet.png',
    alt: 'Vet Image',
    titulo: 'Veterinaria Huellitas',
    descripcion: 'Esta página web es un portal en línea para la clínica veterinaria "Huellitas", donde los usuarios pueden explorar y adoptar a adorables mascotas que están buscando un hogar amoroso. La página tiene como objetivo facilitar el proceso de adopción y promover la adopción responsable de animales. Herramientas utilzadas para la creación de la misma: HTML y CSS.',
    video: ''
  },
  {
    url: 'https://github.com/AgosNori/TPFinalFrontend',
    imagen: './ecommerce.png',
    alt: 'TPFinalFrontend Image',
    titulo: 'DePapa Restaurante',
    descripcion: 'Goddesses es un eCommerce especializado en la venta de productos para el cuidado del cabello, la piel y la cara, ofreciendo una amplia gama de productos naturales y organicos para el cuidado y la salud.Este proyecto fue el culmen de mi Diplomatura en desarrollo Full Stack. Herramientas Utilizadas para la creación del mismo: React Js, MySql y Ejs',
    video: './TpFinalDiplo.mp4'
  },
  {
    url: 'https://github.com/AgosNori/JuegoDicFinal',
    imagen: './juegojs.png',
    alt: 'JuegoDicFinal Image',
    titulo: 'Juego Ahorcado',
    descripcion: 'El juego del ahorcado es un clásico juego de palabras donde los jugadores intentan adivinar una palabra oculta, letra por letra, antes de que se complete la figura de un hombre ahorcado. Herramientas utilizada para la creación del mismo: HTML, CSS y Js.',
    video: './juegoAhorcado.mp4'
  },
  {
    url:'https://github.com/AgosNori/ToDoListDjango',
    imagen:'./todolist.png',
    alt:'TodoListDjango Image',
    titulo:'To do List With Django',
    descripcion:'Esta To-Do List es una aplicación web desarrollada con Django, un framework de desarrollo web en Python. La aplicación permite a los usuarios gestionar sus tareas de manera eficiente, creando, editando, completando y eliminando tareas según sea necesario.Herramientas utilizadas para la creación del mismo: Django',
    video:''
  },
  {
    url:'https://github.com/AgosNori/Dino--SinConexi-n',
    imagen:'./dino.png',
    alt:'JuegoDino Image',
    titulo:' Dino--SinConex-n',
    descripcion:'En este proyecto hemos recreado el juego del dinosaurio de Google. Herramientas utilizadas para la creación del mismo: HTML, CSS y Js.',
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
