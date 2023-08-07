class Game {
    constructor(config) {
        this.config = config
    }

    play(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return "it's a tie!";
        if (this.config[playerChoice][computerChoice]) return "You win!";
        else return "Computer wins!";
    }
};

module.exports = Game;