const user = require('../../model/user')

const register = async (req, res) => {
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
                res.status(200).json({
                    success: false,
                    message: 'Already Register',
                    result: null
                })
            } else {
                const payload = {
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name
                }
                const data = await user.create(payload)
                if (data) {
                    res.status(200).json({
                        success: true,
                        message: 'Register Successfully',
                        result: data
                    })
                }
            }
        }
    } catch (error) {
        console.log(error, 'err');
    }
}

module.exports = { register }