const chai = require('chai');
const server = require('../index.js');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
describe('/POST REQUEST', () => {
    it('should post the user choices to the result page', async () => {
        let data = {
            player: 'Clara',
            player_choice: 'rock'
        };

        const res = await chai.request(server)
            .post('/result')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(data);

        expect(res).to.have.status(200);
    });

    it('should give error if the user doesn\'t include a name', async () => {
        let data = {
            playerChoice: 'paper'
        };

        const res = await chai.request(server)
            .post('/result')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(data);

        expect(res).to.have.status(400);
    });

    it('should give error if the user doesn\'t choose an option', async () => {
        let data = {
            player: 'Clara'
        };

        const res = await chai.request(server)
            .post('/result')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(data);

        expect(res).to.have.status(400);
    });
})