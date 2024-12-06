import React, { useEffect, useState } from "react"; import axios from "axios"

const TablaRutinaSemanal = () => {
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/anotafit/ejercicios/todos")
            .then(response => {
                setEjercicios(response.data)
            })
            .catch(error => {
                console.error("Hubo un error al obtener los datos de los ejercicios.")
            });
    }, []);

    return (
        <div className="InicioVista">
            <h2>Rutina semanal</h2>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th>Fecha cambio</th>
                        <th>Tipo de ejercicio</th>
                        <th>Ejercicio</th>
                        <th>Peso adicional</th>
                        <th>Series</th>
                        <th>Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                    {ejercicios.map(ejercicio => (
                        <tr key={ejercicio.idEjercicio}>
                            <td>{ejercicio.fechaModificacion}</td>
                            <td>{ejercicio.tipoEjercicio}</td>
                            <td>{ejercicio.nombre}</td>
                            <td>{ejercicio.pesoAdicional} kg</td>
                            <td>{ejercicio.series}</td>
                            <td>{ejercicio.repeticiones}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        </div>
    );
}

export default TablaRutinaSemanal;