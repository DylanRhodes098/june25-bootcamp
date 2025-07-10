var sidebarEl = document.querySelector("ul");
var reportLi = document.querySelectorAll("li")[2];

var accountLi = document.createElement("li")
accountLi.className = "accountLi"
sidebarEl.appendChild(accountLi)
accountLi.textContent = "Account Settings";

var switchLi = document.createElement("li")
switchLi.className = "switchLi"
sidebarEl.appendChild(switchLi)
switchLi.textContent = "Switch Account";

var helpLi = document.createElement("a")
helpLi.className = "helpLi"
reportLi.appendChild(helpLi)
helpLi.textContent = "help";
helpLi.setAttribute ("href", "https://www.google.com/?client=safari&channel=iphone_bm")
helpLi.style.color = "#FFFFFF"