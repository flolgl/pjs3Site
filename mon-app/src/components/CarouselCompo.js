import React from "react";
import "./CarouselCompo.css"

export default class CarouselComponent extends React.Component{
    render(){
        return(

            <div className="rectangleContainer">
                <div className="containerCarteCarou">
                    <div className="textMargin">
                        <a className="title">{this.props.title}</a>
                    </div>
                    <a className="textMargin sommaireText">Extension salle polyvalente – mise à disposition de 4 boxes et 2 plateaux de rangement</a>
                    <span className="textMargin majText">Mise à jour le : blabla</span>
                    <div className="textMargin">
                        <a className="infoButton">+ d'info</a>
                    </div>

                </div>
                <div className="redBarre"></div>

            </div>
        )
    }
}