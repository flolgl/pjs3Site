import React, { useState } from "react";
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
import PageTPL from "../components/PageTPL.js"




export default class Accueil extends React.Component{
    
    render(){
        return(
            

            <div className="bodyWrapper">
                
                <div className="accueil">
                    
                    <div className="buttonContainer">
                        <ButtonGroup buttons={[["Vie quotidienne", "/viequotidienne"], ["Nous contacter", "/contact"], ["L'agenda", "#agenda"]]}></ButtonGroup>
                        <ButtonGroup buttons={[["Vos démarches", "/vosdemarches"], ["Numéros utiles", "https://www.iledebrehat.fr/numero-urgence/"], ["L'actualité", "#actu"]]}></ButtonGroup>
                    </div>
                    <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                </div>


               
                <div className="dFlex fWrap jContent bColor">
                    <div className="dFlex fWrap fColumn">
                        <span className="pageTitle" id="#actu">Bréhat Infos – le bulletin municipal</span>
                    </div>
                
                </div>
                    
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
                <PageTPL 
                    title="Tourisme à brehat"
                    resume="Liens pratiques"
                    buttons={[["Office de Tourisme", "i"], ["Camping municipal", "camping"], ["Horaires vedettes", "bateau"], ["Ports et mouillages", "port"], ["Numéros utiles", "phone"], ["Activités culturelles", "thatre"], ["Activités sportives", "foot"], ["Patrimoine", "eglise"], ["Histoire", "livre"]]}
                ></PageTPL>

                <div className="dFlex fWrap jContent bColor">
                    <div className="dFlex fWrap fColumn">
                        <span className="pageTitle">Dernières vidéos ! </span>
                    </div>
                
                </div>
                    
                
                <div className='CVideos'>
                    <Carousel className='carrousel' autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
                        <div>
                            <YoutubeEmbed embedId="8lYS7yPmO5g"/>
                        </div>
                        <div>
                            <YoutubeEmbed embedId="hiwczNf4cg8"/>
                        </div>
                    </Carousel>
                </div>
        </div>
           
           
        )
    }
}