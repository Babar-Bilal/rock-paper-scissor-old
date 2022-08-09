Rock, Paper or Scissors ODIN PROJECT part 1.

---------------------------Javascript------------------------------------

Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console.
Game is called 'Rock', 'Paper', 'Scissors'. Against Computer in browser console.

Write a function 'compSelect' with an array of 'Rock', 'Paper', 'Scissor' and random select either 'Rock', 'Paper', or 'Scissor', Test the code with return and console.log.

Write PlayerScore and ComputerScore variable (Below we will use this to tally the score).

Write a function 'Rounds' that plays game of Rock Paper or Scissors. The function should take two parameters - the 'PlayerSelection' and 'ComputerSelection' - and then return a string that declares the result of the every single round.

Write a function 'game'. Add loop of 5 rounds and Player choice should be case-insensitive using prompt (Users can input rock, ROCK, RocK or any other variation).

Write a function 'Score' and compare 'PlayerScore' to 'ComputerScore' using '>' or '<' and return Winner of the Game.

    console.log(Score(PlayerScore, ComputerScore))

--------------------------End of Javascript---------------------------------

--------------------------------HTML----------------------------------------

Add sytles.css <link>
Inside <body> 
    <div class="flex-container">
    <h1>ROCK, PAPER OR SCISSORS</h1>
    <button type="button" onclick="game()")>PLAY GAME!</button>
    <p>This version of the game is played in browser console.</p>
    <p>Press CTRL + Shift + J to open console on Windows/Linux.</p>
    <p>Press Option + J to open on Mac.</p>
    </div>

------------------------------End of HTML-----------------------------------

---------------------------------CSS----------------------------------------
Inside styles.css write:

.flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
    width: auto;
    background-color: greenyellow;
    border-radius: 20px;
    font-size: xx-large;
}
button:hover {
    cursor: pointer;
}

--------------------------------END of CSS----------------------------------