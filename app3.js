function askErrorQuestion(){
    let virtualQuestion = prompt("How long has virtual learning been around? Pick a year between 1980 and 2000");
    if (virtualQuestion.toLowerCase() == "1986") {
        document.write("You are brilliant!");
    } else  {
        document.write("Sorry, that is incorrect. Try again, but this time pick a year between 1982 and 1986.");
    }