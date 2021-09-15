import './Card.css';
import React from "react";
//import img from "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export default class Card extends React.Component{
    render(){
        return (
            <div className="cardContainer">
            <div className="post">
                <div className="header_post">
                    <img src={this.props.img} alt=""/>
                </div>
        
                <div className="body_post">
                    <div className="post_content">
        
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
        
                        <div className="cardContainer_infos">
                            <div className="postedBy">
                                <span>Autheur</span>
                                {this.props.author}
                            </div>
        
                            <div className="cardContainer_tags">
                                <span>tags</span>
                                <div className="tags">
                                    <ul>
                                        <li>{this.props.tags[0]}</li>
                                        <li>{this.props.tags[1]}</li>
                                    </ul>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}