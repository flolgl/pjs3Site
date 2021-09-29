import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from './logo.png';
import './Header.css';


export default class Header extends React.Component{
    render(){
        return(
            
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="Île-de-Bréhat"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navBarLinksContainer">
                    <Nav className="">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/municipalite">Municipalité</Nav.Link>
                        <Nav.Link href="/serMunicipaux">Services municipaux</Nav.Link>
                        <Nav.Link href="/activities">Activités et Découverte</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#facebook">Facebook</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        )
    };

}