import AudioPlayer from "./components/AudioPlayer";

const cancion = {
  titulo: "Natural",
  artista: "Imagine Dragons",
  url: "/Imagine Dragons - Natural.mp3"
};

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <h1 style={{ textAlign: 'center', marginTop: '2rem', color: '#fff' }}>
          DASC MP3 PLAYER
        </h1>
      </main>
      <AudioPlayer 
        titulo={cancion.titulo}
        artista={cancion.artista}
        audioUrl={cancion.url}
      />
    </div>
  );
}

export default App;
