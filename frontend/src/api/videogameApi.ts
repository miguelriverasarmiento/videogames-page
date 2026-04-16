import type { Videogame, CreateVideogame, UpdateVideogame } from "../types/videogame";

export async function getVideogames(): Promise<Videogame[]> {
    const response = await fetch("/api/videogames");
    if (!response.ok) {
        throw new Error("Error obtaining the videogames");
    }
    const result = await response.json();
    return result;
}

export async function getVideogameId(id: number | string): Promise<Videogame> {
    const response = await fetch(`/api/videogames/${id}`);
    if (!response.ok) {
        throw new Error("Error obtaining the videogame");
    }
    const result = await response.json();
    return result.data;
}

export const createVideogames = async (data: CreateVideogame): Promise<Videogame> => {
    const response = await fetch("/api/videogames", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Error creating videogame");
    }
    const result = await response.json();
    return result.data;
}

export const updateVideogames = async (id: number | string, data: UpdateVideogame): Promise<Videogame> => {
    const response = await fetch(`/api/videogames/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Error updating videogame");
    }
    const result = await response.json();
    return result.data;
}

export const deleteVideogames = async (id: number | string): Promise<void> => {
    const response = await fetch(`/api/videogames/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Error deleting videogame");
    }
}
