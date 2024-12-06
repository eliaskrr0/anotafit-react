const TablaRutinaSemanal = () => {
    return (
        <div className="InicioVista">
            <h2>Rutina semanal</h2>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo de ejercicio</th>
                        <th>Ejercicio</th>
                        <th>Peso adicional</th>
                        <th>Series</th>
                        <th>Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>06/12/2024</td>
                        <td>Tiron</td>
                        <td>Dominadas</td>
                        <td>25kg</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TablaRutinaSemanal;