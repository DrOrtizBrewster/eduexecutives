let traditional = "traditional";
let virtual = "virtual";

let FavoriteTypeOfLearning = prompt("What is your favorite way to learn - traditional or virtual?");

if (FavoriteTypeOfLearning.toLowerCase() == traditional) {
    alert("That is fantastic. We can help you create your new brick-and-mortar school!!");
} else if (FavoriteTypeOfLearning.toLowerCase() == virtual) {
    alert("That is fantastic. We can help you create your new virtual school!!");
} else  {
    document.write("Great, we are experts in all types of learning models.");
}