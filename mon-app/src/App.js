import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ButtonGroup from "./components/ButtonGroup.js"
import Card from "./components/Card.js"

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Du texte</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="contenantFlex centerFlex flewWrap">

        <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
        <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
        <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
      </div>

      <div className="contenantFlex centerFlex flewWrap">

        <Card 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="C'est un test"
          author="Flo"
          tag="Voyage"
          img="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
        ></Card>
        <Card 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="C'est un test"
          author="Flo"
          tag="Voyage"
          img="https://www.iledebrehat.fr/wp-content/uploads/2021/01/compostage-768x512.jpg"
        ></Card>
        </div>
    </div>
  );
}

export default App;



// just un commentaire