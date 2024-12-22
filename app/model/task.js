const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    status: {
        type: String,
        default: "incomplete"
    }
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Task', taskSchema)