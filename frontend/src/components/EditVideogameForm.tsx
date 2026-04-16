import { useState, useEffect } from 'react'
import type { Videogame } from '../types/videogame';
import { updateVideogames } from '../api/videogameApi';
import { useNavigate } from 'react-router-dom';

interface Props {
    videogame: Videogame;
}

function EditVideogameForm({ videogame }: Props) {

    const [form, setForm] = useState({
        titulo: '',
        genero: '',
        precio: '',
    });

    useEffect(() => {
        setForm({
            titulo: videogame.titulo,
            genero: videogame.genero,
            precio: String(videogame.precio),
        });
    }, [videogame.titulo, videogame.genero, videogame.precio]);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataSend = {
            titulo: form.titulo,
            genero: form.genero,
            precio: Number(form.precio),
        };
        try {
            await updateVideogames(videogame.id, dataSend);
            navigate("/");
        } catch (error) {
            console.error("Error", error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm(prev => ({ ...prev, [name]: value}));
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
