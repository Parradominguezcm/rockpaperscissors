class ComputerPlayer {
    options = ["rock", "paper", "scissors", "lizard", "spock"];

    makeChoice() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
};

module.exports = ComputerPlayer;