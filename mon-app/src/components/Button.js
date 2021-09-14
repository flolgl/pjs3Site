import './Button.css';
import React from "react";


export default class Bouton extends React.Component{

    render(){
        return(

            <button className="custom-btn btn-6"><span>{this.props.text}</span></button>
        )
    }    

}
