

// A function with HTML and JS using a ternary operation

function checkEligibility() {
    var age = document.getElementById("age").value;
    var eligibilityconst_result = (age >= 18) ? "Eligible to vote." : "Not eligible to vote.";
    document.getElementById("result").innerText = result;
    
}

// Constructor function using "new" and "this" keywords.
{
    function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

    var David =new Person("David", "Smith", 25);
    var Sarah =new Person("Sarah", "Jones", 30);

    // Display the result in an HTML element
    
    function displayPerson() {
        document.getElementById("personResult").innerText = 
        Name: ${David.firstName} ${David.lastName},
            Age: ${David.age}`;
   
}

// Function to display the results of the constructor functionfunctiondisplayPerson() {
    // Create a new Person objectconst person = newPerson("John", "Doe", 30);

    // Display the person's details in an HTML elementdocument.getElementById("personResult").innerText = 
    Name: ${person.firstName}${person.lastName}, Age: ${person.age}`;
}

// Nested function examplefunctionouterFunction() {
    // Outer functionfunctioninnerFunction() {
        // Inner functionconsole.log("This is a nested function.");
    }
    innerFunction(); // Call the inner function
}

// Call the nested function for demonstrationouterFunction();
