import { useRef, useState } from 'react';
import '../styles/globalStyles.css';

interface AudioPlayerProps {
    titulo: string;
    artista: string;
    audioUrl: string;
}

const AudioPlayer = ({ titulo, artista, audioUrl }: AudioPlayerProps) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [tiempoActual, setTiempoActual] = useState(0);
    const [duracion, setDuracion] = useState(0);
    const [reproduciendo, setReproduciendo] = useState(false);
    const [volumen, setVolumen] = useState(1);

    const reproducir = () => {
        
    }

    const pausar = () => {
        
    }

    const alActualizarTiempo = () => {
        
    };

    const alCargarMetadatos = () => {
        
    };

    const formatearTiempo = (segundos: number) => {
        if (!isFinite(segundos)) return '0:00';
        const min = Math.floor(segundos / 60);
        const seg = Math.floor(segundos % 60);
        return `${min}:${seg.toString().padStart(2, '0')}`;
    };

    const cambiarPosicion = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    };

    const cambiarVolumen = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <div className='player-bar'>
            <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={alActualizarTiempo}
                onLoadedMetadata={alCargarMetadatos}
            />

            <div className='player-info'>
                <div className='song-details'>
                    <h3 className='song-title'>{titulo}</h3>
                    <p className='song-artist'>{artista}</p>
                </div>
            </div>

            <div className='player-controls'>
                <button
                    className='control-btn play-btn'
                    onClick={reproduciendo ? pausar : reproducir}
                >
                    {reproduciendo ? '⏸' : '▶'}
                </button>
            </div>

            <div className='player-progress-section'>
                <span className='time-display'>{formatearTiempo(tiempoActual)}</span>
                <div className='progress-bar-container'>
                    <input
                        type="range"
                        min="0"
                        max={duracion}
                        step="0.1"
                        value={tiempoActual}
                        onChange={cambiarPosicion}
                        className='progress-bar'
                    />
                </div>
                <span className='time-display'>{formatearTiempo(duracion)}</span>
            </div>

            <div className='player-volume'>
                <span className='volume-icon'>🔊</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volumen}
                    onChange={cambiarVolumen}
                    className='volume-slider'
                />
            </div>
        </div>
    );
}

export default AudioPlayer;
