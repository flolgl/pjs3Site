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
                    <a className="textMargin sommaireText">{this.props.text}</a>
                    <span className="textMargin majText">Mise à jour le : {this.props.dateMiseAJour}</span>
                    <div className="textMargin">
                        <a className="infoButton" href={this.props.hrefPlusInfo}>+ d'info</a>
                    </div>
                </div>
            </div>
        )
    }
}