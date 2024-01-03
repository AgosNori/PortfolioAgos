import './Contacto.css';

function Contacto() {
    return (
        <div className='form'>
            <form className='formulario'>
                <h2>Contáctame</h2>
                <input type="email" placeholder="Ingrese su email" />
                <label className='email' type="email" ></label>
                <input type="text" placeholder="Ingrese su nombre completo" />
                <label className='name' type="text" ></label>
                <input type="number" placeholder='Ingrese su numero de telefono' />
                <label className='number' type="number"></label>
                <textarea className='texto' name="dudas" cols="20" rows="6" placeholder='Deje su mensaje'></textarea>
                <button className='btn'>Enviar</button>
            </form>
        </div>

    )
}
export default Contacto;