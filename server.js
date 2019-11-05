const express = require('express');

const AccountRouter = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter)

server.get('/', (req,res) => {
    res.send('<h1>Relational Database with Knex.js</h1>')
})

module.exports = server;