const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('in the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body, 'body')
    res.redirect('/')
});

module.exports = router;