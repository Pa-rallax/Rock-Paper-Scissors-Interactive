
var images = ["./R. P. S. images/Rock.png","./R. P. S. images/Paper.png","./R. P. S. images/Scissors.png"]

// Function for Computer
function whatItem(images){
var itemPosition1 = images.length;
var randoItemPosition1 = Math.floor(Math.random() * itemPosition1);
var randoPost1 =  images[randoItemPosition1]
return randoPost1;
}   
var func = whatItem(images);

document.querySelector("#butt").addEventListener("click", item)//RPS button


function item(images) {
 var computerMove = document.querySelector("img.img2").setAttribute("src",func);
var playerMove = document.getElementById("Items").value;


// Conditions to execute
if (playerMove === "Rock" && func === "./R. P. S. images/Paper.png"){
document.querySelector("h1").innerHTML ="<h1 id = 'comp'>Computer <span>WINS</span></h1>";
alert("Computer Wins 💻🏆")
}else if(playerMove === "Paper" && func === "./R. P. S. images/Scissors.png"){
document.querySelector("h1").innerHTML = "<h1 id = 'comp'>Computer <span>WINS</span></h1>";
alert("Computer Wins 💻🏆")
}else if(playerMove === "Paper" && func === "./R. P. S. images/Rock.png"){
document.querySelector("h1").innerHTML ="<h1 id = 'pl'>Player <span>WINS</span></h1>";
alert("Player Wins 🧔🏆👩")
}else if(playerMove === "Scissors" && func === "./R. P. S. images/Paper.png"){
document.querySelector("h1").innerHTML = "<h1 id = 'pl'>Player <span>WINS</span></h1>";
alert("Player Wins 🧔🏆👩")
}else if(playerMove === "Rock" && func === "./R. P. S. images/Scissors.png"){
document.querySelector("h1").innerHTML ="<h1 id = 'pl'>Player <span>WINS</span></h1>";
alert("Player Wins 🧔🏆👩")
}else if(playerMove === "Scissors" && func === "./R. P. S. images/Rock.png"){
document.querySelector("h1").innerHTML = "<h1  id = 'comp'>Computer <span>WINS</span></h1>";
alert("Computer Wins 💻🏆")
}else{
document.querySelector("h1").innerHTML = "<h1 id = 'tie'>Tie</h1>";
document.querySelector("h1").style.color = "black";
alert("It's a Tie 🤝")
}
}




//Excess...
  // Function for 1st Item
// function whatItem(images){
// var itemPosition = images.length;
// var randoItemPosition = Math.floor(Math.random() * itemPosition);
// var randoPost =  images[randoItemPosition]
// return randoPost;
// }
// var func = whatItem(images);
// var die1 = document.querySelector("img.img1").setAttribute("src",func);
//--------------------------//
// function selectItem(){
//   var item = document.getElementById("Items")
//   var Index = Items.selectedIndex
//   var Itemsel = Items.options[Index].text
// }
//   alert(Itemsel);


