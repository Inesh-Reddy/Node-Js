const task = require("../models/task");
const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.find({});
    res.status(201).json({
      msg: tasks,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      task: task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

const getSingleTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        msg: `Notaks with id: ${taskID}`,
      });
    } else {
      res.status(201).json({
        msg: task,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const updatedTask = await Task.findOneAndUpdate(
      {
        _id: taskID,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      msg: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const deletedTask = await Task.findOneAndDelete({ _id: taskID });
    res.status(201).json({
      msg: deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

module.exports = {
  getAllTasks,
  getSingleTasks,
  createTask,
  updateTask,
  deleteTask,
};
