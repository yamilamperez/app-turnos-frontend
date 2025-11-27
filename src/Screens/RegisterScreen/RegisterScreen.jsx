import React, { useEffect } from "react";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import register from "../../services/authService";
import useFetch from "../../hooks/useFetch";
import '../../styles/RegisterScreen.css'

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

    const { response, error, loading, sendRequest } = useFetch()

    function onRegister(form_state_sent) {
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
        <div className="container__register">
            <div className="container__form">
                <div className='logotipo'>
                    <h1 className='logotipo__title'>MS</h1>
                    <span className='logotipo__span'>SKIN STUDIO</span>
                </div>
                <h1 className="register__title">¡Regístrate!</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <div className="form__field">
                        <label htmlFor="name">Usuario:</label>
                        <input
                            className="form__input"
                            type="text" placeholder="Crea tu usuario"
                            value={form_state[REGISTER_FORM_FIELDS.NAME]}
                            name={REGISTER_FORM_FIELDS.NAME}
                            onChange={onInputChange}
                            id={'username'}
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            className="form__input"
                            type="text" placeholder="tucorreo@mail.com"
                            value={form_state[REGISTER_FORM_FIELDS.EMAIL]}
                            name={REGISTER_FORM_FIELDS.EMAIL}
                            onChange={onInputChange}
                            id={"email"}
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            className="form__input"
                            type="password" placeholder="Elige tu contraseña"
                            value={form_state[REGISTER_FORM_FIELDS.PASSWORD]}
                            name={REGISTER_FORM_FIELDS.PASSWORD}
                            onChange={onInputChange}
                            id={"password"}
                        />
                    </div>
                    {
                        loading
                            ? <button disabled>Registrando...</button>
                            : <button className="button__form">Registrarse</button>
                    }
                    {error && <span style={{ color: 'red' }}>{error}</span>}
                    {response && <span style={{ color: 'green' }}>Usuario registrado con éxito.</span>}
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen