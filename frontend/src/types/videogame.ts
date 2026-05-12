export interface Videogame {
    id: number | string;
    titulo: string;
    imagen?: string;
    descripcion?: string;
    genero: string;
    plataforma: string;
    precio: number;
}

export type CreateVideogame = Omit<Videogame, "id">; // Omite el campo id

export type UpdateVideogame = Partial<CreateVideogame>; // Partial significa que todos los campos son opcionales
