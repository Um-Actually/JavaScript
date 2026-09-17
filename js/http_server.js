//načtení balíčku s kodem http serveru
const http = require('http');

//pouziti balicku pro vytvoreni serveru
const server = http.createServer((request, response) => {response.end("Hello World");});

// spusteni serveruu
server.listen(8000, "localhost",() => { console.log("Server už běží")});