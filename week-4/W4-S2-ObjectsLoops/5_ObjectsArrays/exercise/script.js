// create your coffee object array here
let coffee = [{
    type: "latte",
    milk: true,
    customer: "jane"
},
{
    type: "cappuchino",
    milk: true,
    customer: "harry"
},
{
    type: "americano",
    milk: false,
    customer: "dan"
},
];

function reciept(a, b, c) {
    return a + " " + b + " " + c 
};



for (let i = 0; i <= coffee.length; i++) {
    console.log (`name: ${coffee[i].customer}, type: ${coffee[1].type}, milk: ${coffee[i].milk}`);
}