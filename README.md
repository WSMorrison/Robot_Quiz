# Nefarious Robot

Nefarious Robot is a trivia game that pits the human user against a "robot" opponent played by the computer.

The trivia game is up to eleven questions long, giving the human user and the computer one question each across five rounds. The game tracks and displays the score throughout the game. The game displays the the round as the game progresses. If at the end of five rounds the user has answered more questions correctly than the computer, the user wins. If the computer has answered more questions correctly, the robot wins. If there is a tie at the end of five rounds, there is a bonus round that gives only the user a question, a correct answer resulting in the user winning the game.

When the page is loaded, the game is covered my a mostly opaque cover that explains the rules and asks the user for their username. The username must be between one and six characters long, and the input field is validated. If the username is not present, or if it is longer than six characters, and alert is displayed. When the username is validated, the cover is removed. The input username is displayed with the user's score in the game. This also gives the javascript time to retrieve the questions from the database as an .api, which happens asynchronously.

At the beginning of the round, a question is displayed for the user. The art reflects that it is the user's turn and the image is displayed to the left of the question. The four multiple choice answers are displayed as buttons below the question, and an answer submission button is displayed below the answers. When the user selects an answer, the button color is changed. The user can change their mind, and the button color for the initially selected answer will return to look unselected, and the newly selected answer will look selected. The user can then click the submit button when they are ready, and the answer will be checked. If the user clicks the submit button before they have selected an answer, an alert is displayed.

When the answer is submitted, a cover is displayed over the answers. If the user got the question right, the text indicates that the question was right. If the user is wrong, the text indicates which answer was given and which one was correct. There is a button to advance to the next question, which removes the cover and changes the question and player.

In the second half of the round, a question is displayed for the robot. The art shows the robot, and the image is displayed to the right of the question. The multiple choice questions are displayed, but are greyed out and disabled. The answer submit button is grayed out and disabled while the robot calculates it's answer, and a timer counts down from 5. Once the robot is ready, the question buttons remain disabled but the submit button is selectable. This gives the user an opportunity to read the question and make a guess to themselves, before the robot makes its selection, but also gives the game the interest of the robot having to "think" about its decision. The robot is given about a four in five chance to get the question right. When the user selects to submit the robot's answer, the answer cover is shown and display's wether the robot got the answer right or wrong, displaying the correct answer if right and the wrong and correct answer if wrong. The user can click the advance button to move to the next question and next round.

At the end of five rounds, the game compares the scores. If the user has more correct answers than the robot, the user is declared the winner. If the robot has more correct answers, the robot is declared the winner. If there is a tie, the game advances to a bonus round where only the user gets a question. If the user gets this question right, the user is the winner. If the user gets the question wrong, the robot is the winner.

When there is a winner, the text in the question area declares the winner. The art reflects the winner and the positioning left to right remains consistent with gameplay. A cover is displayed over the answer area on the page, and the user is asked if they would like to play again. If the user clicks the yes button, the game retrieves new questions from the database, keeps the username, resets the scores to zero, and displays the beginning of round one of a new game. Gameplay proceeds as before. If the user selects no, the game opens a new browser tab to a Google search funtion.

The footer contains a social media link to an Instagram account, where players can get to know their robot opponents. The link opens a new tab.

Bug fixes:
    -Changed the name of the div id="play-again" to "play-again-cover" for consistency in the html and css code, but not in js, which made the game not advance past final screen.
    -The footer was fixed at the bottom of thes screen which allowed the footer to cover the qustions and submission button on smaller screens. Wrapped the whole site other than the footer in a div, and subtracted the height of the footer from it's minimum height. This div then takes up no less than the full screen, minus the footer, which forces the footer to the bottom of a large screen, but allows all the elements to display properly if the screen is small.
    -When it was the robot's turn, there was a one second window where the user could sneak and click the "answer submit" button, before the robot was ready to answer. If clicked early, this would effect game play by obscuring the user's answer buttons and having the user have to wait for the countdown time.
    -Sometimes there are six rounds even if the user is winning in the fifth round. Unresolved.

Questions are from Open Trivia Database, https://www.opentdb.com.
FavIcon is from Iconfinder.com, https://www.iconfinder.com/icons/2120162/astronaut_astronomy_robot_science_space_icon.
FavIcon code is from Code Institute, as described in the "Love Maths Walkthrough Project/Tidying Up/A Few Last Things..." lesson.
Instagram icon, happy face emoji, sad face emoji, and robot face empoji are from Font Awesome.
Images are hand drawn by developer.
