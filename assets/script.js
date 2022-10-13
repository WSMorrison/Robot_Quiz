console.log ('JavaScript file has been called correctly.');

// Global variables

let questionNumber = 1;
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';

// Global functions

async function goGetApi() {
    let apiData = await fetch(apiUrl);
    let questions = await apiData.json();
    console.log('fart!');
    console.log(questions);
    console.log();
}

goGetApi();

/*
function calculateWhoIsAnswering () {

}

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