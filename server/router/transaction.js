const express = require('express');
const {
    createTransaction,
    transactionsDetail,
    transactionDetail,
    updateTrasacation,
    deleteTrasacation,
    splitTransactionId,
    getAllSplitTransactions,
    updateSplitTransaction,
    deleteSplitTransaction,
    getOneSplitTransaction } = require('../controller/transaction');
const { requireSignin } = require('../helpers/auth');

let router = express
    .Router()
    //transaction REST apis
    .post('/transaction', requireSignin, createTransaction)
    .get('/transaction', requireSignin, transactionDetail)
    .put('/transaction', requireSignin, updateTrasacation)
    .delete('/transaction', requireSignin, deleteTrasacation)

    .get('/transactionDetails', requireSignin, transactionsDetail)
    .post('/transactionDetails', requireSignin, (req, res) => {
        res.send({ error: "Page not found" })
    })
    .put('/transactionDetails', requireSignin, (req, res) => {
        res.send({ error: "Page not found" })
    })
    .delete('/transactionDetails', requireSignin, (req, res) => {
        res.send({ error: "Page not found" })
    })

    .get('/splitTransaction', requireSignin, getAllSplitTransactions)
    .post('/splitTransaction', requireSignin, splitTransactionId)
    .put('/splitTransaction', requireSignin, updateSplitTransaction)
    .delete('/splitTransaction', requireSignin, deleteSplitTransaction)
    .get("/getSplitOneTransaction", requireSignin, getOneSplitTransaction);

module.exports = router