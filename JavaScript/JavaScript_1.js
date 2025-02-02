function Food_Function()
{
var Food_Output;
var Food=document.getElementById("Food_Input").value;
var Food_String=" is a great choice!";
switch(Food)
{
    case "Pizza":
        Food_Output="Pizza"+Food_String;
        break;
    case "Burger":
        Food_Output="Burger"+Food_String;
        break;
    case "Pasta":
        Food_Output="Pasta"+Food_String;
        break;
    case "Sandwich":
        Food_Output="Sandwich"+Food_String;
        break;
    case "Salad":
        Food_Output="Salad"+Food_String;
        break;
    case "Sushi":
        Food_Output="Sushi"+Food_String;
        break;
    default:
        Food_Output="Please enter a food exactly as written on the above list.";

}
document.getElementById("Output").innerHTML=Food_Output;
}

function Hello_World_Function()
{
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);