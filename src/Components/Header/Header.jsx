import './Header.css';
function Header() {
    return (
        <div id="header">
            <h2>Agostina Noriega </h2>
            <ul className="nav">
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
        </div>
    )
}
export default Header