console.log ('JavaScript file has been called sucessfully.');

// Global variables.

let questionNumber = 0; // Set for start, currently also used for diagnostics.
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';
let questions;
let correctPosition;
let answerSelection;
let userScore = 0; // Set user score for start.
let robotScore = 0; // Set robot score for start.
let userScoreDisplay = document.getElementById('user-score');
let robotScoreDisplay = document.getElementById('robot-score');

// Global functions.

// Retrieves the questions and check the retreival in console.
async function goGetApi() {
    let apiData = await fetch(apiUrl);
    questions = await apiData.json();
    console.log('Questions have been retrieved successfully.'); // Tells me that this function is operating.
    return questions;
}

goGetApi().then(
    function() {playTheGame()}
);

// Decides who's turn it is, starting with questionNumber earlier set to 0 for consistent use in the questions array.
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
    let buttonUno = document.getElementById('answer-one');
    let buttonDos = document.getElementById('answer-two');
    let buttonTres = document.getElementById('answer-three');
    let buttonAudi = document.getElementById('answer-four');
    buttonUno.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonDos.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonTres.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonAudi.style.backgroundColor = 'rgb(150, 150, 150)';

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

// Displays the question in the question-box div.
function displayQuestion() {
    let questionDisplay = document.getElementById('question');
    questionDisplay.innerHTML = (questions.results[questionNumber].question);
}

// Calculate a random position for the correct answer, and display the correct answer in the correct position among incorrect answers in the other positions.
function displayAnswers() {
    correctPosition = Math.floor(Math.random() * 4) + 1; // Calculate which position to place the correct answer.
    let incorrectPosition = 0; // Set incorrect position for incrementing.
    let answerOne = document.getElementById('answer-one');
    let answerTwo = document.getElementById('answer-two');
    let answerThree = document.getElementById('answer-three');
    let answerFour = document.getElementById('answer-four');
    console.log(correctPosition);
    // Handle position 1.
    if (correctPosition === 1) { // Check if position is "correct" position.
        answerOne.innerHTML = (questions.results[questionNumber].correct_answer); // Populate with correct answer if so.
    } else {
        answerOne.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]); // Populate with incorrect answer if not.
        incorrectPosition++; // Increment incorrect answer so it isn't inadvertantly reused.
    }
    // 2
    if (correctPosition === 2) {
        answerTwo.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerTwo.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
    // 3
    if (correctPosition === 3) {
        answerThree.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerThree.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
    // 4
    if (correctPosition === 4) {
        answerFour.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerFour.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
}

// User answer selection
function answerOneSelect() {
    buttonOne.style.backgroundColor = 'rgb(180, 180, 180)';
    buttonTwo.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonThree.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonFour.style.backgroundColor = 'rgb(150, 150, 150)';
    answerSelection = 1;
}
function answerTwoSelect() {
    buttonOne.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonTwo.style.backgroundColor = 'rgb(180, 180, 180)';
    buttonThree.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonFour.style.backgroundColor = 'rgb(150, 150, 150)';
    answerSelection = 2;
}
function answerThreeSelect() {
    buttonOne.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonTwo.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonThree.style.backgroundColor = 'rgb(180, 180, 180)';
    buttonFour.style.backgroundColor = 'rgb(150, 150, 150)';
    answerSelection = 3;
}
function answerFourSelect() {
    buttonOne.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonTwo.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonThree.style.backgroundColor = 'rgb(150, 150, 150)';
    buttonFour.style.backgroundColor = 'rgb(180, 180, 180)';
    answerSelection = 4;
}

let buttonOne = document.getElementById('answer-one');
buttonOne.addEventListener('click', answerOneSelect);
let buttonTwo = document.getElementById('answer-two');
buttonTwo.addEventListener('click', answerTwoSelect);
let buttonThree = document.getElementById('answer-three');
buttonThree.addEventListener('click', answerThreeSelect);
let buttonFour = document.getElementById('answer-four');
buttonFour.addEventListener('click', answerFourSelect);

// User answer submission

function answerCheck() {
    if (correctPosition === answerSelection) {
        console.log('Answer correct!'); // Diagnostic
        if (player === 'User') {
            userScore++;
        } else if (player === 'Robot') {
            robotScore++;
        }
    } else {
        console.log('Answer incorrect!'); // Diagnostic
        console.log('User score is now ' + userScore);
    }
    userScoreDisplay.innerHTML = (userScore);
    robotScoreDisplay.innerHTML = (robotScore);
    questionNumber++; //Increment qustion number
    winLoseOrTie();
    //winLoseOrTie it questionNumber < 10 came from here.
}

let buttonCheck = document.getElementById('button-check');
buttonCheck.addEventListener('click', answerCheck);

// Calculates if there is a winner, or need for a tie breaker question

function winLoseOrTie() {
    console.log("It's question " + questionNumber + ' and the score is: User ' + userScore + ' Robot ' + robotScore);
    if (questionNumber === 10) {
        if (userScore == robotScore) {
            console.log('This game is tied and will move to a bonus round.')
            calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot
            if (player === 'User') {
                userTurn();
            } else if (player === 'Robot');
                robotTurn();
        } else if (userScore > robotScore) {
            console.log('User has won!');
        } else if (userScore < robotScore) {
            console.log('The robots have won and we have reached singularity.');
        }
    } else if (questionNumber < 10) {
        calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot
        if (player === 'User') {
            userTurn();
        } else if (player === 'Robot');
            robotTurn();
    } else if (questionNumber > 10) {
        console.log('How did you get here?');
    }
}

// Starts gameplay after the questions have been retrieved.
function playTheGame() {
    calculateWhoIsAnswering();
    userTurn();
    userScoreDisplay.innerHTML = (userScore);
    robotScoreDisplay.innerHTML = (robotScore);
}

function userTurn() {
    changeDiv();
    displayQuestion();
    displayAnswers();
}

function robotTurn() {
    changeDiv();
    displayQuestion();
    displayAnswers();
}


/*
// User functions

function displayTheCorrectAnswer () {

}

function robotHasToThinkAboutIt () {

}

function calculateRobotAnswer () {

}

/* function userCheckAnswer () {

}

function displayCorrectAnswer () {

}

function calculateWinner () {

}

function calculateIfTieBreaker () {

}

function showWinner () {
    
}

*/