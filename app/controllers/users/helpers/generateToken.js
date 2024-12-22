const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

const generateToken = (req = {}) => {
    return new Promise((resolve, reject) => {

        const payload = {
            id: req.id
        }

        const token = jwt.sign(payload, secretKey)


        if (token) {
            resolve(token)
        }
        else {
            reject('Token not Generated')
        }
    })
}

module.exports = { generateToken }
