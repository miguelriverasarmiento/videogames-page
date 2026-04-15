import EditVideogameForm from "../components/EditVideogameForm"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getVideogameId } from "../api/videogameApi"
import type { Videogame } from "../types/videogame"

const EditVideogame = () => {

    const { id } = useParams();
    const [videogame, setVideogame] = useState<Videogame | null>(null);
    const [loading, setLoading] = useState(true);
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
        <h2>Editar Videojuego</h2>
        <EditVideogameForm videogame={videogame}/>
    </div>
  )
}

export default EditVideogame