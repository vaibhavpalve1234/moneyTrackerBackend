require('dotenv').config()
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const jwt = require('jsonwebtoken');
const User = require('../../model/user');
// const JWTToken = process.env.JWTSECRET
const JWTToken = '124bjfbshsvjvasgf'


const register = async (req, res) => {
    try {
        const { user_id, name, email, password } = req.body
        if (!name.trim()) {
            return res.json({ error: "Name is required" })
        }
        if (!email) {
            return res.json({ error: "Email is taken" })
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be least lan 6 digit" })
        }
        const passwordHash = await hashPassword(password)
        const userData = await User.query().insert({
            name: name,
            email: email,
            password: passwordHash,
            user_id
        })
        console.log(userData);
        const token = jwt.sign({ user_id }, JWTToken, { expiresIn: '7d' })
        res.status(201).json({
            user: userData,
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).send({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body);
        if (!email) {
            return res.status(401).send({ email: "Please provide mail id " })
        } if (!password || password.length < 6) {
            return res.json({ error: "Password wrong" })
        }
        const user = await User.query().select("*").where('email', email).first()
        if (!user) {
            return res.status(201).send({ message: "user not present" })
        }
        const validePassword = await comparePassword(password, user.password)
        if (!validePassword) {
            return res.status(201).send({ message: "User Not Found" })
        }
        console.log(JWTToken)
        const token = jwt.sign({ id: user.id }, JWTToken, { expiresIn: '7d' })
        res.status(201).json({
            user: {
                name: user.name,
                email: user.email
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.send('User Not Login please provide correct information')
    }

}

module.exports = { register, login }
