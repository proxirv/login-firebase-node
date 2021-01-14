//const loggedOutLinks = document.querySelectorAll("disconnected");
//const loggedInLinks = document.querySelectorAll("connected");
/*
const loginCheck = (user) => {
	if (user) {
	  loggedInLinks.forEach((link) => (link.style.display = "block"));
	  loggedOutLinks.forEach((link) => (link.style.display = "none"));
	} else {
	  loggedInLinks.forEach((link) => (link.style.display = "none"));
	  loggedOutLinks.forEach((link) => (link.style.display = "block"));
	}
};*/

/*let displayet =0;

function session() {
	if (!displayet) {
		//loggedOutLinks.forEach => style.display = "block";
		document.getElementById('disconnected').style.display = 'block';
	} else {
		//loggedInLinks.forEach => (link.style.display = "none");
		document.getElementById('connected').style.display = 'none';
	};
};
session();*/

function login() {
	var aux1=document.getElementById('email1').value;
	var aux2=document.getElementById('password1').value;
    console.log(aux1,aux2);
	//let test='http://127.0.0.1:3030/api/login';
	//let test='http://127.0.0.1:3030/api/test';
	fetch(
      test,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
                email:aux1,
                password:aux2
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('el servidor devuelve el siguiente mensaje: '+JSON.stringify(response.msj));
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

function signup() {
	var aux1=document.getElementById('email2').value;
	var aux2=document.getElementById('password2').value;
    console.log(aux1,aux2);
	let test='http://127.0.0.1:3030/api/signup';
	fetch(
      test,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
                email:aux1,
                password:aux2
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('el servidor devuelve el siguiente mensaje: '+JSON.stringify(response.msj));
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

function logout() {
	//let test='http://127.0.0.1:3030/api/logout';
	fetch(
      test,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
                email:aux1,
                password:aux2
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('el servidor devuelve el siguiente mensaje: '+JSON.stringify(response.msj));
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};