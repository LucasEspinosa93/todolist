import React from 'react';

const Formulario = () => {
  return (
    <>
        <h3>Agregar TODO</h3>
        <form>
            <input type="text"
            className='form-control mb-2'
            name="nombre"
            placeholder='Ingrese ToDo nombre' />
            <textarea
            placeholder='form-control mb-2'
            name="descripcion" 
            />
            <select name="estado" className='form-control mb-2'>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
        </form>
    </>
    );
};

export default Formulario;
