import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Checkbox from '@material-ui/core/Checkbox';
//import EmailIcon from '@material-ui/icons/Email';
//import LockIcon from '@material-ui/icons/Lock';
//import InputAdornment from '@material-ui/core/InputAdornment';

import Buttonn from 'react-bootstrap/Button';

import Grid from '@material-ui/core/Grid';
import  '../css/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Worker from './Worker'


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: 30
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		fontSize: '20px',
		textTransform: "uppercase"
	},
	fontNavTitle: {
		fontWeight: 700,
		fontSize: '1.5rem',
		textTransform: "uppercase",
		color: '#52648e !important'

	},
	fontNav: {
		fontWeight: 700,
		fontSize: '20px',
		textTransform: "uppercase",
		color: '#52648e !important'

	},
	fontButton: {
		fontWeight: 700,
		textTransform: "uppercase"
	},
	fontForm: {
		fontSize: '1rem',
		fontWeight: 700,
		color: '#bbbbbb',
		textTransform: "uppercase"
	},
	fontTittle: {
		fontSize: '3.5rem',
		fontWeight: 700,
		textTransform: "uppercase",
		color: '#0083ff',
		marginBottom: 15

	},
	fontTextF: {
		fontSize: '2rem',
		color: '#52648e !important',
		fontWeight: "bold",
		marginTop: 25,
		textTransform: "uppercase",
	}

}));


function Login(props) {
	/*const classes = useStyles();
	const [credState, setCredentials] = useState({
		credentials: {
			email: null,
			password: null
		}
	});

	const setEmailState= (emaill=null) => {
		setCredentials({
			email: emaill,
		})
	}

	const setPasswordState = (passwordd) => {
		setCredentials({
			password: passwordd
		})
	}*/

	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" >
				<Navbar.Brand className={classes.fontNavTitle} href="/">PO-STAR</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
					</Nav>
					<Nav>
						<NavDropdown className={classes.fontNav} title="Ayuda" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Po-Star?</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Quienes somos</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className={classes.fontNav} href="/Register">Registrarse</Nav.Link>

						<Nav.Link href="#deets"> </Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container component="main" maxWidth="xs">

				<CssBaseline />
				<div className={classes.paper}>
					<h1 className={classes.fontTittle}>INICIAR SESIÓN</h1>
						<TextField
							className={classes.fontTextF}
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(event) => setEmail(event.target.value)}
							/*InputProps={{
								startAdornment: (
								  <InputAdornment position="start">
									<EmailIcon />
								  </InputAdornment>
								),
							  }}*/
						/>
						<TextField
							className={classes.fontTextF}
							variant="outlined"
							margin="normal"
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(event) => setPass(event.target.value)}
							/*InputProps={{
								startAdornment: (
								  <InputAdornment position="start">
									<LockIcon />
								  </InputAdornment>
								),
							  }}*/
						/>
						{Worker.SignIn(email,pass)}
						<br/><br/>
						<Buttonn href='/Login' variant="info" block className={classes.submit}>INGRESAR</Buttonn>
						<Grid container>
						</Grid>
				</div>
				
			</Container>
		</div>

	);
}

export default Login;