const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extend: false}));

app.use('/add-product', (req, res, next) => {
    console.log('in the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body, 'body')
    res.redirect('/')
});

app.use((req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000)