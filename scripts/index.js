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

//Function starts timer and sets up the first question when event listener is triggered
function startTimer() {
    //Removes the landing page content
    instructions.remove();
    startButton.remove();

    //Sets the first question of the quiz and the attribute of correct answer
    pullNext();

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

    console.log("Timer starts, first question is set");
};



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
        arrItems = [item1, item2, item3, item4];
        for (i = 0; i < arrItems.length; i++) {
            arrItems[i].removeAttribute("class");
        };

        pullNext();
    };
};



let int = 0;
function pullNext() {
    //Sets the content to the new question from an array
    question.textContent =questionArr[int].question;
    item1.textContent = questionArr[int].a;
    item2.textContent = questionArr[int].b;
    item3.textContent = questionArr[int].c;
    item4.textContent = questionArr[int].d;
    

    //Correct answers are set for the given question
    if (questionArr[int] === question2 || question[int] === question4 || question[int] === question9 || question[int] === question10) {
        item1.setAttribute("class", "correct");
    }

    else if (questionArr[int] === question3 || question[int] === question8) {
        item2.setAttribute("class", "correct");
    }

    else if (questionArr[int] === question6 || question[int] === question7) {
        item3.setAttribute("class", "correct");
    }

    else if (questionArr[int] === question1 || question[int] === question5) {
        item4.setAttribute("class", "correct");
    }

    int++;
};





//Event listeners
startButton.addEventListener("click", startTimer);
userOptions.addEventListener("click", userGuess);