const express = require('express');
const path = require('path')

const app = express();

const rootDir = require('./util/path')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'users.html'))
})

app.use('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'home.html'))
})

app.listen(3000)
