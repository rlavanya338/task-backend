const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid Email'
        },
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        // select: false
    }
}, {
    versionKey: false,
    timestamps: true
})

const hash = (user, salt, next) => {
    bcrypt.hash(user.password, salt, (error, newHash) => {
      if (error) {
        return next(error)
      }
      user.password = newHash
      return next()
    })
  }
  
  const genSalt = (user, SALT_FACTOR, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) {
        return next(err)
      }
      return hash(user, salt, next)
    })
  }
  
  userSchema.pre('save', function (next) {
    const that = this
    const SALT_FACTOR = 5
    if (!that.isModified('password')) {
      return next()
    }
    return genSalt(that, SALT_FACTOR, next)
  })
  
  userSchema.methods.comparePassword = function (passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
      err ? cb(err) : cb(null, isMatch)
    )
  }
  

module.exports = mongoose.model('user', userSchema)