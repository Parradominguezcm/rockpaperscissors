const express = require('express');
const router = express.Router();
const ComputerPlayer = require('../src/computerPlayer.js');
const Game = require('../src/game.js');
const config = require('../src/config.js');

router.post('/', (req, res) => {
    const game = new Game(config);

    if (!req.body.player && req.body.player != '') {
        res.status(400).send('oops')
    };
    const playerName = req.body.player;

    if (!req.body.player_choice && req.body.player_choice != '') {
        res.status(400).send('oops! Go back, you can\'t play without a weapon!')
    };
    const playerChoice = req.body.player_choice;

    const computerPlayer = new ComputerPlayer()
    const computerPlayerChoice = computerPlayer.makeChoice();

    const result = game.play(playerChoice, computerPlayerChoice);

    res.render('resultView', {
        playerName: playerName,
        playerChoice: playerChoice,
        computerChoice: computerPlayerChoice,
        gameResult: result,

    });

})

module.exports = router;