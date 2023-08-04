const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const gameSetUpRouter = require('./routes/gameSetUp.js');
const resultRouter = require('./routes/result.js');

app.use('/', gameSetUpRouter);
app.use('/result', resultRouter);

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = server;