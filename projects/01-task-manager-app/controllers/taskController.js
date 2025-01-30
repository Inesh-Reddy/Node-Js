const { Task } = require('../models/task');

const createTask = async(req, res)=> {
    const {title, description, status, dueDate} = req.body;

    await Task.create({
        title,
        description,
        status,
        dueDate
    })
    res.send({
        msg:`Taks created successfully.`
    })
}

const getAllTasks = (req, res)=>{
    res.json({
        msg:`all tasks`
    })
}


const getTaskById  = (req,res)=> {
    res.json({
        msg:`single taks`
    })
}

const updateTask = (req,res)=>{
    res.json({
        msg: `updated task`
    })
}

const deleteTask = (req, res)=>{
    res.json({
        msg:`deleted task`
    })
}



module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}