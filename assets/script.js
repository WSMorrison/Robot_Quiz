console.log ('JavaScript file has been called sucessfully.');

// Global variables

let questionNumber = 1;
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';

// Global functions

async function goGetApi() {
    let apiData = await fetch(apiUrl);
    let questionsRetrieved = await apiData.json();
    console.log('Questions have been retrieved successfully.');
    console.log(questionsRetrieved);
    console.log(questionsRetrieved.results[1].question);
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