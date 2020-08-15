//Defining varaibles and retrieving desired HTML elements
const headerMain = document.getElementById("main-header");
const instructions = document.getElementById("instructions");
const timer = document.getElementById("timer");
let minutesDisplay = document.getElementById("minutes-display");
let secondsDisplay = document.getElementById("seconds-display");
const startButton = document.getElementById("begin");
const timerContainer = document.getElementById("timer-container");
const container = document.getElementById("question-container");
const header = document.getElementById("question");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
const userOptions = document.getElementById("answer-list");
let points = 0;

console.log("Sanity Check");

//Setting variables for each question included in the quiz
let question1 = {
    question: "What does API stand for?",
    a: "Application Personal Interface",
    b: "Application Programming Interchange",
    c: "Automatic Programming Interface",
    d: "Application Programming Interface"
};

let question2 = {
    question: "To place an item in the local storage we use:",
    a: "localStorage.setItem()",
    b: "localStorage.storeItem()",
    c: "localStorage.sendItem()",
    d: "localStorage.pushItem()"
};

let question3 = {
    question: "Which of the following removes whitespace characters from a string?",
    a: "ParseInt()",
    b: "Trim()",
    c: "CharAt()",
    d: "Push()"
};

let question4 = {
    question: "Where should an external JavaScript page ideally be linked in the HTML document?",
    a: "After every other element within the <body> tag",
    b: "Within the <head> tag",
    c: "After the closing <body> tag",
    d: "Immediately following the opening <body> tag"
};

let question5 = {
    question: "What are the following examples of: href, src, style?",
    a: "Variables",
    b: "Arguments",
    c: "Styles",
    d: "Attributes"
};

let question6 = {
    question: "The first item in an array has an index of:",
    a: "[firstChild]",
    b: "[1]",
    c: "[0]",
    d: "[arr1]"
};

let question7 = {
    question: "Choose the option that is NOT a JavaScript data type:",
    a: "String",
    b: "Null",
    c: "Parameter",
    d: "Undefined"
};

let question8 = {
    question: "A function without a declared name is called a(n) ____ function.",
    a: "Blank declaration",
    b: "Anonymous",
    c: "Arrow",
    d: "Empty"
};

let question9 = {
    question: "A confirm returns what data type?",
    a: "A Boolean",
    b: "A Number",
    c: "A String",
    d: "An Object"
};

let question10 = {
    question: "Select the item that cannot be used to defind a variable",
    a: "Set",
    b: "Let",
    c: "Const",
    d: "Var"
};

const questionArr = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//Hide questions on landing page and set timer color
header.classList.add("hidden");
userOptions.classList.add("hidden");
minutesDisplay.classList.add("greenMin");
secondsDisplay.classList.add("greenSec");
let over = "";

const end = document.getElementById("end-display");
let int = 0;
let secondsElapsed = 0;


//Timer global variables
let totalMin = 5;
let totalSec = totalMin * 60;
let secondsLeft = "";

function timerBegin() {
    //Reset points and timer when new round begins
    points = 0;
    console.log(over);
    if (over === 1) {
        totalMin = 5; 
        totalSec = totalMin * 60;
        secondsLeft = "";
        secondsElapsed = 0;
    };

    interval = setInterval(function() {
        secondsElapsed++;
        secondsLeft = totalSec - secondsElapsed;
        let remainingMin = Math.floor(secondsLeft / 60);
        let remainderSeconds = secondsLeft % 60;

        minutesDisplay.textContent = remainingMin;

        //Changes timer color for the final minute
        if (remainingMin < 1) {
            minutesDisplay.classList.remove("greenMin");
            secondsDisplay.classList.remove("greenSec");
            minutesDisplay.classList.add("redMin");
            secondsDisplay.classList.add("redSec");
        };

        if (remainderSeconds < 10) {
            secondsDisplay.textContent = "0" + remainderSeconds;
        } else {
            secondsDisplay.textContent = remainderSeconds;
        };

        if (secondsLeft <= 0) {
            clearInterval(interval);
            gameOver();

        };
    }, 1000);
    landingSetup();
};

//Changes layout to display questions
function landingSetup() {
    over = 0;
    end.innerHTML = "";
    instructions.classList.add("hidden");
    startButton.classList.add("hidden");

    hiddenArr = [header, userOptions, timerContainer, minutesDisplay, secondsDisplay];
    for (i = 0; i < hiddenArr.length; i++) {
        hiddenArr[i].classList.remove("hidden");
    };

    visibleArr = [header, userOptions, timerContainer, minutesDisplay, secondsDisplay];
    for (i = 0; i < visibleArr.length; i++) {
        visibleArr[i].classList.add("visible");
    };
    
    int = 0;
    pullNext();
}

// //Function starts timer and sets up the first question when event listener is triggered
// function startTimer() {
//     console.log("over " + over);
//     //Hides landing page content, sets question, and clears interval
//     end.innerHTML = "";
//     instructions.classList.add("hidden");
//     startButton.classList.add("hidden");

//     hiddenArr = [header, userOptions, timerContainer, minutesDisplay, secondsDisplay];
//     for (i = 0; i < hiddenArr.length; i++) {
//         hiddenArr[i].classList.remove("hidden");
//     };

//     visibleArr = [header, userOptions, timerContainer, minutesDisplay, secondsDisplay];
//     for (i = 0; i < visibleArr.length; i++) {
//         visibleArr[i].classList.add("visible");
//     };
    
