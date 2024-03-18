import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contacto.css';

export const Contacto = () => {
    const refForm = useRef()
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(refForm.current)
        const serviceId = 'service_iabk8ro';
        const templateId = 'template_ya6emoa';
        const apikey = 'tmaJSOIUwGV7FdVsE';

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)

            .then(result => console.log(result.text))
            .catch(error => console.error(error))

    }

    return (
        <div className='form'>
            <form className='formulario' ref={refForm} action="" onSubmit={handleSubmit}>
                <h2>Contáctame</h2>
                <fieldset>
                    {/* <label className=' email' type="email" name="email">Email</label>
                    <input type="email" placeholder="Ingrese su email" required /> */}
                    <label className="symbol-required email" htmlFor="">Email</label>
                    <input name="email" type="email" placeholder="Ingresa tu email" required />
                </fieldset>
                <fieldset>
                    {/* <label className=' name' type="text" name="name" >Nombre Completo</label>
                    <input type="text" placeholder="Ingrese su nombre completo" required /> */}
                    <label className="symbol-required name" htmlFor="">Name</label>
                    <input name="name" type="text" placeholder="Ingresa tu nombre" required />
                </fieldset>
                <fieldset>
                    <label className='symbol-required number' type="number" htmlFor="" >Numero de telefono</label>
                    <input type="number" name="number" placeholder='Ingrese su numero de telefono' />
                </fieldset>
                <fieldset>
                    <label className="symbol-required name" htmlFor="">Consulta</label>
                    <textarea className='texto' name="message" cols="20" rows="6" placeholder='Deje su mensaje'></textarea>
                </fieldset>

                <button className='btn'>Enviar</button>
            </form>
        </div>

    )
}
export default Contacto