import React from 'react';
import Buttonn from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  '../css/register.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Redirect } from 'react-router';
import * as Worker from './Worker';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Po-Star
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default class Register extends React.Component {

	constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			email: ''
		}
		this.state = {
			pass: ''
		}
	}
	
    handleClick(){
        this.setState({redirect: true});
	}

	setEmail (e){
		this.setState({email: e })
	}

	setPass (p){
		this.setState({pass: p })
	}

	signUp = async () => {
		console.log('email: '+this.state.email);
		console.log('password: '+this.state.pass);
		const validRegister = await Worker.createAccount(this.state.email, this.state.pass);
		if (validRegister) {
			this.handleClick();

		} else {
			console.log("ocurrio un error")
		}
	}
	
	


	render (){
		//console.log(this.state.redirect);
		if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/"
              }}/>;
		}

		
		//const [email, setEmail] = useState('')
		//const [pass, setPass] = useState('')

		return (
			<div>
				<Navbar collapseOnSelect expand="lg" >
					<Navbar.Brand className="fontNavTitle" href="/">PO-STAR</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
						</Nav>
						<Nav>
							<NavDropdown className="fontNav" title="Ayuda" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Po-Star?</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Quienes somos</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link className="fontNav" href="/Login">Iniciar Sesión</Nav.Link>
							<Nav.Link href="#deets"> </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className="paper">
					
						<h1 className="fontTittle">REGISTRARSE</h1>
						<form className="form" noValidate>
							<TextField
								className="fontTextF"
								variant="outlined"
								margin="normal"
								fullWidth
								id="name"
								label="Nombre"
								name="name"
								autoComplete="name"
								autoFocus
								
							/>
							<TextField
								className="fontTextF"
								variant="outlined"
								margin="normal"
								fullWidth
								id="email"
								label="Correo"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={(event) =>  this.setEmail(event.target.value)}
							/>
							<TextField
								className="fontTextF"
								variant="outlined"
								margin="normal"
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(event) => this.setPass(event.target.value)}
							/>
								<TextField
								className="fontTextF"
								variant="outlined"
								margin="normal"
								fullWidth
								name="password"
								label="Confirmar Contraseña"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<br/><br/>
							<Buttonn onClick={this.signUp} variant="info" block className="fontButton">Registrarse</Buttonn>
							<Grid container>
							</Grid>
						</form>
					</div>
					<Box mt={8}>
						<Copyright />
					</Box>
				</Container>
			</div>
		)
	}
}

