require('http').createServer(require('./app'))
.listen(8000, () => {
    console.log('Server běží na portu 8000...');
});