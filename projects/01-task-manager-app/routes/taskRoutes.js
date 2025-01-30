const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.route('/tasks').post(createTask).get(getAllTasks);
router.route('/tasks/:id').get(getTaskById).put(updateTask).delete(deleteTask);


module.exports = router;