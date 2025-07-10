var firstName = "John";
var surName = "Smith";
surName = "Doe";

var age = 25;
var retirementAge = 67;

console.log("you" + " " + "can" + "add" + " " + "strings" + " " + "together");

console.log(`or use template literals to output details for Mr. ${surName} `);

// TODO: log out the full name "John Smith" by concatenating the variables firstName and surName

// TODO: log out "John Smith and I amd 25 years old"
console.log(firstName, surName, " I am ", age);

// TODO: Create a variable to store the number of years until retirement
function retirementage(a, b) {
    return a - b
}

var retireage = retirementage(retirementAge, age)
console.log (retireage);

// TODO: log out "I have 42 years until retirement"
console.log ("I have ", retireage, " years"," until retirement");
