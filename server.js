const express = require('express');
const path = require('path');

const server = express();
const port = 3000;


server.use(express.static(path.join(__dirname, 'public')));

//app.

server.get('/interface', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'index.html'));
});

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'about.html'));
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
