const express = require('express');

//databases access using knex

const db = require('../data/dbConfig')

const router = express.Router();

router.get('/', (req,res) => {
    db('accounts')
})