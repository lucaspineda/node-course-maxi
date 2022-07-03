const express = require('express')

const app = express();

app.use('/users', (req, res, next) => {
    console.log('in the middleware 1');
    res.send('<h1>Users page</h1>');
    next()
});

app.use('/', (req, res, next) => {
    console.log('in another middleware 2');
    res.send('<h1>Root page</h1>');
});

app.listen(3000)