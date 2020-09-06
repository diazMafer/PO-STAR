import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Basic cG9jOlBhY2lmaWtvMTAwJQ==` 


//al backend le hace falta que obtenga el name, esto nos servira para no tenerlo
//quemado a lo largo del frontend o pasarnoslo de componente en componente
export const createAccount = (mail, pass) => {
	return new Promise(async (resolve, reject) => {
		await axios.post('http://localhost:3000/signup', {
			email: mail,
			password: pass
		}).then(({status,data}) =>{
			if(status === 201){
				resolve(data)
			} else if (status === 422){
				console.log("backend response error with 422 on signup")
			}
			
		}).catch(reject)
	})
	
}

export const Sign_in = (mail, pass) => {
	return new Promise(async (resolve, reject) => {
		await axios.post('http://localhost:3000/signin', {
			email: mail,
			password: pass
		}).then(({status,data}) =>{
			if(status === 201){
				resolve(data)
			} else if (status === 422){
				console.log("backend response error with 422 on signin")
			}
			
		}).catch(reject)
	})
	
}


///--------------------------------------------------------------------------------------------------------
//_________________________________________________________________________________________________________

export const signIn_fix = (email, password) => {
	event.preventDefault();
	//if (!null) {
		const jsonn = JSON.stringify(
			{
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

