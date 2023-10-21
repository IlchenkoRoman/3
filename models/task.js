const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    description: {
        type: String
    },
    deadline: {
        type: String
    },
    date: {
        type: String, 
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task