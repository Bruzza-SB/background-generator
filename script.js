//OBS: seleccionamos los elementos como en CSS, no HTML
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//Seleccionamos el body xq ahi esta el background
var body = document.getElementById("gradient");

function setGradient() {
	//asi cambiamos el background del body
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	//.textContent me da en texto el contenido del elemento
	css.textContent = body.style.background + ";";
}

//El evento input detecta cada vez que el input cambia
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);