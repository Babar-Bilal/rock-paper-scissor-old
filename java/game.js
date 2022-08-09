// Odin Project...
// Rock, Paper or Scissor.

// Computer Selection.
const compSelect = () => {
    const Choices = ['rock', 'paper', 'scissor']
    const random = Math.floor(Math.random() * 3)
    const Select = Choices[random]
    return Select
}

// Score.
let PlayerScore = 0
let ComputerScore = 0

// Rounds with two parameters (PlayerSelection, ComputerSelection).
const Rounds = (PlayerSelection, ComputerSelection) => {
    if(PlayerSelection === ComputerSelection){
        return 'You Tied'
    } else if(PlayerSelection === 'rock' && ComputerSelection === 'paper'){
        ComputerScore++
        return 'You Lose! Paper covers Rock'
    } else if(PlayerSelection === 'paper' && ComputerSelection === 'scissor'){
        ComputerScore++
        return 'You Lose! Scissor cuts Paper'
    } else if(PlayerSelection === 'scissor' && ComputerSelection === 'rock'){
        ComputerScore++
        return 'You Lose! Rock crushes Scissor'
    } else if(PlayerSelection === 'rock' && ComputerSelection === 'scissor'){
        PlayerScore++
        return 'You Win! Rock crushes Scissor'
    } else if(PlayerSelection === 'paper' && ComputerSelection === 'rock'){
        PlayerScore++
        return 'You Win! Paper covers Rock'
    } else if(PlayerSelection === 'scissor' && ComputerSelection === 'paper'){
        PlayerScore++
        return 'You Win! Scissor cuts Paper '
    }
}

// Game function.
const game = () => {
    for (let i = 0; i < 5; i++) {
        const PlayerSelection = prompt('Choose Between', 'Rock, Paper, or Scissor').toLowerCase()   
        const ComputerSelection = compSelect()
        console.log(Rounds(PlayerSelection, ComputerSelection))
        console.log('---------------------------    ')
        
    }

// Tallying the Score.
const Score = () => {
    if (PlayerScore > ComputerScore) {
        return 'You Won the Game! Well Done.'
    } else if (PlayerScore < ComputerScore) {
        return 'You Lost the Game! Keep Practising.'
    } else {
        return 'You Tied with the Computer! Getting Better.'
    }
}

console.log(Score(PlayerScore, ComputerScore))

}


