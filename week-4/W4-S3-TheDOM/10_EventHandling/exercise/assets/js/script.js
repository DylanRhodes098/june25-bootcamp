// 1. use document.getElementById to select the searchTerm Button
var searchTerm = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", onClickSearhButton);
var searchesId = document.getElementById("searches");

function onClickSearhButton() {

  // 4. use the value property of the searchInput to get the search term
  //TODO:
  var serachInputValue = searchTerm.value;
  console.log (serachInputValue);

  // 5. select the searches div using document.getElementById
  //TODO:
  var searchesId = document.getElementById("searches");

  // 6. create a new li element using document.createElement
  //TODO:

    var newLiElement = document.createElement ("li")
    newLiElement.className = "li";
    searchesId.appendChild(newLiElement);
    newLiElement.textContent = "Account Settings";

  // 7. set the innerHTML of the new paragraph to the search term
  //TODO:
  newLiElement.textContent = serachInputValue;

  // 8. append the new paragraph to the searches div
  //TODO:
}