function favLearning() {
    let FavoriteTypeOfLearning = prompt("What is your favorite way to learn - traditional or virtual?");
    if (FavoriteTypeOfLearning.toLowerCase() == traditional) {
        alert("That is fantastic. We can help you create your new brick-and-mortar school!!");
    } else if (FavoriteTypeOfLearning.toLowerCase() == virtual) {
        alert("That is fantastic. We can help you create your new virtual school!!");
    } else  {
        alert("Great, we are experts in all types of learning models.");
    }
} 
function virtualQuestion(){
    let virtualQuestion = prompt("How long has virtual learning been around? Pick either 1986 or 1990.");

    if (virtualQuestion.toLowerCase() == "1986") {
        alert("You are brilliant!");
    } else if (virtualQuestion.toLowerCase() == "1990") {
        alert("Sorry, that is incorrect. Please try again.");
    } else  {
        alert("Sorry, that is incorrect.");
        virtualQuestion();
    }
}
function askTime(){
    let time = prompt('What time is it?');
    let message;

    if(time <= 11){
        message = 'Good Morning!';
    } else if (time <= 24){
        message = 'Good Afternoon!';
    }else {
        message = 'Time does not exist';
    }
}
function askQuestion(){
    let LearnMore = prompt("Would you like to learn more?");

    if (LearnMore.toLowerCase() == "yes") {
        document.write("Super, Dr. Ortiz-Brewster will call you soon.");
    } else if (LearnMore.toLowerCase() == "no") {
        document.write("That is fine. Let us know when you are ready to discuss this opportunity in the near future.");
    } else  {
        document.write("Let us know if we can be of assistance.");
    }
}
favLearning();
virtualQuestion();
askTime();
askQuestion();
