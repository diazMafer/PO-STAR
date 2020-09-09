import React from 'react';
import Buttonn from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  '../css/register.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Redirect } from 'react-router'


import * as Worker from './Worker'

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

export default class Menu extends React.Component {

	constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this)
	}
	
    handleClick(){
        this.setState({redirect: true});
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
					<Navbar.Brand className="fontNavTitle" href="/">PO-STAR</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
						</Nav>
						<Nav>
							<NavDropdown className="fontNav" title="Ayuda" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Po-Star?</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Quienes somos</NavDropdown.Item>
							</NavDropdown>
							
							<Nav.Link className="fontNav" href="#user"> Nombrexxxx </Nav.Link>
							<Nav.Link className="fontNav" href="#level"> NV.2 </Nav.Link>

							<Nav.Link href="#deets"> </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>


				<Container component="main" maxWidth="xs">

					<CssBaseline />
					<div className="paper">
					
						<h1 className="fontTittle">MENú</h1>

						<br>
						</br>
					</div>
				</Container>

				<Container>

					<div className="boxesContainer"  href="hola">

						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 1
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 2										
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 3
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 4
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 5
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 6										
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 7										
									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>



						<Link href="#hola">
							<div className="cardBox">
								<div className="card">
									<div className="fontTittle1">
										Lección 8

									</div>
									<div className = "subTittle1">
										letras.. asdffff asd asd asdf asdf asdf asdf asdf  asdf asdf asd asdf asdf asdf asdf asdf asd asdf asdfads f
									</div>
								</div>
							</div>
						</Link>






					</div>


				</Container>		

			</div>
		)
	}
}

