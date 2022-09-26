function askQuestion(){
    let LearnMore = prompt("Would you like to learn more?");
    if (LearnMore.toLowerCase() == "yes") {
        document.write("Super, Dr. Ortiz-Brewster will call you soon.");
    } else if (FavoriteTypeOfLearning.toLowerCase() == "no") {
        document.write("That is fine. Let us know when you are ready to discuss this opportunity in the near future.");
    } else  {
        document.write("Let us know if we can be of assistance.");
    }
}