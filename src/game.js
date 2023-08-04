class Game {
    play(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            return "it's a tie!";
        } else if (

            (playerChoice === "rock" && computerChoice === "scissors") ||

            (playerChoice === "paper" && computerChoice === "rock") ||

            (playerChoice === "scissors" && computerChoice === "paper")
        ) {

            return "You win!";

        } else {

            return "Computer wins!";

        }
    }
};

module.exports = Game;