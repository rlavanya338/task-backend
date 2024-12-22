require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const path = require('path')
const mongoose = require("mongoose");
const app = express()

app.use(cors())
app.use(passport.initialize())


// Setup express server port from ENV, default: 3000
app.set('port', process.env.PORT)

// for parsing json
app.use(
    bodyParser.json({
      limit: '20mb'
    })
  )
  // for parsing application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      limit: '20mb',
      extended: true
    })
  )

// Init all other stuff
app.use(cors())
app.use(passport.initialize())
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(require('./app/routes'))
app.listen(app.get('port'),console.log(`Server Connected to  ${app.get('port')}`))

mongoose.connect("mongodb+srv://lavanya:zXDL8aNkBizI0M1X@cluster0.bfhhi.mongodb.net/Task", 
console.log('db connected'));

module.exports=app