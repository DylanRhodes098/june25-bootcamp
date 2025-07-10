let coffeemachine = [{
    type: "latte",
    milk: true,
    customer: "john",
},
{
    type: "americano",
    milk: false,
    customer: "abi",
},
{
    type: "flat white",
    milk: true,
    customer: "simon",
}];

function printorders(a, b, c) {
    return "name:" + a + "type: " + b + "milk: " + c
};

console.log(printorders(`${coffeemachine[0].customer}, ${coffeemachine[0].type}, ${coffeemachine[0].milk}`));
console.log(printorders(`${coffeemachine[1].customer}, ${coffeemachine[1].type}, ${coffeemachine[1].milk}`));
console.log(printorders(`${coffeemachine[2].customer}, ${coffeemachine[2].type}, ${coffeemachine[2].milk}`));


for (i = 0; i <= coffeemachine.length; i ++) {
    console.log(coffeemachine[i]);
}
