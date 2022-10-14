console.log ('JavaScript file has been called sucessfully.');

// Global variables

let questionNumber = 0; // Set for start, currently used for diagnostics
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';
let questions;

// Global functions

// Retrieves the questions and check the retreival in console.
async function goGetApi() {
    let apiData = await fetch(apiUrl);
    questions = await apiData.json();
    console.log('Questions have been retrieved successfully.'); // Tells me that this function is operating.
    console.log(questions.results[0].question); // Logs first question to check against iteration.
    console.log(questions.results[questionNumber].question); // These five lines give me reference for building the game later.
    console.log(questions.results[questionNumber].correct_answer);
    console.log(questions.results[questionNumber].incorrect_answers[0]);
    console.log(questions.results[questionNumber].incorrect_answers[1]);
    console.log(questions.results[questionNumber].incorrect_answers[2]);

    return questions;
}

goGetApi().then(
    function() {playTheGame()}
);

// Decides who's turn it is, starting with questionNumber earlier set to 0 for consistent use in the questions array
function calculateWhoIsAnswering() { 
    let playerQuery = (questionNumber + 2) % 2;
    if (playerQuery) {
        player = 'Robot';
    } else {
        player = 'User';
    }
    console.log('It is the ' + player + "'s turn.");
}

// Changes the orientation of the question-box div and the image in the player-image div based on whose turn it is.
function changeDiv() {
    let questionBox = document.getElementById('question-box');
    // Checks the window width before reorienting the div.
    if (window.matchMedia('(min-width: 576px)').matches) {
        if (player === 'User') {
            questionBox.style.flexDirection = 'row';
        } else if (player === 'Robot') {
            questionBox.style.flexDirection = 'row-reverse';
        }
    }
    // Changes the player image.
    let playerImage = document.getElementById('player-picture');
    if (player === 'User') {
        playerImage.style.background = 'url(.//assets/images/player-user.png)';
        playerImage.style.backgroundPosition = 'center';
        playerImage.style.backgroundSize = 'cover';
    } else if (player === 'Robot') {
        playerImage.style.background = 'url(.//assets/images/player-robot.png)';
        playerImage.style.backgroundPosition = 'center';
        playerImage.style.backgroundSize = 'cover';
    } else {
        playerImage.style.background = 'red';
    }
}

// Displays the question in the question-box div
function displayUserQuestion () {
    let questionDisplay = document.getElementById('question');
    questionDisplay.innerHTML = (questions.results[questionNumber].question);
}

// Starts gameplay after the questions have been retrieved.
function playTheGame() {
    calculateWhoIsAnswering();
    displayUserQuestion();
    changeDiv(); // Think about if this should be here or nested inside another function. 
    console.log('You did it you magnificent bastard.'); // Logs a motivational message to keep me from crying.
}


/*
// User functions
function retrieveUserAnswer () {

}

function userCheckAnswer () {

}

function displayCorrectAnswer () {

}

function calculateUserCorrect () {

}

function updateUserScore () {

}


// Robot functions
function displayRobotQuestion () {

}

function robotHasToThinkAboutIt () {

}

function calculateRobotAnswer () {

}

/* function userCheckAnswer () {

}

function displayCorrectAnswer () {

}*/ /*

function updateRobotScore () {

}

function calculateWinner () {

}

function calculateIfTieBreaker () {

}

function showWinner () {
    
}

*/