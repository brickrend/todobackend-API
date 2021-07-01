// const { Router } = require("express");
const express = require("express");
//functions
const {
  taskFetch,
  createTask,
  deleteTask,
  updateTask,
} = require("./controllers");

const router = express.Router();

router.get("/", taskFetch);
router.post("/", createTask);
router.delete("/:taskId", deleteTask);
router.put("/:taskId", updateTask);
module.exports = router;
