import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ButtonGroup from "./components/ButtonGroup.js"
import Card from "./components/Card.js"
import Footer from './components/Footer';

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
        <Footer
        title = "COMPANY NAME"
        discription = "About the company, little discription will goes here.."
        quickLinks ="Quick Links"
        link1 = "https" titleLink1 = "Get Started"
        link2 = "https" titleLink2 = "Top Leaders"
        link3 = "https" titleLink3 = "Success Stories"
        link4 = "https" titleLink4 = "Event/Tickets"
        link5 = "https" titleLink5 = "News"
        link6 = "https" titleLink6 = "Lifestyle"
        link7 = "https" titleLink7 = "About"

        title2 ="Get Started"
        discription2 = "Get access to your full Training and Marketing Suite."
        subscipeLink = "www"
        subscipeBtn = "Subscipe NOW"

        ContactUs = "Contact US"
        ourMailLink = "syfsa@syfsa"
        ourMail = "syfsa@syfsa"

        
        ></Footer>
    </div>
    
  );
}

export default App;



// just un commentaire