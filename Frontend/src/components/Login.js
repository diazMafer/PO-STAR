import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Checkbox from '@material-ui/core/Checkbox';
//import EmailIcon from '@material-ui/icons/Email';
//import LockIcon from '@material-ui/icons/Lock';
//import InputAdornment from '@material-ui/core/InputAdornment';

import Buttonn from 'react-bootstrap/Button';

import Grid from '@material-ui/core/Grid';
import  '../css/styles.css'
import  '../css/login.css'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Redirect } from 'react-router'
import * as Worker from './Worker'

export default class Login extends React.Component {

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

	signInn = async () => {
		console.log('email: '+this.state.email)
		console.log('password: '+this.state.pass)
		const validRegister = await Worker.Sign_in(this.state.email, this.state.pass)
		if (validRegister) {
			this.handleClick()
		} else {
			console.log("ocurrio un error")
		}
	}


	
	render (){
		if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/"
              }}/>;
		}


		return (
			<div>
				<Navbar collapseOnSelect expand="lg" >
					<Navbar.Brand className='fontNavTitle' href="/">PO-STAR</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
						</Nav>
						<Nav>
							<NavDropdown className='fontNav' title="Ayuda" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Po-Star?</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Quienes somos</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link className='fontNav' href="/Register">Registrarse</Nav.Link>

							<Nav.Link href="#deets"> </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Container className='main' component="main" maxWidth="xs">

					<CssBaseline />
					<div className='paper'>
						<h1 className='fontTittle' >INICIAR SESIÓN</h1>
							<TextField
								className='fontTextF'
								variant="outlined"
								margin="normal"
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={(event) =>  this.setEmail(event.target.value)}
								/*InputProps={{
									startAdornment: (
									<InputAdornment position="start">
										<EmailIcon />
									</InputAdornment>
									),
								}}*/
							/>
							<TextField
								className='fontTextF'
								variant="outlined"
								margin="normal"
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(event) => this.setPass(event.target.value)}
								/*InputProps={{
									startAdornment: (
									<InputAdornment position="start">
										<LockIcon />
									</InputAdornment>
									),
								}}*/
							/>
							{/*href='/Login' onClick={Worker.SignIn(email,pass)}*/}
							<br/><br/>
							<Buttonn onClick={this.signInn} variant="info" block className='submit' >INGRESAR</Buttonn>
							<Grid container>
							</Grid>
					</div>
					
				</Container>
			</div>

		)
	}
}
