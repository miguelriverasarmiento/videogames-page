import type { Videogame } from "../types/videogame";
import VideogameCard from "./VideogameCard";
import { getVideogames } from "../api/videogameApi";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const VideogameList = ({ searchQuery }: { searchQuery: string}) => {

    const [videogames, setVideogames] = useState<Videogame[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Volver a página 1 cuando cambie la búsqueda
    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

    const handleRefresh = () => {
        getVideogames()
            .then(data => setVideogames(data))
            .catch(error => setError(error));
    };

    useEffect(() => {
        getVideogames()
        .then(data => setVideogames(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);
    
    // Filtrar los videojuegos según la consulta de búsqueda
    const filteredVideogames = videogames.filter(v => 
        v.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.genero.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.plataforma?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Dividir el array filtrado
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedVideogames = filteredVideogames.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredVideogames.length / itemsPerPage);
    
    if (loading) return <p className="flex justify-center mt-4">Cargando...</p>
    if (error) return <p className="flex justify-center mt-4">Error: {error}</p>
    return (
        <div className="container mx-auto pb-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 justify-items-center">
                {paginatedVideogames.map(videogame => (
                    <VideogameCard key={videogame.id} videogame={videogame} onDelete={handleRefresh} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}

export default VideogameList