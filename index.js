require('dotenv').config()
const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors')
const router = require('./server/router/auth');
const transaction  = require('./server/router/transaction');
require('./model')
const app = express()
app.use(cors())
app.use(bodyPaser.json())

app.use("/", router);
app.use('/', transaction);

app.get("/", (req, res) =>{
   res.status(200).send({message:"ok'🍔🍔🍔'"})
})

app.listen(4000,(req, res) =>{
   console.log("server started on 4000");
})