const express = require('express');
const body = require('body-parser');

const primeRoutes = require('./routes/prime')
const app = express();

//app.use(logger('dev'));
app.use(body.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
});

app.use('/touchbistro/v1/prime', primeRoutes);

app.listen(9000);

module.exports = app