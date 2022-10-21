# Nefarious Robot

Nefarious Robot is a trivia game that pits the human user against a "robot" opponent played by the computer.

The trivia game is up to eleven questions long, giving the human user and the computer one question each across five rounds. The game tracks and displays the score throughout the game. The game displays the the round as the game progresses. If at the end of five rounds the user has answered more questions correctly than the computer, the user wins. If the computer has answered more questions correctly, the robot wins. If there is a tie at the end of five rounds, there is a bonus round that gives only the user a question, a correct answer resulting in the user winning the game.

[Nefarious Robot](https://wsmorrison.github.io/Robot_Quiz/)

## Features and logic 

### Page Load
    On page load, the game is covered with a mostly opaque cover.
        -Cover explains the rules.
        -Cover contains an input for the username, and a submission button.
            -Username input is validated to make sure the username is between one and six characters long.
            -If username is not present, or if it is too long, an alert is displayed.
            -If the username is accepted, the cover is removed. 
            -Username is displayed in the score area for the duration of the game.
        -This cover and username retrieval also gives JavaScript time to asynchronously retrieve the questions from the Open Trivia Database and display them. 
    
    At the beginning of the round, a question is displayed for the user.
        -The image reflects that it is the user's turn.
        -On larger screens, the position of the image is to the left of the question for the user.
        -A question is retrieved from the object imported by the Open Trivia Database api.
        -The four mulitple choice answerss are displayed below the image and the question.
            -The answers, including the correct one, are displayed in random order.
            -When the user selectes an answer by clicking on it, the answer button colors change.
            -If the user changes their mind and selects a different answer, the colors change to reflect the changed choice.
        -The answer is submitted by clicking a button below the multiple choices answers.
            -If the user has not chosen an answer, and alert is displayed.
            -If an answer has been submitted, a cover is displayed over the answers.
                -If the correct answer was selected, the cover indicates as much.
                -If the incorrect answer was selected, the cover indicates the selected answer, the correct answer, and that the answer was wrong.
                -The cover has a button to advance to the next question, and remove the cover.
                
    In the second half of the round, a question is displayed for the robot.
        -The image reflects it is the robot's turn.
        -On larger screens, the position of the image is to right of the question for the robot.
        -A question is retrieved from the object imported by the Open Trivia Database api.
        -The four multiple choice answers are displayed below the image and question.
            -The answers, including the correct one, are displayed in random order.
            -The answers are greyed out, and the answer buttons are disabled.
            -The submit button is greyed out and disabled at the start of the robot's turn.
                -A timer counts down until the robot's has "decided" on its answer.
                -The submit button becomes active when the countdown completes.
            -If the user clicks the submit button, a cover is displayed over the answers.
                -The cover displays whether the robot got the answer right or wrong.
                    -The robot has a four out of five chance to get the question correct.
                    -If the answer is right, the cover shows the right answer.
                    -If the answer is wrong, the cover shows the wrong answer the robot "selected" and the right answer.
                -The cover has a button to advance to the next question, and remove the cover.
    
    The score is updated after each question, according to whether the they were answered correctly or not.
    
    The game decides if there is a winner or if a bonus question is required to decide the winner.
        -At the end of five rounds, the game compares the scores.
        -If the scores are the same, the game advances to a bonus question for the user only.
            -Bonus question is the same format as previous questions.
            -If the bonus question is right, the user wins, and if the question is wrong, the robot wins.
        -If the scores are different, the winner is calculated.
            -If the user score is higher, the user wins. 
                -The text in the question position indicates the user won.
                -The image and text display in the correct orientation.
            -If the robot score is higher, the robot wins.
                -The text in the question position indicates the robot won.
                -The image and text display the correct orientation.
    
    When the game ends, a play-again cover appears and asks the user if they would like to play the game again.
        -If the user selects yes, the scores are reset, the username conveys, and the game loads new questions.
        -If the user selects no, the game opens a new tab to a Google search page.

    The footer contains a social media link to an Instagram account, where players can get to know their robot opponents. The link opens a new tab.

## Testing

    -Confirmed that the site is intuitive and works properly by having a handful of testers interact with the site on different devices, in different places, and with different use cases.
    -Confirmed that the wesbite works, looks good, and maintains clarity and functionality on different sized devices and at different sizes by using Chrome developer tools, as well as using the site on multiple devices.
    -

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