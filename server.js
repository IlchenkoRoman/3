require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Task = require('./models/task')


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connection"))


app.use(express.json())


app.use(express.static(__dirname + '/public'));

const tasksRouter = require('./routes/tasks')
 app.use('/tasks', tasksRouter)




app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
