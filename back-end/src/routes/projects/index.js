//router
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getProjects.bind(controller));

module.exports = router;
