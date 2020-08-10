//Defining varaibles and retrieving desired HTML elements
let headerMain = document.getElementById("main-header");
let instructions = document.getElementById("instructions");
let minutesDisplay = document.getElementById("minutes-display");
let secondsDisplay = document.getElementById("seconds-display");
let startButton = document.getElementById("begin");


//Setting variables for each question included in the quiz
const question1 = {
    question: "What does API stand for?",
    a: "Application Personal Interface",
    b: "Application Programming Interchange",
    c: "Automatic Programming Interface",
    d: "Application Programming Interface",
};

const question2 = {
    question: "Which of the following is NOT included in the CSS box model?",
    a: "Margin",
    b: "Border radius",
    c: "Padding",
    d: "Border",
};

const question3 = {
    question: "Which of the following removes whitespace characters from a string?",
    a: "ParseInt()",
    b: "CharAt()",
    c: "Trim()",
    d: "Push()",
};

const question4 = {
    question: "Where should an external JavaScript page ideally be linked in the HTML document?",
    a: "After every other element within the <body> tag",
    b: "Within the <head> tag",
    c: "After the closing <body> tag",
    d: "Immediately following the opening <body> tag"
};

const question5 = {
    question: "What are the following examples of: href, src, style?",
    a: "Variables",
    b: "Arguments",
    c: "Styles",
    d: "Attributes"
};

const question6 = {
    question: "The first item in an array has an index of:",
    a: "[firstChild]",
    b: "[1]",
    c: "[0]",
    d: "[arr1]"
};

const question7 = {
    question: "Which git command will create a new file?",
    a: "pwd",
    b: "touch",
    c: "mkdir",
    d: "rm -rf"
};

const question8 = {
    question: "A function without a declared name is called a ____ function.",
    a: "Blank declaration",
    b: "Anonymous",
    c: "Arrow",
    d: "Empty"
};

const question9 = {
    question: "A confirm returns what data type?",
    a: "A Boolean",
    b: "A Number",
    c: "A String",
    d: "An Object"
};

const question10 = {
    question: "When the design of a page changes at a specified device width, that is called a:",
    a: "Trigger point",
    b: "Switch point",
    c: "Viewport",
    d: "Breakpoint"
};

//Array for local storage keys
const keysArray = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

//Array containing each question
const questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//Placing each question into the local storage
for (i = 0; i < questionArray.length; i++) {
localStorage.setItem(keysArray[i], JSON.stringify(questionArray[i]));
};



//Function starts timer and sets up the first question when event listener is triggered
function startTimer() {
    //Removes the landing page content
    instructions.remove();
    startButton.remove();
    //Creates elements that will house the questions
    let header = document.createElement("h3");
    document.body.appendChild(header);
    let list = document.createElement("ol");
    header.appendChild(list);
    for (i = 0; i < 4; i++) {
        let listItem = document.createElement("li");
        list.appendChild(listItem);
        let button = document.createElement("button");
        listItem.appendChild(button);
    };



    let totalMinutes = 5;
    let totalSeconds = totalMinutes * 60;

    const interval = setInterval( function() {
        totalSeconds--;
        secondsDisplay.textContent = Math.floor[totalSeconds / 5];


        if (totalSeconds <= 0) {
            clearInterval(interval);
        };
    }, 1000);

};





startButton.addEventListener("click", startTimer);

    