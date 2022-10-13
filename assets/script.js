console.log ('JavaScript file has been called sucessfully.');

// Global variables

let questionNumber = 0;
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';

// Global functions

async function goGetApi() {
    let apiData = await fetch(apiUrl);
    let questions = await apiData.json();
    console.log('Questions have been retrieved successfully.'); // Tells me that this function is operating.
    console.log(questions.results[0].question); // Logs first question to check against iteration.
    console.log(questions.results[questionNumber].question); // These five lines give me reference for building the game later.
    console.log(questions.results[questionNumber].correct_answer);
    console.log(questions.results[questionNumber].incorrect_answers[0]);
    console.log(questions.results[questionNumber].incorrect_answers[1]);
    console.log(questions.results[questionNumber].incorrect_answers[2]);
    console.log('You did it you magnificent bastard.'); // Logs a motivational message to keep me from crying.
}

goGetApi();

function calculateWhoIsAnswering () {
    let playerQuery = (questionNumber + 2) % 2;
    if (playerQuery) {
        player = 'Robot';
    } else {
        player = 'User';
    }
    console.log('It is the ' + player + "'s turn.");
}

calculateWhoIsAnswering();


/*
// User functions
function displayUserQuestion () {

}

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