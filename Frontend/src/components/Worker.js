import axios from 'axios';
//import * as utils from './constants/utils'

const config = {
	//name: 'module1-s2',
	//dirName: 'photos', // optional */
}

export const createAccount = (name, email, password) => {
	event.preventDefault();
	//if (!null) {
		const jsonn = JSON.stringify(
			{
				"name": name,
				"email": email,
				"password": password,
			}
		)
		axios.post("/signin", jsonn, { // receive two parameter endpoint url ,form data
		}).then(res => { // then print response status
			console.log('aca')
			console.log(res)
			console.log('aca')
		}).catch(error => {
			// handle your error
			console.log('failed request')
			console.log(error)
		});
	//} else {
	//	console.log('dummy document doesnt make the json request')
	//}
}

export const SignIn = (email, password) => {
	event.preventDefault();
	//if (!null) {
		const jsonn = JSON.stringify(
			{
				"email": email,
				"password": password,
			}
		)
		axios.post("/signup", jsonn, { // receive two parameter endpoint url ,form data
		}).then(res => { // then print response status
			console.log('aca')
			console.log(res)
			console.log('aca')
		}).catch(error => {
			// handle your error
			console.log('failed request')
			console.log(error)
		});
	//} else {
	//	console.log('dummy document doesnt make the json request')
	//}
}

