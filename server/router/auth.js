const express = require('express');
const { register, login } = require('../controller/auth');

let router = express
    .Router()
    .post('/register', register)
    .get('/register', (req, res)=>{
        res.send({error:"Page not found"})
    })
    .put('/register', (req, res)=>{
        res.send({error:"Page not found"})
    })
    .delete('/register', (req, res)=>{
        res.send({error:"Page not found"})
    })
    .get('/login', (req, res)=>{
        res.send({error:"Page not found"})
    })
    .post('/login', login)
    .put('/login', (req, res)=>{
        res.send({error:"Page not found"})
    })
    .delete('/login', (req, res)=>{
        res.send({error:"Page not found"})
    });

module.exports = router