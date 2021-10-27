import React from "react";
import "./nouveauTPL.css";
import Bouton from "./Btn_sty.js"

class PageContent extends React.Component{

    renderButton(text, icon, href){
        return (
            <Bouton text={text} icon={icon} href={href}></Bouton>
        )
    }

    render(){
        var items = [];
        return(
            <div>

                <div className="dFlex fWrap jContent bColor">
                    <div className="dFlex fWrap fColumn">
                        <span className="pageTitle">{this.props.title}</span>
                    </div>

                </div>

                <div className="contentContainer dFlex jContent fWrap">
                    <div className="resumeContainer dFlex jContent fWrap">
                        {this.props.buttons.forEach((value, index) => 
                            items.push(this.renderButton(value[0], value[1], value[2]))
                        )}

                        {items}
                    </div>   
                </div>            

            </div>

        )
    }
}

export default PageContent;