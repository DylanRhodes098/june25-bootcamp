// TODO: Add 2 new items to the sidebar called "Register" and "Help".
let sideBarEl = document.querySelector(".sidebar");
let ulEl = document.querySelector("ul");

console.log(ulEl);

var registerEl = document.createElement("li") 
registerEl.className = "register";
ulEl.appendChild(registerEl);

registerEl.textContent = "Register";

var helpEl = document.createElement("li");
helpEl.className = "Help"
ulEl.appendChild(helpEl);
helpEl.textContent = "Help"

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
