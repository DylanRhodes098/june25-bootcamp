var searchTermEl = document.querySelector ("#searchTerm");
var buttonEl = document.querySelector ("#searchButton");
var ulEl = document.querySelector ("#searches");
var searchTermValueEl = searchTermEl.value;

buttonEl.addEventListener ("click", function(){
    var searchTermValueEl = searchTermEl.value;

    var liEl = document.createElement("li")
    liEl.className = "LiEl"
    ulEl.appendChild(liEl)
    liEl.textContent = searchTermValueEl
});

