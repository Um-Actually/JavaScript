const express = require('express');
const app = express();
const port = 2000;

app.use(express.static('html'));

app.get('/hello' ,(req, res) => {res.send('hello world')});
app.get('/' ,(req, res) => {res.render('index')});

app.listen(port,() =>{ console.log(`Example app listening on port ${port}`)})