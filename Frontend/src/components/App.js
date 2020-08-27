import React from 'react';
import { Link } from 'react-router-dom';
import  '../css/styles.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

//import NavDropdown from 'react-bootstrap/NavDropdown';



const useStyles = makeStyles((theme) => ({
	fontNavTitle: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontWeight: 700,
		fontSize: '1.5rem',
		textTransform: "uppercase",
		color: '#52648e !important'
	},
	fontNav: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontWeight: 700,
		fontSize: '20px',
		textTransform: "uppercase",
		color: '#52648e !important'
	},
}));

function App(props){
	const classes = useStyles();

	return(
	<div>
		<Navbar collapseOnSelect expand="lg" >
			<Navbar.Brand className={classes.fontNavTitle} href="#home">PO-STAR</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				</Nav>
				<Nav>					
					<Nav.Link className={classes.fontNav} href="/Login">Iniciar Sesión</Nav.Link>
					<Nav.Link className={classes.fontNav} href="/Register">Registrarse</Nav.Link>
					<Nav.Link href="#deets"> </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		
		<Container component="main" className="container">
			<div>
				<img
					src="https://uploads-ssl.webflow.com/5e8b8f0cd098a8db668ff85e/5ea32097088ac38944b4318b_Brightness_Contrast%201%20copy.png"
				/>
			</div>
			<br/>
			<h1 className="title">
				APRENDE LAS MEJORES PRÁCTICAS SOBRE
			</h1>
			<br/>

			<h1 className="subtitle">
				Administración de proyectos
			</h1>
			<br/>

			<p>Incrementa tus conociminetos sobre la administración de negocios a través de juegos interactivos.
				Inicia Sesión y lleva control de tus avances en tu cuenta.</p>
				<br/>

			<Link className="principleButton" to="/Register">comenzar <br/> a aprender</Link>
		</Container>
	</div>
	)
}

export default App;
