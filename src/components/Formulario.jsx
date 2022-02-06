import React, { useState } from 'react';

const Formulario = () => {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false
    }

    const [todo, setTodo] = useState(initialState)

    return (
        <>
            <h3>Agregar TODO</h3>
            <form>
                <input type="text"
                    className='form-control mb-2'
                    name="nombre"
                    placeholder='Ingrese el nombre de su tarea' />
                <textarea
                    className="form-control mb-2"
                    placeholder="Ingrese descripción"
                    name="descripcion"
                />
                <select name="estado" className='form-control mb-2'>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="prioridad"
                        checked=""
                        id="flexCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'>Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario;
