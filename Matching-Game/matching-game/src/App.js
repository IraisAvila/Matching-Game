import './App.css';
import 'animate.css';
import Homepage from './Components/HomePage';
import { Routes, Route, Link } from "react-router-dom";
import FirstGame from './Components/FirstGame';
import SecondGame from './Components/SecondGame';
import ThirdGame from './Components/ThirdGame';
import AboutMe from './Components/AboutMe';

function App() {
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
    "Page": "/animal"
  }];

  const listGames = array.map(item => {
    return (
      <Homepage site={item.Page} key={item.Topic} Topic={item.Topic} link={item.Image} />
    )
  })

  return (
    <div>
      <nav>
          <h1 className="animate__animated animate__rubberBand">The Ultimate Matching Game</h1>
          <Link to="/about"><button>About Me </button></Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={listGames} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hero" element={<FirstGame />} />
          <Route path="/video" element={<SecondGame />} />
          <Route path="/animal" element={<ThirdGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
