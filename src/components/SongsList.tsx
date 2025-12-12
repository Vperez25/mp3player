import React from 'react';
import styles from '../styles/SongsList.module.css';

export interface Cancion {
    id: number;
    titulo: string;
    artista: string;
    archivo: string;
}

interface SongsListProps {
    canciones: Cancion[];
    alSeleccionar: (cancion: Cancion) => void;
    cancionSeleccionadaId?: number;
}

const SongsList = ({ canciones, alSeleccionar, cancionSeleccionadaId }: SongsListProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Canciones</h2>
            </div>

            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    {canciones.map((cancion) => {
                        const estaActiva = cancionSeleccionadaId === cancion.id;
                        return (
                            <li key={cancion.id} className={`${styles.item} ${estaActiva ? styles.active : ''}`}>
                                <button
                                    className={styles.songButton}
                                    onClick={() => alSeleccionar(cancion)}
                                >
                                    <span className={styles.icon}>{estaActiva ? '⏸' : '▶'}</span>
                                    <span className={styles.songTitle}>{cancion.titulo}</span>
                                    <span className={styles.songAuthor}>{cancion.artista}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SongsList;
