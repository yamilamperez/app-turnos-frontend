import React from "react";
import '../../styles/HomeScreen.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const HomeScreen = () => {
    const { user } = useContext(AuthContext);

return (
    <div className="container__home">
        <div className="container__form">
        <h1 className="home__title">¡Hola, {user?.name || "usuario"}!</h1>
        <span>¿Qué deseas hacer hoy?</span>
        <button className="button__form">Modificar una reserva</button>
        <button className="button__form">Reservar un nuevo turno</button>
        </div>
    </div>
)
}

export default HomeScreen