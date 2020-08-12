//Defining varaibles and retrieving desired HTML elements
const headerMain = document.getElementById("main-header");
const instructions = document.getElementById("instructions");
let minutesDisplay = document.getElementById("minutes-display");
let secondsDisplay = document.getElementById("seconds-display");
const startButton = document.getElementById("begin");
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
    question: "Which of the following is NOT included in the CSS box model?",
    a: "Margin",
    b: "Border radius",
    c: "Padding",
    d: "Border"
};

let question3 = {
    question: "Which of the following removes whitespace characters from a string?",
    a: "ParseInt()",
    b: "CharAt()",
    c: "Trim()",
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
    question: "Which git command will create a new file?",
    a: "pwd",
    b: "touch",
    c: "mkdir",
    d: "rm -rf"
};

let question8 = {
    question: "A function without a declared name is called a ____ function.",
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
    question: "When the design of a page changes at a specified device width, that is called a:",
    a: "Trigger point",
    b: "Switch point",
    c: "Viewport",
    d: "Breakpoint"
};


//Function starts timer and sets up the first question when event listener is triggered
function startTimer() {

    //Removes the landing page content
    instructions.remove();
    startButton.remove();

    //Sets the first question of the quiz and the attribute of correct answer
    question.textContent = question1.question;
    item1.textContent = question1.a;
    item2.textContent = question1.b;
    item3.textContent = question1.c;
    item4.textContent = question1.d;
    item4.setAttribute("class", "correct");

    //Timer setup
    let totalMin = 5;
    let totalSec = totalMin * 60;
    let secondsElapsed = 0;

    interval = setInterval(function() {
        secondsElapsed++;
        let remainingSec = totalSec - secondsElapsed;
        let remainingMin = Math.floor(remainingSec / 60);
        let remainderSeconds = remainingSec % 60;

        minutesDisplay.textContent = remainingMin;

        if (remainderSeconds < 10) {
            secondsDisplay.textContent = "0" + remainderSeconds;
        } else {
            secondsDisplay.textContent = remainderSeconds;
        };
    }, 1000);
};

function userGuess(event) {
    if (event.target.matches(".correct")) {
        points++;
        console.log("Points: " + points);
        pullNext();
    }
}


//Event listeners
startButton.addEventListener("click", startTimer);
userOptions.addEventListener("click", userGuess);

    