import './Banner.css';
function Banner(){
    return(
        <div id="banner">
            <img src="./fotoPerfil.jpg" alt="foto de perfil"/>
            <div className="descripcion">
                <h1>Desarrolladora Full Stack</h1>
                <h3>Estudiante de Ingenieria Electromécanica</h3>
            </div>
        </div>
    )
}
export default Banner;