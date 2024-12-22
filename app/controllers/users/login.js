const user = require('../../model/user')
const { checkPassword } = require('./helpers/checkPassword')
const { generateToken } = require('./helpers/generateToken')

const login = async (req, res) => {
    try {
        if (req.body.email == '' || req.body.email == undefined) {
            res.status(200).json({
                success: false,
                message: 'Please Enter Email',
                result: null
            })
        }
        else if (req.body.password == '' || req.body.password == undefined) {
            res.status(200).json({
                success: false,
                message: 'Please Enter Password',
                result: null
            })
        }
        else {
            const findUser = await user.findOne({ email: req.body.email })
            if (findUser) {
                const isPasswordMatch = await checkPassword(req.body.password, findUser)
                if (!isPasswordMatch) {
                    res.status(200).json({
                        success: false,
                        message: 'Incorrect Password',
                        result: null
                    })
                }
                else {
                    const token = await generateToken(findUser._id)
                    res.status(200).json({
                        success: true,
                        message: 'Loggedin Successfully',
                        result: token, findUser
                    })
                }
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'User Not Found',
                    result: null
                })
            }
        }
    } catch (error) {
        console.log(error, 'err');
    }
}

module.exports = { login }