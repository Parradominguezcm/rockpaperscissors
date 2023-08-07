const game = require('../src/game');
const chai = require('chai');
const expect = chai.expect;



describe('rock paper scissors function works', () => {
    let mockconfig = {
        rock: {
            'scissors': true,
            'paper': false
        },
        paper: {
            'scissors': false,
            'rock': true
        },
        scissors: {
            'paper': true,
            'rock': false
        }
    }

    it('returns it\'s a tie! if both the computer and the player\'s choice are the same', () => {
        const rps = new game(mockconfig)
        expect(rps.play('rock', 'rock')).to.eql("it's a tie!");
    });
    it('returns you won! if the player\'s choice beats the computer', () => {
        const rpsw = new game(mockconfig)
        expect(rpsw.play('rock', 'scissors')).to.eql("You win!");
    });
    it('returns computer wins! if the computer beats the player', () => {
        const rpsl = new game(mockconfig)
        expect(rpsl.play('rock', 'paper')).to.eql("Computer wins!");
    });
})