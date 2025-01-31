
//Assigning the value of the input field to a variable
var x= 10; // global variable

function Add_numbers_1() {
    var x= 99; // local variable
    document.write(10 + x + "<br>"); // using local variable
}

function Add_numbers_2() {
    document.write(20 + x + "<br>"); // using global variable
    console.log(x);

}

Add_numbers_1();
Add_numbers_2();

//A function that includes an if statement

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

