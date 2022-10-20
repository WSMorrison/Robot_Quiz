Nefarious Robot Quiz is a single player quiz game that a live user can play against the computer. It is a ten question quiz, five questions for the user and five for the computer with a make-it, take-it tie breaker question provided to the user when necessary.

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
