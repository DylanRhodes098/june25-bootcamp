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

coffeemachine.push ({
    type:"caramel",
    customer:"ed",
});

coffeemachine.push({
    type:"cappa",
    customer:"james",
});

coffeemachine[0].type = "james";

coffeemachine[1].customer = ["harry", "megan"];

console.log(coffeemachine);