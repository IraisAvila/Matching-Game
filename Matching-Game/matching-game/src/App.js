import './App.css';
import 'animate.css';
import Homepage from './Components/HomePage';

function App() {
const array = ["Topic 1","Topic 2","Topic 3"]
const listTopics = array.map(function(item) {
  return (
    <Homepage Topic={item}/>
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
