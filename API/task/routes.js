const { Router } = require("express");
const express = require("express");

router.get("/".tasksFetch);
router.post("/", createTask);
router.delete("/:taskId", deleteTask);
router.put("/:taskId", updateTask);
module.exports = router;
