import React from "react";
import Button from "./Button.js";
import "./ButtonGroup.css"


export default class ButtonGroup extends React.Component{

    renderButton(text, href){
        return (
            <Button text={text} href={href}></Button>
        )
    }

    render(){
        var items = [];
        return(

                
            <div className="contenantFlex verticalButtonGroup">
                {this.props.buttons.forEach((value, index) => {
                    console.log(value);
                    items.push(this.renderButton(value[0], value[1]));
                })}

                {items}
            </div>    
        )
    }    

}