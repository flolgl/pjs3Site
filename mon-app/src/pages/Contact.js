import React from "react"
import "./Contact.css"
import Button from "../components/Button.js"


export default class Contacts extends React.Component{
    render(){
        return(
            <section className="contactSection">
                <div className="contactContainer">
                    <form className="contactForm">

                        <div className="contactInputContainer InputContainer">
                            <div>
                                <input type="text" className="contactInput name" placeholder="Nom"/>
                            </div>
                            <div>
                                <input type="text" className="contactInput email" placeholder="Mail"/>
                            </div>

                        </div>


                        <div className="InputContainer">
                                <input type="text" className="contactInput sujet" placeholder="Sujet"/>
                        </div>

                        <div className="InputContainer">
                            <textarea type="textarea" className="contactInput message" placeholder="Message"/>
                        </div>
                        <div className="InputContainer">
                            <Button text="Envoyer"/>
                        </div>


                        <div className="iconsContainer">
                            <div> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <p>Pl. du Bourg, 22870 Île-de-Bréhat</p>
                            </div>

                            <div> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                                <p>02 96 20 04 15</p>
                            </div>

                        </div>

                    </form>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10501.701522145979!2d-3.017055098715231!3d48.85009833843598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48120ffd48454b05%3A0x40ca5cd36e639e0!2zw45sZS1kZS1CcsOpaGF0!5e0!3m2!1sfr!2sfr!4v1635619799153!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

                </div>

            </section>
        )
    
    
    }
}