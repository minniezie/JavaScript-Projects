
//A function using a while loop
function whileLoop() {
    var i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
document.getElementById("whileLoop").innerHTML = i;

}

//A function using a for loop
function forLoop() {
    var i = 0;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
document.getElementById("forLoop").innerHTML = i;
}

//A function with an array() {
function array() {
    var myArray = ["apple", "banana", "orange", "grape"];
    console.log(myArray);
    document.getElementById("array").innerHTML = myArray;
}

//A function with an object with the let keyword
function object() {
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    console.log(person);
    document.getElementById("object").innerHTML = person.firstName + " " + person.lastName;
}

