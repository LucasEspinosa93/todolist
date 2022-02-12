import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Formulario = () => {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false
    }

    const [todo, setTodo] = useState(initialState);

    const { nombre, descripcion, estado, prioridad } = todo

    const handleSubmit = e => {
        e.preventDefault();
        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje campos vacios',
                icon: 'error'
            });
            return;
        }
        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje campos vacios',
                icon: 'error'
            });
            return;
        }

            Swal.fire({
                title: 'Éxito!',
                text: 'Tarea agregada.',
                icon: 'success',
            });
            
        console.log(todo);
    };

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target

        setTodo((old) => ({
            ...old,
            [name]:type === "checkbox" ? checked : value
        }))
    }

    return (
        <>
            <h3>Agregar TODO</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className='form-control mb-2'
                    name="nombre"
                    placeholder='Ingrese el nombre de su tarea'
                    value={nombre}
                    onChange={handleChange}
                    />
                <textarea
                    className="form-control mb-2"
                    placeholder="Ingrese descripción"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select
                name="estado"
                className='form-control mb-2'
                value={estado}
                onChange={handleChange}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="prioridad"
                        checked={prioridad}
                        id="flexCheckDefault"
                        onChange={handleChange}
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
