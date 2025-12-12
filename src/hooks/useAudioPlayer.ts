import { useRef, useState, useEffect } from 'react';
import type { Cancion } from '../components/SongsList';

interface UseAudioPlayerProps {
    cancion: Cancion;
    autoReproducir?: boolean;
    alSiguiente?: () => void;
}

export const useAudioPlayer = ({ cancion, autoReproducir, alSiguiente }: UseAudioPlayerProps) => {
    const elementoAudio = useRef<HTMLAudioElement | null>(null);
    const [tiempoActual, setTiempoActual] = useState(0);
    const [duracion, setDuracion] = useState(0);
    const [estaReproduciendo, setEstaReproduciendo] = useState(false);
    const [volumen, setVolumen] = useState(1);

    const manejarReproducir = () => {
        elementoAudio.current?.play();
        setEstaReproduciendo(true);
    };

    const manejarPausar = () => {
        elementoAudio?.current?.pause();
        setEstaReproduciendo(false);
    };

    const manejarActualizacionTiempo = () => {
        if (elementoAudio.current) {
            setTiempoActual(elementoAudio.current.currentTime);
        }
    };

    const manejarCargaMetadatos = () => {
        if (elementoAudio.current) {
            setDuracion(elementoAudio.current.duration);
        }
    };

    const formatearTiempo = (segundos: number) => {
        if (!isFinite(segundos)) return '0:00';
        const min = Math.floor(segundos / 60);
        const seg = Math.floor(segundos % 60);
        return `${min}:${seg.toString().padStart(2, '0')}`;
    };

    const manejarCambioTiempo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const tiempo = parseFloat(evento.target.value);
        if (elementoAudio.current) {
            elementoAudio.current.currentTime = tiempo;
        }
    };

    const manejarCambioVolumen = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const vol = parseFloat(evento.target.value);
        setVolumen(vol);
        if (elementoAudio.current) {
            elementoAudio.current.volume = vol;
        }
    };

    const manejarFinCancion = () => {
        if (alSiguiente) {
            alSiguiente();
        }
    };

    const porcentajeProgreso = duracion ? (tiempoActual / duracion) * 100 : 0;

    useEffect(() => {
        if (!elementoAudio.current) return;
        if (!autoReproducir) return;
        const promesa = elementoAudio.current.play();
        if (promesa && typeof (promesa as Promise<void>).then === 'function') {
            (promesa as Promise<void>).then(() => setEstaReproduciendo(true)).catch(() => { });
        } else {
            setEstaReproduciendo(true);
        }
    }, [cancion, autoReproducir]);

    return {
        elementoAudio,
        tiempoActual,
        duracion,
        estaReproduciendo,
        volumen,
        manejarReproducir,
        manejarPausar,
        manejarActualizacionTiempo,
        manejarCargaMetadatos,
        formatearTiempo,
        manejarCambioTiempo,
        manejarCambioVolumen,
        manejarFinCancion,
        porcentajeProgreso,
    };
};
