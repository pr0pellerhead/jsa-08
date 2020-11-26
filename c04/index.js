// REST - representational state transfer -> JSON
// HTTP со некои плус правила -> HTML

// POST, GET +(PUT, PATCH, DELETE)

// GET -> кога сакаме да преземеме податоци од серверот
// POST -> кога сакаме да креираме/додадеме податоци на серверот
// PUT -> служи за ажурирање на целосен запис/податок
// PATCH -> служи за делумно ажурирање на запис/податок
// DELETE -> служи за бришење на податоци/записи

// REST endpoints -> патеки до податоци на REST серверот

// http://localhost:8080/[ПАТЕКА]
// http://localhost:8080/users

// users -> ресурс кој содржи информации за еден или повеќе корисници

// POST http://localhost:8080/users -> запиши корисник во users
// GET http://localhost:8080/users -> земи ги сите корисници од users
// GET http://localhost:8080/users/:id -> земи го корисникот со ID = :id од users
// PUT http://localhost:8080/users/:id -> ажурирај го корисникот со ID = :id од users
// PATCH http://localhost:8080/users/:id -> делумно ажурирање на корисникот со ID = :id од users
// DELETE http://localhost:8080/users/:id -> бришење на корисникот со ID = :id од users

const express = require('express');
const bodyParser = require('body-parser');

let usersData = [];

const api = express();

api.use(bodyParser.json()); // ќе ни дозволи да можеме да читаме JSON подароци од req објектот

api.post('/users', (req, res) => {
    usersData = [...usersData, req.body];
    res.status(201).send(req.body);
});

api.get('/users', (req, res) => {
    res.status(200).send(usersData);
});

api.get('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    res.status(200).send(usersData[req.params.id]);
});

api.put('/users/:id', (req, res) => {
    res.send('put ok');
});

api.patch('/users/:id', (req, res) => {
    res.send('patch ok');
});

api.delete('/users/:id', (req, res) => {
    res.send('delete ok');
});

api.listen(8080, err => {
    if(err) {
        return console.error(err);
    }
    console.log('Server successfully started on port 8080');
});