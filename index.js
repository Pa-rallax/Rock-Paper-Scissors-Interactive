
var images = ["Rock.png","Paper.png","Scissors.png"]

// Function for Computer
function whatItem(images){
var itemPosition1 = images.length;
var randoItemPosition1 = Math.floor(Math.random() * itemPosition1);
var randoPost1 =  images[randoItemPosition1]
return randoPost1;
}   
var func = whatItem(images);
var computerMove = document.querySelector("img.img2").setAttribute("src",func);
var randomizeButton= document.querySelector("#butt");
// randomizeButton.onclick
randomizeButton.addEventListener("click", item)//RPS button


function item() {
//  var computerMove = document.querySelector("img.img2").setAttribute("src",func);
var func = whatItem(images);
var computerMove = document.querySelector("img.img2").setAttribute("src",func);
var randomizeButton= document.querySelector("#butt");
var playerMove = document.getElementById("Items").value;


// Conditions to execute
if (playerMove === "Rock" && func === "Paper.png"){
  document.querySelector("img.img1").setAttribute("src","Rock.png");
document.querySelector("h1").innerHTML ="<h1 id = 'comp'>Computer <span>WINS</span></h1>";
}else if(playerMove === "Paper" && func === "Scissors.png"){
  document.querySelector("img.img1").setAttribute("src","Paper.png");
document.querySelector("h1").innerHTML = "<h1 id = 'comp'>Computer <span>WINS</span></h1>";
}else if(playerMove === "Paper" && func === "Rock.png"){
  document.querySelector("img.img1").setAttribute("src","Paper.png");
document.querySelector("h1").innerHTML ="<h1 id = 'pl'>Player <span>WINS</span></h1>";
}else if(playerMove === "Scissors" && func === "Paper.png"){
  document.querySelector("img.img1").setAttribute("src","Scissors.png");
document.querySelector("h1").innerHTML = "<h1 id = 'pl'>Player <span>WINS</span></h1>";
}else if(playerMove === "Rock" && func === "Scissors.png"){
  document.querySelector("img.img1").setAttribute("src","Rock.png");
document.querySelector("h1").innerHTML ="<h1 id = 'pl'>Player <span>WINS</span></h1>";
}else if(playerMove === "Scissors" && func === "Rock.png"){
  document.querySelector("img.img1").setAttribute("src","Scissors.png");
document.querySelector("h1").innerHTML = "<h1  id = 'comp'>Computer <span>WINS</span></h1>";
}else{
document.querySelector("h1").innerHTML = "<h1 id = 'tie'>Tie</h1>";
document.querySelector("h1").style.color = "black";
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


