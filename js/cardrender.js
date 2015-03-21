var cardEmail;
var cardName;
function createCardElements(){
	cardName = document.createElement("p");
	cardName.classList.add("cardname");
	cardName.classList.add("cardelement");
	cardName.classList.add("cardtextelement");	
	cardName.innerText = "Name";
	cardEmail = document.createElement("p");
	cardEmail.classList.add("cardemail");
	cardEmail.classList.add("cardelement");
	cardEmail.classList.add("cardtextelement");
	cardEmail.innerText = "Email";
}
function cardRenderFront(){
	var cardFrontDiv = document.getElementById("cardfrontdiv");
	cardFrontDiv.appendChild(cardEmail);
	cardFrontDiv.appendChild(cardName);
}