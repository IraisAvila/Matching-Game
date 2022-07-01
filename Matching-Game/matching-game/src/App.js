import './App.css';
import 'animate.css';
import Homepage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstGame from './Components/FirstGame';
import SecondGame from './Components/SecondGame';

function App() {
// const array = ["Topic 1","Topic 2","Topic 3"]
const array = [
  {
    "Topic": 'Superheros',
    "Image": 'https://cdn.vox-cdn.com/thumbor/adGKUQv3WVpT_-XyTujmCuqQqUY=/0x0:1987x1325/1200x800/filters:focal(836x505:1152x821)/cdn.vox-cdn.com/uploads/chorus_image/image/70517085/JLA_Avengers_Hero_Cv_copy.0.jpg',
    "Page": "/hero"
  },
  {
    "Topic":'Video Game Characters',
    "Image":'https://sm.ign.com/t/ign_in/screenshot/default/8d7f61ikv3s51_sjqg.2048.jpg',
    "Page": "/video"
  },
  {
    "Topic":'Animals',
    "Image":'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5188131.jpg',
    "Page": "/hero"
  }];

  const listGames = array.map(item => {
    return (
      <Homepage site={item.Page} key={item.Topic} Topic={item.Topic} link={item.Image} />
    )
  })

  return (
    <div>
      <nav>
          <h1 className="animate__animated animate__rubberBand">Matching</h1>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={listGames} />
          <Route path="/hero" element={<FirstGame />} />
          <Route path="/video" element={<SecondGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
