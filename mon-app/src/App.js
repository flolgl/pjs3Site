import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ButtonGroup from "./components/ButtonGroup.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"
import Btn_sty from "./components/Btn_sty"
import CarouselComponent from "./components/CarouselCompo.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Contact from "./components/Contact.js"
import Create from "./Create.js"
import PageTPL from "./components/PageTPL.js"


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/ddd">
          <Footer/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/municipalite">
          <PageTPL 
            title="Municipalité"
            resume="Tout savoir sur la vie de l’administration bréhatine : les élus, la mairie, les projets, les commissions, le budget sans oublier les formalités administratives.."
          buttons={[["L'équipe municipale", "equipe"], ["La mairie", "mairie"], ["Les commissions", "docs"], ["Conseil municipaix", "cerveaux"], ["Tarif communaux", "stylo"], ["Jumelage itterswiller", "handshake"], ["conseil municipal des jeunes", "stickman"], ["Budget et fiscalité", "euros"]]}
          ></PageTPL>
        </Route>
        <Route path="/serMunicipaux">
          <PageTPL 
            title="Services municipaux"
            resume="Tous les services municipaux."
          buttons={[["Formalités administratives", "docs"], ["Gestion des poubelles", "poubelle"], ["Services techniques", "engrenage"], ["Services de santé", "croix"], ["Ecole-cantine-garderie", "stylo"], ["Pompier", "ext"], ["Brehat infos", "lire"], ["Enquêtes publiques", "loupe"], ["Port et mouillages", "port"], ["Location de salle", "camping"],["Assainissement et gestion de l’eau","goute"]]}
          ></PageTPL>
        </Route>
        <Route path="/activities">
          <PageTPL 
            title="Activités et découverte"
            resume="Partez à la découverte de l’île et de son patrimoine, profitez des activités culturelles et sportives."
            buttons={[["Activités culturelles", "theatre"], ["Activités sportives", "foot"], ["L'agenda", "agenda"], ["Camping municipal", "camping"], ["Office de tourisme", "i"], ["Histoire", "livre"], ["Patrimoine", "eglise"], ["Démographie", "graph"]]}
          ></PageTPL>
        </Route>
      </Switch>
      <Footer/>

      {/*
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
        <div class = "contenantFlex centerFlex flewWrap mgCaro">
          <CarouselComponent
          title="testtesttest"
          text = "here is the text"
          dateMiseAJour = "23/09/2021"
          hrefPlusInfo = "https://google.com"
          >
            
          </CarouselComponent>
          <CarouselComponent
          title = "Essai 2"
          text = "deuxième test"
          dateMiseAJour = "24/09/2021"
          hrefPlusInfo = "#rien"
          ></CarouselComponent>
        </div>      
        <div className="contenantFlex centerFlex flewWrap">

          <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
          <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
        </div>

      */}
      

      </div>
    </Router>
  );
}

export default App;



// just un commentaire