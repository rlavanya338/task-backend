

const checkPassword = (password = '', user = {}) => {
    return new Promise((resolve, reject) => {
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
            if (!isMatch) {
                resolve(false)
            }
            resolve(true)
        })
    })
}

module.exports = { checkPassword }
