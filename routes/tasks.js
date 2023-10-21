const express = require('express')
const router = express.Router()
const Task = require('../models/task')

//Получить все
router.get('/', async (req, res) => {
   try {
        const tasks = await Task.find()
        res.json(tasks)
   }catch (err) {
        res.status(500).json({message: err.message})
   }
})

// Добавить
router.post('/', async (req, res) =>    {
    const { text, done, description, deadline, date  } = req.body
    const task = new Task({text, done, description, deadline, date})

    console.log(task)

    try {
        const newTask = await task.save()
        res.status(201).json(newTask)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})

//Изменить

router.patch('/:id', getTasks, (req, res) => {
    
})


//Удалить
router.delete('/:id', getTasks, async (req, res) => {
    try{
        await res.task.deleteOne()
        res.json({message: "Удален"})
    }catch (err){
        res.status(500).json({ message: err.message })
    }
})


router.get('/:id', getTasks, async (req, res) => {
    res.json(res.task)
})



async function getTasks(req, res, next) {
    let i
    try{
        i = await Task.findById(req.params.id)
        if(i == null ) {
            return res.status(404).json({message: "Не нашёл"})
        }
    }catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.task = i
    next()
}




module.exports = router