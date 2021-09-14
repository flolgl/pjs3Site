import React from "react";
import Button from "./Button.js";
import "./ButtonGroup.css"


export default class ButtonGroup extends React.Component{

    renderButton(text){
        return (
            <Button text={text}></Button>
        )
    }

    render(){
        var items = [];
        return(

                
            <div className="contenantFlex verticalButtonGroup">
                {this.props.buttons.forEach((value, index) => {
                    //console.log(value);
                    items.push(this.renderButton(value));
                })}

                {items}
            </div>    
        )
    }    

}