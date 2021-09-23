import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ButtonGroup from "./components/ButtonGroup.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"
import Btn_sty from "./components/Btn_sty"
import CarouselComponent from "./components/CarouselCompo.js"

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
      <div className="contenantFlex centerFlex flewWrap">

            <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
            <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
      </div>
      </header>
      <div className="btn_group">
          <Btn_sty text="Office de tourisme" icon="i"></Btn_sty>
          <Btn_sty text="Camping municipal" icon="camping"></Btn_sty>
          <Btn_sty text="Horaires vedettes" icon="bateau"></Btn_sty>
          <Btn_sty text="Ports et mouillages" icon="port"></Btn_sty>
          <Btn_sty text="Numéros utiles" icon="phone"></Btn_sty>
          <Btn_sty text="Activités culturelles" icon="theatre"></Btn_sty>
          <Btn_sty text="Activités sportives" icon="foot"></Btn_sty>
          <Btn_sty text="Patrimoine" icon="eglise"></Btn_sty>
          <Btn_sty text="Histoire" icon="livre"></Btn_sty>
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
      <div>
        <CarouselComponent
         title="testtesttest"
         text = "here is the text"
         dateMiseAJour = "23/09/2021"
         hrefPlusInfo = "https://google.com"
         >
          
        </CarouselComponent>
      </div>
      <Footer></Footer>

    </div>
    
  );
}

export default App;



// just un commentaire