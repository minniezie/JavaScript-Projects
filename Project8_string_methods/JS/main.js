
//Utilizing the .cocat() method 
function full_Sentence() {
var part1 = "Hello ";
var part2 = "World";
var whole = part1.concat(part2);
document.getElementById("StringMethod").innerHTML = whole;

}

//Utilizing the .slice() method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//Utilizing the .toString() method
function string_Method() {
    var firstnumber = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();

}

//Utilizing the .toPrecision() method
function precision_Method() {
    var secondnumber = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

