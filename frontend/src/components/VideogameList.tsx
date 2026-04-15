import type { Videogame } from "../types/videogame";
import VideogameCard from "./VideogameCard";
import { getVideogames } from "../api/videogameApi";
import { useEffect, useState } from "react";

const VideogameList = () => {

    const [videogames, setVideogames] = useState<Videogame[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getVideogames()
        .then(data => setVideogames(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div>
            <h2>Lista de videojuegos</h2>
            {videogames.map(videogame => (
                <VideogameCard key={videogame.id} videogame={videogame} />
            ))}
        </div>
    )
}

export default VideogameList