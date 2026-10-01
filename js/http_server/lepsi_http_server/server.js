
require('dotenv').config();

const port = process.env.PORT;

// spusteni serveru pro aplikaci
require('http').createServer(require('./app'))

.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});