//     int = 0;
//     pullNext();

    
//     //Timer setup
//     let totalMin = 5;
//     let totalSec = totalMin * 60;
//     let secondsLeft = "";

//     interval = setInterval(function() {
//         secondsElapsed++;
//         secondsLeft = totalSec - secondsElapsed;
//         let remainingMin = Math.floor(secondsLeft / 60);
//         let remainderSeconds = secondsLeft % 60;

//         minutesDisplay.textContent = remainingMin;

//         //Changes timer color for the final minute
//         if (remainingMin < 1) {
//             minutesDisplay.classList.remove("greenMin");
//             secondsDisplay.classList.remove("greenSec");
//             minutesDisplay.classList.add("redMin");
//             secondsDisplay.classList.add("redSec");
//         };

//         if (remainderSeconds < 10) {
//             secondsDisplay.textContent = "0" + remainderSeconds;
//         } else {
//             secondsDisplay.textContent = remainderSeconds;
//         };

//         if (secondsLeft <= 0) {
//             clearInterval(interval);
//             gameOver();

//         };
//     }, 1000);

//     console.log("Timer starts, first question is set");
// };


//Actions taken for correct or incorrect answers
function userGuess(event) {
    if (event.target.matches(".correct")) {
        points++;
        console.log("Points: " + points);

        arrItems = [item1, item2, item3, item4];
        for (i = 0; i < arrItems.length; i++) {
            arrItems[i].removeAttribute("class");
        };

        pullNext();
    }
    else {
        secondsElapsed = secondsElapsed + 10;
        console.log(secondsElapsed);
        arrItems = [item1, item2, item3, item4];
        for (i = 0; i < arrItems.length; i++) {
            arrItems[i].removeAttribute("class");
        };

        pullNext();

        console.log("User has made a guess")
    };
};


//Function displays the next question to the user
function pullNext() {
    //If there are no more questions to be pulled, game over is triggered
    if (int >= questionArr.length) {
        clearInterval(interval);
        gameOver();
        return;
    };
    console.log(int, "question index")
    //Sets the content to the new question from an array
    header.textContent =questionArr[int].question;
    item1.textContent = questionArr[int].a;
    item2.textContent = questionArr[int].b;
    item3.textContent = questionArr[int].c;
    item4.textContent = questionArr[int].d;
    

    //Correct answers are set for the given question
    if (questionArr[int] == question2 || questionArr[int] == question4 || questionArr[int] == question9 || questionArr[int] == question10) {
        item1.setAttribute("class", "correct");
    }

    else if (questionArr[int] == question3 || questionArr[int] == question8) {
        item2.setAttribute("class", "correct");
    }

    else if (questionArr[int] == question6 || questionArr[int] == question7) {
        item3.setAttribute("class", "correct");
    }

    else if (questionArr[int] == question1 || questionArr[int] == question5) {
        item4.setAttribute("class", "correct");
    }

    int++;
};

//Create elements where user can submit their initials and score and high score is displayed
const finalScore = document.createElement("h3");
const initialsInput = document.createElement("input");
const submitBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const divMsg = document.createElement("div");
const highScore = document.createElement("h3");
let bestInitials = document.createElement("p");
let bestScore = document.createElement("p");



//Function sets up the game over page
function gameOver() {
    //Hide timer and questions from the page
    timerContainer.classList.add("hidden");
    minutesDisplay.classList.add("hidden");
    secondsDisplay.classList.add("hidden");
    header.classList.add("hidden");
    userOptions.classList.add("hidden");

    //Append the game over elements to the page
    endArr = [finalScore, initialsInput, submitBtn, resetBtn, divMsg, highScore, bestInitials, bestScore];
    for (i = 0; i < endArr.length; i++) {
        end.appendChild(endArr[i]);
    };

    initialsInput.setAttribute("placeholder", "User initials");
    finalScore.textContent = "Congratulations! Your final score is " + points; 
    submitBtn.textContent = "Submit!";
    resetBtn.textContent = "Try again?";
    resetBtn.classList.add("hidden");
    highScore.textContent = "The current high score is:"
    
    //Submit button triggers the userInfo function
    submitBtn.addEventListener("click", storeInfo);

    over = 1;
};

//User information is stored in the local storage
function storeInfo() {
    let userInfo = {
        initials: initialsInput.value.trim(),
        score: points,
    };

    if (userInfo.initials === "") {
        divMsg.innerText = "Please enter your initials";
        divMsg.setAttribute("class", "redText");
    }
    else {
    userInfo = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", userInfo);
    resetBtn.classList.remove("hidden");
    resetBtn.classList.add("visible");
    resetBtn.addEventListener("click", timerBegin);
    };

    loadScore(bestInitials, bestScore);
};

//User information is loaded and saved to the page until the next test
function loadScore(bestInitials, bestScore) {
    console.log(localStorage.getItem("userInfo"))
    let lastUser = JSON.parse(localStorage.getItem("userInfo"));
    bestInitials.textContent = "Int.: " + lastUser.initials;
    bestScore.textContent = "Score: " + lastUser.score;
    bestScore.setAttribute("value", lastUser.score);
};

//Event listeners
startButton.addEventListener("click", timerBegin);
userOptions.addEventListener("click", userGuess);