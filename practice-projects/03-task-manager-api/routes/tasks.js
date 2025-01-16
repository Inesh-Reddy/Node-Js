const express = require("express");
const {
  getAllTasks,
  getSingleTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getSingleTasks).patch(updateTask).delete(deleteTask);

module.exports = router;
