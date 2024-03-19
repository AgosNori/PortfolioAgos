import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

export const Contacto = () => {
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_iabk8ro';
        const templateId = 'template_ya6emoa';
        const apikey = 'tmaJSOIUwGV7FdVsE';

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => {
                console.log(result.text);

                refForm.current.reset();

                Swal.fire({
                    title: "Mensaje enviado!",
                    text: "Gracias por contactarnos.",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            })
            .catch(error => {
                console.error(error);

                Swal.fire({
                    title: "Error!",
                    text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            });
    }

    return (
        <div id="contacto" className='form'>
            <form className='formulario' ref={refForm} action="" onSubmit={handleSubmit}>
                <h2>Contáctame</h2>
                <fieldset>
                    <label className="symbol-required email" htmlFor="">Email</label>
                    <input name="email" type="email" placeholder="Ingresa tu email" required />
                </fieldset>
                <fieldset>
                    <label className="symbol-required name" htmlFor="">Nombre</label>
                    <input name="name" type="text" placeholder="Ingresa tu nombre" required />
                </fieldset>
                <fieldset>
                    <label className='symbol-required number' htmlFor="">Numero de telefono</label>
                    <input type="tel" name="number" placeholder='Ingrese su numero de telefono' />
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

export default Contacto;
