-Main page with description of the objective and a start button
    -When start button is clicked a timer will start counting down(event listener)
    -Timer will count down from 5 minutes
-Questions set in local storage via JSON.stringify().
-First question is presented to the user, and is pulled from 
local storage using JSON.parse().
-When the correct answer is clicked, the question is removed and
the next will be retrieved from the storage.
    -10 questions long
    -10 points per question
-If questions are answered incorrectly then time is subtracted from the timer
    -User will lose 10 seconds with each incorrect answer
-All answers in the list will have a wrapper with an even listener that when it matches the correct/incorrect item will process the desired action. 
-Game over when time = 0 OR the user has answered all of the questions correctly
    -At game over the user will save intials and their score to the local storage and have the info presented to them on the screen.