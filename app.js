function favLearning() {
    
    let FavoriteTypeOfLearning = prompt("What is your favorite way to learn - traditional or virtual?");

    if (FavoriteTypeOfLearning.toLowerCase() == 'traditional') {
        alert("That is fantastic. We can help you create your new brick-and-mortar school!!");
    } else if (FavoriteTypeOfLearning.toLowerCase() == 'virtual') {
        alert("That is fantastic. We can help you create your new virtual school!!");
    } else  {
        alert("We are experts in all types of learning models.");
    }
} 
function virtualOption(){
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

    if (time <= 11){
        alert('Good Morning!');
    } else if (time <= 18){
        alert('Good Afternoon!');
    } else if(time <=24){
        alert('Good Evening!');
    } else {
        alert('Time does not exist');
        askTime();
    }
}
function askQuestion(){
    let LearnMore = prompt("Would you like to learn more?");

    if (LearnMore.toLowerCase() == "yes") {
        alert("Super, Dr. Ortiz-Brewster will call you soon.");
    } else if (LearnMore.toLowerCase() == "no") {
        alert("That is fine. Let us know when you are ready to discuss this opportunity in the near future.");
    } else  {
        alert("Let us know if we can be of assistance.");
    }
}
function showPic(){
    const userNum = prompt("How many times do you wanna see a funny picture?");

    for(let i = 0; i < userNum; i++){
        document.write("<img src='download.jpg' style='width:300px'/>");
    }
}
function quiz(){
    favLearning();
    virtualOption();
    askTime();
    askQuestion();
    showPic();
}
quiz()