const getAllTasks = (req, res) => {
  res.send("all items");
};

const getSingleTasks = (req, res) => {
  res.send("get single item");
};

const createTask = (req, res) => {
  res.send("create task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  getSingleTasks,
  createTask,
  updateTask,
  deleteTask,
};
