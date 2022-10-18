console.log ('JavaScript file has been called sucessfully.');

// Global variables.

let questionNumber = 0; // Set for start.
let apiUrl = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';
let userName;
let questions;
let correctPosition;
let answerSelection;
let halfRound = 1;
let userScore = 0; // Set user score for start.
let robotScore = 0; // Set robot score for start.
let userScoreDisplay = document.getElementById('user-score');
let robotScoreDisplay = document.getElementById('robot-score');

// Global functions.

function getUsername() {
    console.log('Functionnnnnnnn.')
    let userNameText = document.getElementById('username');
    userName = userNameText.value;
    console.log(userName);
    document.getElementById('user-name-display').innerHTML = (userName);
    document.getElementById('cover').style.visibility = ('hidden');
}

let usernameButton = document.getElementById('user-name-button')
usernameButton.addEventListener('click', getUsername);

// Retrieves the questions and check the retreival in console.
async function goGetApi() {
    let apiData = await fetch(apiUrl);
    questions = await apiData.json();
    console.log('Questions have been retrieved successfully.'); // Tells me that this function is operating.
    return questions;
}

// Calls the function to go get the questions, and starts the game when the questions are loaded.
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
    halfRound++; // Passed to whatRoundIsIt().
    console.log('It is the ' + player + "'s turn.");
}

// Converts the question number to round number, for style purposes.
function whatRoundIsIt() {
    if (halfRound < 12) {
        let itIsThisRound = Math.floor(halfRound / 2);
        document.getElementById('round-display').innerHTML = ('Round ' + itIsThisRound);
    } else {
        document.getElementById('round-display').innerHTML = ('Tie Breaker');
    }
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
    // This section checks the window width before reorienting the div.
    let questionBox = document.getElementById('question-box');
    if (window.matchMedia('(min-width: 576px)').matches) {
        if (player === 'User') {
            questionBox.style.flexDirection = 'row';
        } else if (player === 'Robot') {
            questionBox.style.flexDirection = 'row-reverse';
        }
    }
    //This section changes the player image.
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
    // Handle position 1.
    if (correctPosition === 1) { // Check if position is "correct" position.
        answerOne.innerHTML = (questions.results[questionNumber].correct_answer); // Populate with correct answer if so.
    } else {
        answerOne.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]); // Populate with incorrect answer if not.
        incorrectPosition++; // Increment incorrect answer so it isn't inadvertantly reused.
    }
    // Handle position 2.
    if (correctPosition === 2) {
        answerTwo.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerTwo.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
    // Handle position 3.
    if (correctPosition === 3) {
        answerThree.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerThree.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
    // Handle position 4.
    if (correctPosition === 4) {
        answerFour.innerHTML = (questions.results[questionNumber].correct_answer);
    } else {
        answerFour.innerHTML = (questions.results[questionNumber].incorrect_answers[incorrectPosition]);
        incorrectPosition++;
    }
    // Calls function to handle robot time countdown.
    if (player === 'Robot') {
        robotWillAnswerIn();
    }
}

// User answer selection, but only if it is user's turn.
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

// Generate robot answer. By changing (robotThinking < XX) developer can change how often the robot gets answers right. 
// By setting answerSelection to 5, the robot cannot get it right, preventing the robot from accidentally getting it right and changing the odds.
function robotAnswer() {
    let robotThinking = Math.floor(Math.random() * 100);
    if (robotThinking < 1) { 
        answerSelection = correctPosition;
    } else {
        answerSelection = 5
    }
}

// User answer submission.
function answerCheck() {
    if (correctPosition === answerSelection) {
        if (player === 'User') {
            userScore++;
        } else if (player === 'Robot') {
            robotScore++;
        }   
    }
    userScoreDisplay.innerHTML = (userScore);
    robotScoreDisplay.innerHTML = (robotScore);
    questionNumber++; // Increment question number.
    winLoseOrTie();
}

// Hold game until robot is "ready" to answer.
function robotWillAnswerIn() {
    let countDown = 5;
    let robotCountdown = setInterval(function(){
    if(countDown <= 0){
        clearInterval(robotCountdown);
        let submitButton = document.getElementById('button-check');
        submitButton.removeAttribute('disabled');
        document.getElementById('prompt').innerHTML = ('Ready!');
    } else {
        let submitButton = document.getElementById('button-check');
        submitButton.setAttribute('disabled', 'disabled');
        document.getElementById('prompt').innerHTML = ('Calculating ' + countDown);
    }
    countDown -= 1;
    }, 1000);
}

// Check that an answer has been selected before letting user submit.
function isThereAnAnswer() {
    if (player === 'User') {
        if (answerSelection === 0) {
            alert('Select an answer, our fate depends on it.');
        } else {
            answerCheck();
        }
    } else if (player === 'Robot') {
        robotAnswer();
        answerCheck();
    }
}

let buttonCheck = document.getElementById('button-check');
buttonCheck.addEventListener('click', isThereAnAnswer);

// Calculates if there is a winner, or need for a tie breaker question
function winLoseOrTie() {
    if (questionNumber === 10) { // If each player has gotten 5 questions... 
        if (userScore == robotScore) { // And the scores are the same, it moves on to the last question.
            calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot.
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
        calculateWhoIsAnswering(); // Decide if the next turn is the user or the robot.
        if (player === 'User') {
            userTurn();
        } else if (player === 'Robot');
            robotTurn();
    } else if (questionNumber > 10) {
        if (userScore > robotScore) {
            userWins();
        } else if (userScore >= robotScore) {
            robotWins();
        }
    }
}

// These two functions display winner text and change the art. This will change to a div that hovers over the game, and asks if the player wants to play again.
function userWins() {;
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

// These two functions run the game between questions.
function userTurn() {
    whatRoundIsIt();
    changeDiv();
    displayQuestion();
    displayAnswers();
}

function robotTurn() {
    whatRoundIsIt();
    changeDiv();
    displayQuestion();
    displayAnswers();
}


/*

indicate chosen answer, correct answer.

cover div!
accept and verify user name, and display it (come up with robot names, that it will choose at random, and display it)

another cover div!
declare the winner, ask the user if they would like to play the game.

*/