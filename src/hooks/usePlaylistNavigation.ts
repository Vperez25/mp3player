import { useState } from 'react';
import type { Cancion } from '../components/SongsList';

export const usePlaylistNavigation = (canciones: Cancion[], cancionInicial: Cancion) => {
    const [cancionSeleccionada, setCancionSeleccionada] = useState<Cancion>(cancionInicial);

    const manejarAnterior = () => {
        const indice = canciones.findIndex((c) => c.id === cancionSeleccionada.id);
        const indiceAnterior = (indice - 1 + canciones.length) % canciones.length;
        setCancionSeleccionada(canciones[indiceAnterior]);
    };

    const manejarSiguiente = () => {
        const indice = canciones.findIndex((c) => c.id === cancionSeleccionada.id);
        const indiceSiguiente = (indice + 1) % canciones.length;
        setCancionSeleccionada(canciones[indiceSiguiente]);
    };

    return { 
        cancionSeleccionada, 
        setCancionSeleccionada, 
        manejarAnterior, 
        manejarSiguiente 
    };
};
