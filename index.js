var randomNumber1 = Math.floor(Math.random()*6)+1; //random number generation
var randomDiceImage = "dice" + randomNumber1 + ".png";//selecting dice image in images folder
var randomImageSource = "images/" + randomDiceImage; //selecting image from dice1-dice6
var img1 = document.querySelectorAll("img")[0];//selecting attribute
img1.setAttribute("src" , randomImageSource );// changing source

var image2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice" + image2 +".png";
var randomImageSource= "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource);

if(randomNumber1 > image2){
   document.querySelector("h1").innerHTML = "Player1 Wins ";
}else if(randomNumber1 < image2) {
   document.querySelector("h1").innerHTML = "Player2 Wins ";}
 else
 {document.querySelector("h1").innerHTML = " Draw! ";}