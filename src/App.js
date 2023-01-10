import "./App.css";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Songui from "./components/Songui";
// import audiofile from 'src/assets/2.mp3'

function App() {
  let song1 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  let song2 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
  let song3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";
  let song4 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3";
  let song5 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3";
  let song6 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3";
  let song7 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";
  let song8 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";
  let song9 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3";
  let song10 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3";
  let songs = [
    { filepath: song1 },
    { filepath: song2 },
    { filepath: song3 },
    { filepath: song4 },
    { filepath: song5 },
    { filepath: song6 },
    { filepath: song7 },
    { filepath: song8 },
    { filepath: song9 },
    { filepath: song10 },
  ];
  let songlist = songs.map((e, i) => {
    return (
      
      <div key={i}>
      <h2>song{i+1}</h2>
      
        <audio controls src={e.filepath}></audio>
      </div>
    );
  });

  return (
    <>
   
      <Navbar />
    
<div className="App">

      <div>
     <h1> try our best songs</h1>
      {songlist}
      </div>
    </div>
  
    </>
  );
}

export default App;
