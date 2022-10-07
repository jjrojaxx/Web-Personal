// Importaciones
import {
    SectionContact,
    Formulario,
    Preguntas,
    Subtitle,
    WrapperSection,
    FormDate, 
    Two,
    Cien
} from "./ElementsContacto";
import {
    ContainerWhite,
    ColTwo,
    TitleSection,
    LineBlueTwo,
} from "../GloblaElements";
import React, {useState} from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import PortDesarrollo from "../../assets/conctac.svg";

export default function Contacto() {
    return (

    <ContainerWhite id="contacto">
      <WrapperSection>
        
        <ColTwo>
          <TitleSection>Contacto</TitleSection>
          <LineBlueTwo />
        </ColTwo>

        <SectionContact>
          <Formulario>
            <Subtitle>Espero tu mensaje  📤</Subtitle>
            <DatosFormulario /> 
          </Formulario>
          <Preguntas>
            <img src={PortDesarrollo} alt="Contacto"  width='100%'/>
          </Preguntas>
        </SectionContact>
      </WrapperSection>
    </ContainerWhite>
  );
}

function DatosFormulario() {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    
    const Enviar = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5wyt5wg', 'template_li0lhbi', e.target, 'zDBTIILJkaJOqWDhP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <Formik
        onSubmit={ ({resetForm}) =>{
            resetForm(); 
            Enviar()
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
        } }
        initialValues={{
            nombre: '',
            apellido: '',
            correo: '',
            mensaje: ''
        }}
        validate={(valores) => {
            let errores = {};

            // Validacion nombre
            if(!valores.nombre){
                errores.nombre = 'Por favor ingresa un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = 'El nombre solo puede contener letras y espacios'
            }
            // Validacion apellido
            if(!valores.apellido){
                errores.apellido = 'Por favor ingresa un apellido'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.apellido = 'El apellido solo puede contener letras y espacios'
            }
            
            // Validacion correo
            if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo electronico'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
            }

            // Validacion Mensaje
            if(!valores.mensaje){
                errores.mensaje = 'Por favor ingresa un descripción es obligatoria'
            } 
            return errores;
        }}

    >
        {( {errors} ) => (
            <FormDate >
            <form className="formulario" onSubmit={( {resetForm}) => {

                }}>
               <Two> 

                <Cien>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Nombre"
                    />
                    <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                </Cien>

                <Cien>
                    <label htmlFor="nombre">Apellido</label>
                    <Field
                        type="text" 
                        id="apellido" 
                        name="apellido" 
                        placeholder="Apellido"
                    />
                    <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
                </Cien>

                </Two >     

                <div>
                    <label htmlFor="correo">Correo</label>
                    <Field
                        type="text" 
                        id="correo" 
                        name="correo" 
                        placeholder="correo@correo.com" 
                    />
                    <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                </div>
                <div>
                    <label htmlFor="mensaje">Describa su proyecto*</label>
                    <Field 
                       name="mensaje" 
                       as="textarea" 
                       id="mensaje" 
                       placeholder="Mensaje" 
                       />
                    <ErrorMessage name="mensaje" component={() => (<div className="error">{errors.mensaje}</div>)} />
                </div>

                <button type="submit" >Enviar mensaje</button>
                {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
            </form>
        </FormDate>
        )}
    </Formik>
    )
}