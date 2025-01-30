
// variable with a Boolean value

var x = true;

// printing the data type of the variable
document.write(typeof x);
document.write("<br>");

// an expression combining a string and a number
document.write("10" + 5);
document.write("<br>");

// utilizing the == operator
document.write(10 == 10);
document.write("<br>");

// utilizing the === operator
x = 10;
y= 10;
document.write(x === y);
document.write("<br>");

// utilizing the != operator
document.write(10 != 15);
document.write("<br>");

// utilizing the > and && operator
document.write(10 > 5 && 10 > 15);
document.write("<br>");

// utilizing the < and || operator
document.write(10 < 5 || 10 < 15);
document.write("<br>");

// utilizing the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
