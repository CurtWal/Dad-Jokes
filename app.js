'use strict'
console.log('working');

// grab the joke button from html
const jokeBtn = document.querySelector(".getaJoke");

// grab the div class named jokes from the html doc
const jokeDiv = document.querySelector(".jokes");

// add an event to button when clicked
jokeBtn.addEventListener("click", function(){

    // get the website with the dad jokes to be used
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(function(response){
        return response.json();
    })
    // write the dad jokes to the html doc
    .then(function(data){
        jokeDiv.textContent = data.joke;
        console.log(data.joke);
    })
});