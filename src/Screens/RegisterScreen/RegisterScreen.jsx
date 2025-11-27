import React, { useEffect } from "react";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import register from "../../services/authService";
import useFetch from "../../hooks/useFetch";

const RegisterScreen = () => {

const REGISTER_FORM_FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password'
}

const initial_form_state = {
    [REGISTER_FORM_FIELDS.NAME]: '',
    [REGISTER_FORM_FIELDS.EMAIL]: '',
    [REGISTER_FORM_FIELDS.PASSWORD]: ''
}

const {response, error, loading, sendRequest } = useFetch()

function onRegister (form_state_sent) {
    sendRequest(
        () => {
        return register(
            form_state_sent[REGISTER_FORM_FIELDS.NAME],
            form_state_sent[REGISTER_FORM_FIELDS.EMAIL],
            form_state_sent[REGISTER_FORM_FIELDS.PASSWORD]
            )
        }
    )

}

    const { form_state, 
        onInputChange, 
        handleSubmit, 
        resetForm } 
        = useForm(
            initial_form_state, 
            onRegister
        )

useEffect(() => {
    if (response) {
        resetForm();
    }
}, [response, resetForm]);



    return (
        <div>
            <h1>¡Regístrate!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_field">
                    <label htmlFor="name">Usuario:</label>
                    <input 
                    type="text" placeholder="Crea tu usuario" 
                    value={form_state[REGISTER_FORM_FIELDS.NAME]}
                    name={REGISTER_FORM_FIELDS.NAME}
                    onChange={onInputChange}
                    id={'username'}
                    />  
                </div>
                <div className="form_field">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="text" placeholder="tucorreo@gmail.com" 
                    value={form_state[REGISTER_FORM_FIELDS.EMAIL]}
                    name={REGISTER_FORM_FIELDS.EMAIL}
                    onChange={onInputChange}
                    id={"email"}
                    />  
                </div>
                <div className="form_field">
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                    type="password" placeholder="Crea tu contraseña" 
                    value={form_state[REGISTER_FORM_FIELDS.PASSWORD]}
                    name={REGISTER_FORM_FIELDS.PASSWORD}
                    onChange={onInputChange}
                    id={"password"}
                    />  
                </div>
                {
                    loading
                    ? <button disabled>Registrando...</button>
                    : <button>Registrarse</button>
                }
                {error && <span style={{color: 'red'}}>{ error }</span>}
                {response && <span style={{color: 'green'}}>Usuario registrado con éxito.</span>}
            </form>
        </div>
    )
}

export default RegisterScreen