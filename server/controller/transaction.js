const Split = require('../../model/slpit');
const transactions = require('../../model/transcations');

const createTransaction = async (req, res) => {
    try {
        const { amount, payerId, category, description } = req.body
        if (!amount && !payerId && !category) {
            return res.status(404).send({ message: "some error occure please provide some data" })
        }
        if (!description) {
            return res.status(404).send({ message: "some error occure please provide some data" })
        }
        const transactionDetails = await transactions.query().insert({
            amount,
            payerId,
            category,
            description
        })
        res.status(200).send({ Message: "Added Data" })
    } catch (error) {
        console.log(error);
        return res.status(404).send({ message: error })
    }

}

const transactionsDetail = async (req, res) => {
    try {
        const getAllTransationDetails = await transactions.query().select('*')
        res.status(200).send(getAllTransationDetails)
    } catch (error) {
        console.log(error);
        res.status(404).send({error:error.message})
    }
}

const transactionDetail = async (req, res) => {
    try {
        console.log(req.query.amount);
        const getTransationDetails = await transactions.query().select('*')
            .where((builder) => {
                if (req.query.amount) {
                    builder.where('amount', req.query.amount);
                }
                if (req.query.category) {
                    builder.where('category', req.query.category);
                }
                if (req.query.payerId) {
                    builder.where('payerId', req.query.payerId);
                }
            })
        return res.status(200).send({ data: getTransationDetails })

    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const updateTrasacation = async (req, res) => {
    try {
        const { amount, category, description } = req.body
        if (amount) {
            const updatedData = await transactions.query().update({ amount })
                .where((builder) => {
                    if (req.query.payerId) {
                        builder.where('payerId', req.query.payerId);
                    }
                })
            res.status(200).json({ updatedData })
        }
        if (category) {
            const updatedData = await transactions.query().update({ category })
                .where((builder) => {
                    if (req.query.payerId) {
                        builder.where('payerId', req.query.payerId);
                    }
                })
            res.status(200).json({ updatedData })
        }
        if (description) {
            const updatedData = await transactions.query().update({ description })
                .where((builder) => {
                    if (req.query.payerId) {
                        builder.where('payerId', req.query.payerId);
                    }
                })
            res.status(200).json({ updatedData })
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const deleteTrasacation = async (req, res) => {
    try {
        const updatedData = await transactions.query().delete()
            .where('payerId', req.query.payerId)
        res.status(200).json({ updatedData })
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const splitTransactionId = async (req, res) => {
    try {
        const { amount, description, category, payerId, splits } = req.body
        const splitAmount = amount / (payerId.length);
        console.log()
        await payerId.forEach(async e => {
            const transaction = await transactions.query().select('*').where("payerId", e).first();
            console.log(transaction);
            const split = await Split.query().insert({
                amount: splitAmount,
                description,
                transaction_id: transaction.id
            })
            console.log(split);
            return split
        });
        res.status(200).send({ message: "ok" })
    } catch (error) {
        res.json(error)
    }
}

const getAllSplitTransactions = async (req, res) => {
    try {
        const getAllTransationDetails = await Split.query().select('*')
        res.status(200).send(getAllTransationDetails)
    } catch (error) {
        console.log(error);
    }
}

const getOneSplitTransaction = async (req, res) => {
    try {
        const updatedData = await transactions.query().select("*")
            .where((builder) => {
                if (req.query.amount) {
                    builder.where('amount', req.query.amount);
                }
                if (req.query.transaction_id) {
                    builder.where('transaction_id', req.query.transaction_id);
                }
            })
        res.status(200).json({ updatedData })
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const updateSplitTransaction = async (req, res) => {
    try {
        const updatedData = await transactions.query().update({ ...req.body })
            .where((builder) => {
                if (req.query.amount) {
                    builder.where('amount', req.query.amount);
                }
                if (req.query.category) {
                    builder.where('description', req.query.description);
                }
            })
        res.status(200).json({ updatedData })
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const deleteSplitTransaction = async (req, res) => {
    try {
        const updatedData = await Split.query().delete()
            .where('transaction_id', req.query.transaction_id)
        res.status(200).json({ updatedData })
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}
module.exports = {
    createTransaction,
    transactionsDetail,
    transactionDetail,
    updateTrasacation,
    deleteTrasacation,
    splitTransactionId,
    getAllSplitTransactions,
    updateSplitTransaction,
    deleteSplitTransaction,
    getOneSplitTransaction
}