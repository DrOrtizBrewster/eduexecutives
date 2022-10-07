 let virtualQuestion = prompt("How long has virtual learning been around? Pick either 1986 or 1990");
    if (virtualQuestion.toLowerCase() == "1986") {
        alert("You are brilliant!");
    } else if (virtualQuestion.toLowerCase() == "1990") {
        alert("Sorry, that is incorrect. Please try again.");
    } else  {
        alert("Sorry, that is incorrect.");
    }