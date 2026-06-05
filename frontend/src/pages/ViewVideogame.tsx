import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideogameId } from "../api/videogameApi";
import type { Videogame } from "../types/videogame";

const ViewVideogame = () => {

    const { id } = useParams();
    const [videogame, setVideogame] = useState<Videogame | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        getVideogameId(id)
          .then(data => setVideogame(data))
          .catch(error => setError(error.message))
          .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p className="flex justify-center mt-4">Cargando...</p>
    if (error) return <p className="flex justify-center mt-4">Error: {error}</p>
    if (!videogame) return <p className="flex justify-center mt-4">Videojuego no encontrado</p>

  return (
    <div className="ml-8 mt-8">
        <h2 className="text-xl">Detalles de videojuego</h2>
        {videogame.imagen && <img className="mt-5" src={videogame.imagen} alt={videogame.titulo} style={{ width: "200px" }} />}
        <h3 className="mt-4 font-medium">{videogame.titulo}</h3>
        <p>Género: {videogame.genero}</p>
        <p>Precio: ${videogame.precio.toLocaleString("es-CL")}</p>
        <p>Plataforma: {videogame.plataforma}</p>
        {videogame.descripcion && <p>Descripción: {videogame.descripcion}</p>}
    </div>
  )
}

export default ViewVideogame