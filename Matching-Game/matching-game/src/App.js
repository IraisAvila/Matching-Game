import './App.css';
import 'animate.css';
import Homepage from './Components/HomePage';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
// const array = ["Topic 1","Topic 2","Topic 3"]
const array = [
  {
    "Topic": 'Superheros',
    "Image": 'https://cdn.vox-cdn.com/thumbor/adGKUQv3WVpT_-XyTujmCuqQqUY=/0x0:1987x1325/1200x800/filters:focal(836x505:1152x821)/cdn.vox-cdn.com/uploads/chorus_image/image/70517085/JLA_Avengers_Hero_Cv_copy.0.jpg'
  },
  {
    "Topic":'Video Game Characters',
    "Image":'https://sm.ign.com/t/ign_in/screenshot/default/8d7f61ikv3s51_sjqg.2048.jpg'
  },
  {
    "Topic":'Animals',
    "Image":'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5188131.jpg'
  }]


const listTopics = array.map(function(item) {
  return (
    <Homepage Topic={item.Topic} link={item.Image}/>
  )
})
  return (
    <div>
      <div>
        <nav>
        <h1 className="animate__animated animate__rubberBand">Matching</h1>
        <ul>
          <li><Link to="/hero">Superheros</Link></li>
          <li><Link to="/video">Video Game Characters</Link></li>
          <li><Link to="/animal">Animals</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        </nav>
        <main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          {/* <Route path="/about" elements= {<About/>} /> */}
        </Routes>
      </main>
      </div>
      {listTopics}
    </div>
  );
}

export default App;
