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

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>
    if (!videogame) return <p>Videojuego no encontrado</p>

  return (
    <div>
        <h2>Detalles de videojuego</h2>
        <h3>{videogame.titulo}</h3>
        <p>Género: {videogame.genero}</p>
        <p>Precio: ${videogame.precio}</p>
    </div>
  )
}

export default ViewVideogame