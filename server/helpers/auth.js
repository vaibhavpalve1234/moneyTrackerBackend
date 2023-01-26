const jwt = require("jsonwebtoken")
require('dotenv').config()
const requireSignin = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.token, '124bjfbshsvjvasgf')
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
const isAdmin = async (req, res, next) => {
    try {
        const adminDetails = await user.findById(req.user._id)
        console.log(adminDetails.role);
        if (!adminDetails.role) {
            return res.status(401).send("Unathorise")
        }
        else {
            next()
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { requireSignin, isAdmin }