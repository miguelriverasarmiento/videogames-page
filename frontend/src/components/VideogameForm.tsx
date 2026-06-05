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
        setForm(prev => ({ ...prev, [name]: value}));//El spread operator ...prev copea todo lo de prev y luego se sobreescribe el campo que se esta editando con name y value que deposita en name
    };

  return (
    <div className="ml-5 mt-5 pb-5 md:w-1/2 mb-6 md:mb-0">
        <form onSubmit={handleSubmit}>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">Título:</label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" id="title" name="titulo" value={form.titulo} onChange={handleChange} />
            </div>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="image">URL de la imagen:</label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" id="image" name="imagen" value={form.imagen} onChange={handleChange} /> 
            </div>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="description">Descripción:</label>
                <textarea className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="description" name="descripcion" value={form.descripcion} onChange={handleChange} />
            </div>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="genre">Género:</label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" id="genre" name="genero" value={form.genero} onChange={handleChange} />
            </div>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="plataform">Plataforma:</label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" id="plataform" name="plataforma" value={form.plataforma} onChange={handleChange} />
            </div>
            <div>
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="price">Precio:</label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="number" id="price" name="precio" value={form.precio} onChange={handleChange} />
            </div>
            <div>
                <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full cursor-pointer" type="submit">Crear Videojuego</button>
            </div>
        </form>
    </div>
  )
}

export default VideogameForm
