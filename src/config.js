const config = {
    rock: {
        'scissors': true,
        'lizard': true,
        'paper': false,
        'spock': false
    },
    paper: {
        'scissors': false,
        'lizard': false,
        'rock': true,
        'spock': true
    },
    scissors: {
        'paper': true,
        'lizard': true,
        'rock': false,
        'spock': false
    },
    lizard: {
        'paper': true,
        'scissors': false,
        'rock': false,
        'spock': true
    },
    spock: {
        'paper': false,
        'lizard': false,
        'rock': true,
        'scissors': true
    }
}
module.exports = config;