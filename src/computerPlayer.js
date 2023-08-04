class ComputerPlayer {
    options = ["rock", "paper", "scissors"];

    makeChoice() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
};

module.exports = ComputerPlayer;