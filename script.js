//create a random number from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);


//create random adress to pick images
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";


//select source 

let randomImage1 = document.querySelectorAll("img")[0];
let randomImage2 = document.querySelectorAll("img")[1];

//put in the destination
randomImage1.setAttribute("src", randomImageSource1);
randomImage2.setAttribute("src", randomImageSource2);


//change the heading to show the winner according to the results

let winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Player 1 wins";
}
else if(randomNumber1===randomNumber2) {
    winner.innerHTML = "Draw";
}
else {
    winner.innerHTML="Player 2 Wins"
}

//add a button to refresh the page
let button = document.querySelector("button");
button.addEventListener("click", function() {
    window.location.reload();
})
