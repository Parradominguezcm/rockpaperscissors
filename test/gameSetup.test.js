const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const expect = chai.expect;

chai.use(chaiHttp);
describe('gameSetup GET request', () => {
    it('get request works on the setup view', async () => {
        const res = await chai.request(server)
            .get('/')
            .send();

        expect(res).to.have.status(200);
    });
});
