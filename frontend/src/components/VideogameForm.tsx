import React, { useState } from 'react'
import { createVideogames } from '../api/videogameApi';
import { useNavigate } from 'react-router-dom';

const VideogameForm = () => {

    const [form, setForm] = useState({
        titulo: "",
        imagen: "",
        descripcion: "",
        genero: "",
        plataforma: "",
        precio: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataSend = {
            titulo: form.titulo,
            imagen: form.imagen,
            descripcion: form.descripcion,
            genero: form.genero,
            plataforma: form.plataforma,
            precio: Number(form.precio),
        };

        try {
            const newVideogame =  await createVideogames(dataSend);
            console.log(newVideogame);
            navigate("/");
        } catch (error) {
            console.error("Error", error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <label htmlFor="image">URL de la imagen:</label>
            <input type="text" id="image" name="imagen" value={form.imagen} onChange={handleChange} /> 
        </div>
        <div>
            <label htmlFor="description">Descripción:</label>
            <textarea id="description" name="descripcion" value={form.descripcion} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="genre">Género:</label>
            <input type="text" id="genre" name="genero" value={form.genero} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="plataform">Plataforma:</label>
            <input type="text" id="plataform" name="plataforma" value={form.plataforma} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="price">Precio:</label>
            <input type="number" id="price" name="precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
            <button type="submit">Crear Videojuego</button>
        </div>
    </form>
  )
}

export default VideogameForm
