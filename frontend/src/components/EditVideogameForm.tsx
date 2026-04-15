import React, { useState } from 'react'
import type { Videogame } from '../types/videogame';

interface Props {
    videogame: Videogame;
}

function EditVideogameForm({ videogame }: Props) {

    const [form, setForm] = useState({
        titulo: videogame.titulo,
        genero: videogame.genero,
        precio: videogame.precio,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm(prev => ({ ...prev, [name]: value}));// El spread operator ...prev copea todo lo de prev y luego se sobreescribe el campo que se esta editando con name y value que deposita en name
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" name="titulo" value={form.titulo} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="genre">Género:</label>
            <input type="text" id="genre" name="genero" value={form.genero} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="price">Precio:</label>
            <input type="number" id="price" name="precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
            <button type="submit">Actualizar Videojuego</button>
        </div>
    </form>
  )
}

export default EditVideogameForm
