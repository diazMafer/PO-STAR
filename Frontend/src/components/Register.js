import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Buttonn from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Worker from './Worker'

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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	fontNavTitle: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontWeight: 700,
		fontSize: '1.5rem',
		textTransform: "uppercase"
	},
	fontNav: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontWeight: 700,
		fontSize: '1rem',
		textTransform: "uppercase"
	},
	fontButton: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontWeight: 700,
		textTransform: "uppercase"
	},
	fontForm: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontSize: '1rem',
		fontWeight: 700,
		color: '#bbbbbb',
		textTransform: "uppercase"
	},
	fontTittle: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontSize: '3.5rem',
		color: '#0083ff',
		fontWeight: 700,
		textTransform: "uppercase",
	},
	fontTextF: {
		fontFamily: 'Patrick Hand SC, sans-serif',
		fontSize: '2rem',
		color: '#7483a9',
		fontWeight: "bold",
		textTransform: "uppercase",
	}

}));



function Register(props) {
	const classes = useStyles();
	const [name, setName] = useState('')
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
						<Nav.Link className={classes.fontNav} href="/Login">Iniciar Sesión</Nav.Link>
						<Nav.Link href="#deets"> </Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<h1 className={classes.fontTittle}>REGISTRARSE</h1>
					<form className={classes.form} noValidate>
						<TextField
							className={classes.fontTextF}
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Nombre"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(event) => setName(event.target.value)}
						/>
                        <TextField
							className={classes.fontTextF}
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Correo"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(event) => setEmail(event.target.value)}
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
						/>
                        	<TextField
							className={classes.fontTextF}
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
						{Worker.createAccount(name,email,pass)}
						<Buttonn href='/Register' variant="info" block className={classes.fontButton}>Registrarse</Buttonn>
						<Grid container>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		</div>
	);
}

export default Register;