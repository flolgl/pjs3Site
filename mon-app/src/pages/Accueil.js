import React from "react";
import "./Accueil.css"
import ButtonGroup from "../components/ButtonGroup.js";
import CarouselComponent from "../components/CarouselCompo.js";
import Card from "../components/Card.js"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import comp from './compost.jpg';
import bla from './blason.png';
import manage from './manage.jpg';
import logoS from './logoscene.png';
import YoutubeEmbed from "../components/video";
import sample from './drone.mp4';


export default class Accueil extends React.Component{
    render(){
        return(

            <div className="bodyWrapper">
                
                <div className="accueil">
                    
                    <div className="buttonContainer">
                        <ButtonGroup buttons={["Vie quotidienne", "Nous contacter", "L'agenda"]}></ButtonGroup>
                        <ButtonGroup buttons={["Vos démarches", "Numéros utiles", "L'actualité"]}></ButtonGroup>
                    </div>
                    <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                </div>

                <div className="ButtonsAbonnement"></div>
                <div className="municipalBulWrapper">
                    <h3>Bréhat Infos – le bulletin municipal</h3>
                    <div className="cFlex-Center">
                       
                        <div className="cFlex">
                        <Card 
                            text="vous pouvez retirer votre composteur aux services techniques de la mairie lors des permanences suivantes : de 10h à 12h le 25 et 30 Octobre puis 3 novembre"
                            title="Distribution des composteurs"
                            author="La Mairie de bréhat"
                            authorImg={bla}
                            tag="A LA UNE"
                            img={comp}
                        ></Card>
                        <Card 
                            text="Le samedi 2 octobre, une réunion publique d’informations générales sur les travaux en cours et projets de la commune vous a été présentée à la salle des fêtes"
                            title="Réunion publique d’informations "
                            author="La Mairie de bréhat"
                            authorImg={bla}
                            tag="A LA UNE"
                            img={manage}
                        ></Card>
                        <Card 
                            text="Ravie d’avoir permis la réalisation du premier festival Les Scènes de Bréhat, la mairie de Bréhat félicite l’organisation et les artistes pour la bonne tenue et la qualité du festival"
                            title="Festival Les Scènes de Bréhat"
                            author="La Mairie de bréhat"
                            authorImg={bla}
                            tag="A LA UNE"
                            img={logoS}
                        ></Card>

                        </div>
                    </div>
                </div>
                <div className="videos">
                    <YoutubeEmbed embedId="8lYS7yPmO5g"/>
                    <YoutubeEmbed embedId="hiwczNf4cg8"/>

                </div>
            </div>
        )
    }
}