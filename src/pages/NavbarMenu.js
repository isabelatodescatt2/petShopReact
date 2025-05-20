import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import petShopLogo from "../imagens/petShopLogo.png";
import { Link } from "react-router-dom"

function NavbarMenu () {
	return (
		<Navbar bg="light" data-bs-theme="light">
			<Container>
				<Navbar.Brand className="logo">
					<Link to="/"><img src={petShopLogo} alt="Logo Pet Shop"></img></Link>
				</Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link href="#" className="menu"><Link to="/">Home</Link></Nav.Link>
					<Nav.Link href="#" className="menu"><Link to="/BanhoTosa">Banho e Tosa</Link></Nav.Link>
					<Nav.Link href="#" className="menu"><Link to="/HotelResort">Hotel Resort</Link></Nav.Link>
					<Nav.Link href="#" className="menu"><Link to="/Adestramento">Adestramento</Link></Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;