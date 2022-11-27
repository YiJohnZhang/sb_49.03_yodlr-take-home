async function submitForm(evt){

	evt.preventDefault();

	const inputObjects = document.getElementsByTagName('input');

	let formValues = {}

	// inputObjects.forEach((inputElement) => {

	// 	formValues = {...formValues, [inputElement.name]: inputElement.value}

	// });

	for(let i=0; i<inputObjects.length; i++)
		formValues = {...formValues, [inputObjects[i].name]: inputObjects[i].value}

	const postResult = await axios.post('/users', formValues);	
	// console.log(postResult);

}

function loadComponentListeners(){

	document.getElementById("submitForm").addEventListener('mousedown', submitForm);

}


window.addEventListener('load', loadComponentListeners);