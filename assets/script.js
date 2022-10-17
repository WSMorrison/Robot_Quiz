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
    if (player === 'User') {
        buttonUno.removeAttribute('disabled');
        buttonDos.removeAttribute('disabled');
        buttonTres.removeAttribute('disabled');
        buttonAudi.removeAttribute('disabled');
    } else if (player === 'Robot') {
        buttonUno.setAttribute('disabled', 'disabled');
        buttonDos.setAttribute('disabled', 'disabled');
        buttonTres.setAttribute('disabled', 'disabled');
        buttonAudi.setAttribute('disabled', 'disabled');
    }

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
    answerSelection = 0; // Set answer selection to 0 so if no answer is selected I can trigger an alert or something.
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

// User answer selection, but only if it is user's turn
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

// Generate robot answer. By changing (robotThinking < XX) developer can change how often the robot gets answers right. By setting wrong answerSelection to 5, the robot cannot get it right.

function robotAnswer() {
    let robotThinking = Math.floor(Math.random() * 100);
    if (robotThinking < 80) { 
        answerSelection = correctPosition;
    } else {
        answerSelection = 5
    }
}

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
}

function isThereAnAnswer() {
    if (player === 'User') {
        if (answerSelection === 0) {
            alert('Select an answer, our fate depends on it.');
        } else {
            answerCheck();
        }
    } else if (player === 'Robot') {
        robotAnswer();
        console.log(answerSelection);
        answerCheck();
    }
}

let buttonCheck = document.getElementById('button-check');
buttonCheck.addEventListener('click', isThereAnAnswer);

// Calculates if there is a winner, or need for a tie breaker question
function winLoseOrTie() {
    console.log("It's question " + questionNumber + ' and the score is: User ' + userScore + ' Robot ' + robotScore);
    if (questionNumber === 10) { // If each player has gotten 5 questions... 
        if (userScore == robotScore) { // And the sscores are the same, it moves on to the last question.
            console.log('This game is tied and will move to a bonus round.')
            calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot
            if (player === 'User') {
                userTurn();
            } else if (player === 'Robot');
                robotTurn();
        } else if (userScore > robotScore) {
            userWins();
        } else if (userScore < robotScore) {
            robotWins();
        }
    } else if (questionNumber < 10) {
        calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot
        if (player === 'User') {
            userTurn();
        } else if (player === 'Robot');
            robotTurn();
    } else if (questionNumber > 10) {
        console.log('How did you get here?');
        if (userScore > robotScore) {
            userWins();
        } else if (userScore >= robotScore) {
            robotWins();
        }
    }
}

function userWins() {
    console.log('User has won!');
    player = 'User';
    changeDiv();
    let userWinner = document.getElementById('player-picture');
    userWinner.style.background = 'url(.//assets/images/logo-user.png)'; // NEED NEW ART
    userWinner.style.backgroundPosition = 'center';
    userWinner.style.backgroundSize = 'cover';
    let questionDisplay = document.getElementById('question');
    questionDisplay.innerHTML = ('Congratulations! You have won and saved us from the malevolent robot overlords!');
}

function robotWins() {
    console.log('The robots have won and we have reached singularity.');
    player = 'Robot'
    changeDiv();
    let robotWinner = document.getElementById('player-picture');
    robotWinner.style.background = 'url(.//assets/images/logo-robot.png)'; // NEED NEW ART
    robotWinner.style.backgroundPosition = 'center';
    robotWinner.style.backgroundSize = 'cover';
    let questionDisplay = document.getElementById('question');
    questionDisplay.innerHTML = ('The robot has won! You will now sit inside its refrigerator and cool the robofood');
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