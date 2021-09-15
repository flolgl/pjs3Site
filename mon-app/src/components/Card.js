import './Card.css';
import React from "react";
//import img from "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export default class Card extends React.Component{
    render(){
        return (


            <div className="presentationCard">
                <div className="cardHeader">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="presentationCardBody">
                    <span className="tag tag-teal">{this.props.tag}</span>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                
                    <div className="user">
                        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                        <div className="user-info">
                            <h5>{this.props.author}</h5>
                            <small>2h ago</small>
                        </div>
                    </div>
                </div>
            </div>


           
        )
    }
}