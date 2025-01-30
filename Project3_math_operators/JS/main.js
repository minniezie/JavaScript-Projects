

function addition(){// addition function
var add=12+3;
document.getElementById("Add").innerHTML = "2+3=  " +add;
}

//Subtraction function
function subtraction(){
var sub=12-3;
document.getElementById("Sub").innerHTML = "10-3=  " +sub;
}


// Multiplaction function
function Multiplication(){
var mult=12*3; 
document.getElementById("Mlt").innerHTML = "12*5=  " +mult;
}


// Division function
function Division(){
var divide=12/3; 
document.getElementById("Div").innerHTML = "12/5 =  " +divide;
}


// Random function
function random(){
document.getElementById("Ran").innerHTML = Math.random()*5;

}

//Modulus operator 
function modulus_operator(){
	var modulus= 20%5;
	document.getElementById("Mod").innerHTML =
	"When you divide 20 by 5 you have a remainder of: " + modulus;
}

//Increment function
function Increment(){
	var x = 5;
	x++;
	document.getElementById("IncrementText").innerHTML = x;

}

//Decrement function
function Decrement(){
	var x = 5;
	x--;
	document.getElementById("DecrementText").innerHTML = x;

}







