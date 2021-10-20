import React from "react";
import "./Accueil.css"
import ButtonGroup from "../components/ButtonGroup.js";
import CarouselComponent from "../components/CarouselCompo.js";
import Card from "../components/Card.js"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default class Accueil extends React.Component{
    render(){
        return(

            <div className="bodyWrapper">

                <div className="accueil">
                    
                    <div className="buttonContainer">
                        <ButtonGroup buttons={["Vie quotidienne", "Nous contacter", "L'agenda"]}></ButtonGroup>
                        <ButtonGroup buttons={["Vos démarches", "Numéros utiles", "L'actualité"]}></ButtonGroup>
                    </div>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img alt="" src="https://www.iledebrehat.fr/wp-content/uploads/2020/10/brehat.jpg" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img alt="" src="https://www.iledebrehat.fr/wp-content/uploads/2020/10/brehat.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img alt="" src="https://www.iledebrehat.fr/wp-content/uploads/2020/10/brehat.jpg" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>

                </div>

                <div className="ButtonsAbonnement"></div>
                <div className="municipalBulWrapper">
                    <h3>Bréhat Infos – le bulletin municipal</h3>
                    <div className="cFlex">
                        <CarouselComponent title="A LA UNE" text="Repas des aînés – dimanche 7 novembre 2021" dateMiseAJour="16/09/2021"></CarouselComponent>
                        <div className="cFlex">
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
                            img="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                        ></Card>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}