import { Link } from "react-router-dom"

interface Props {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: Props) => {
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-center">
                <img src="/public/titlesix.png" alt="Logo" className="h-12 inline-block mr-2 w-50" />
                
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/create">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear Videojuego
                    </button>
                </Link>
                <div>
                    <input 
                        type="text" 
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="ml-4 p-2 rounded bg-gray-600 text-white placeholder:text-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default Header