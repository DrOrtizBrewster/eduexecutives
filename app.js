prompt("What is your favorite way to learn - traditional or virtual?");
let traditional = "Traditional";
let otherTraditional = "traditional";
let FavoriteTypeOfLearning = Traditional;

if (FavoriteTypeOfLearning =="Traditional") {
    console.log("That is fantastic. We can help you create your new traditional school!!"); 
} else if (FavoriteTypeOfLearning.toLowerCase == "traditional") {
    console.log("That is fantastic. We can help you create your new traditional school!!");
} else  {
    console.log("Great, we are experts in virtual learning too.");

let userType = prompt("What is your favorite way to learn - traditional or virtual?");
console.log(userType);
var username = prompt();



document.getElementById("button").onclick = function() {
    document.getElementById("Yes").innerHTML = "Wonderful News! We will contact you.";
    document.getElementById("button").style.display = "none";
}