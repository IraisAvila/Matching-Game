import './App.css';
import 'animate.css';
import Homepage from './Components/HomePage';

function App() {
// const array = ["Topic 1","Topic 2","Topic 3"]
const array = [
  {
    "Topic": 'Topic 1',
    "Image": 'https://cdn.wallpapersafari.com/32/13/ROvJW1.jpg'
  },
  {
    "Topic":'Topic 2',
    "Image":'https://cdn.wallpapersafari.com/32/13/ROvJW1.jpg'
  },
  {
    "Topic":'Topic 3',
    "Image":'https://cdn.wallpapersafari.com/32/13/ROvJW1.jpg'
  }]


const listTopics = array.map(function(item) {
  return (
    <Homepage Topic={item.Topic} link={item.Image}/>
  )
})
  return (
    <div>
      <div>
        <h1 className="animate__animated animate__rubberBand">Matching</h1>
      </div>
      {listTopics}
    </div>
  );
}

export default App;
