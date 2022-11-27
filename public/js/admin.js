async function getAllUsers(){

	const userUlElement = document.getElementById("yodlr-user-list");

	const informationLiElement = document.createElement('li');
	const informationLiTextNode = document.createTextNode("Name (last, first); Email; Account State")
	informationLiElement.appendChild(informationLiTextNode);
	userUlElement.append(informationLiElement);
		// I think a table is better for search but, this assignment doesn't specify; plus I am much more excited for the final project ._.

	const userList = await axios.get('users');
	const userData = userList.data;



	userData.forEach(({email, firstName, lastName, state})=> {

		const newLiElement = document.createElement("li");
		const liTextNode = document.createTextNode(`${lastName}, ${firstName}; ${email}; ${state}`)
		
		newLiElement.appendChild(liTextNode);
		userUlElement.append(newLiElement);
			// I think a table is better for search but, this assignment doesn't specify; plus I am much more excited for the final project ._.
	
	});

}

window.addEventListener("load", getAllUsers);