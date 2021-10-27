import React from "react";
import "./Footer.css"

export default class Footer extends React.Component{


    render(){
        return(
            
            <footer>

                <div className="container-fluid footer-container" style={{marginTop:'0px'}}>
                    <div className="linksContainer paddingContainer fWrap"> 
                            <div className="linksContainer fWrap">
                                <a className="footerLink" href="#">Actualités</a>
                                <a className="footerLink" href="#">Agenda</a>
                                <a className="footerLink" href="#">Météo</a>
                                <a className="footerLink" href="#">Plan du site</a>
                                <a className="footerLink" href="#">Mentions légales / RGPD</a>
                                
                            </div>
                            <div className="linksContainer">
                                <a className="footerLink" href="#">© 2021 Agence BreizhPress</a>   
                            </div>

                    </div>
                </div>

                    <div className="paysage">

                    </div>
                    
                <div className="containerBottom">

                    <div className="linksContainer">
                        <div className="leftLine">
                            <span>Site officiel de la commune d’ïle-de-Bréhat</span>
                            <div className="linksContainer">
                                <span className="leftFooterText">Toute l’information pratique sur l’administration de la commune, les démarches administratives, les services, la vie quotidienne insulaire, les loisirs et le tourisme.</span>
                            </div>

                        </div>
                        <div>
                            <span>Retrouvez-nous sur les réseaux sociaux</span>
                            
                            <div className="dFlexCenter">
                                <a className="footer-link p-3" href="https://www.facebook.com/Mairie-de-lile-de-Br%C3%A9hat-109476447520454/">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#797a7a" className="bi bi-facebook socialLogo footer-icon" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                </a>
                                <a className="footer-link p-3" href="https://www.youtube.com/channel/UCKjtJqq0QdIYhCIgUOmA36Q">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#797a7a" className="bi bi-youtube socialLogo footer-icon" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                                </a>
                            </div>
                            
                        </div>
                    </div>



                    <div className="d-flex justify-content-center wrap flex-footer">
                        
                        <a className="footer-link p-3" href="./contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#797a7a" className="bi bi-envelope footer-icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                        </a>

                        {/* <a className="footer-link p-3" href="https://github.com/flolgl" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#797a7a" className="bi bi-github footer-icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        

                        <a className="footer-link p-3" href="https://www.linkedin.com/in/florian-le-gal-b18443200/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#797a7a" className="bi bi-linkedin footer-icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"/>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </footer>   
        )
    }
}