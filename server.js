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
// app.use(express.static(__dirname + '/js'));

const tasksRouter = require('./routes/tasks')
app.use('/tasks', tasksRouter)

app.listen(3000, () => {
    console.log('Сервер работает!')
})


// app.get('/', async (req, res) => {
//     try {
//          const tasks = await Task.find()
//          console.log('Работает')
//          res.json(tasks)
//          res.send(tasks)
//     }catch (err) {
//          res.status(500).json({message: err.message})
//          console.log('Ошибка')
//     }
//  })