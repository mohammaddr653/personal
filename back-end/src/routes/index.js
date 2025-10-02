//managing all routes
const express = require("express");
const router = express.Router();

const error = require("./../middlewares/error");

router.use("/", (req, res) => {
  res.send("this is api");
});

router.use(error);

module.exports = router;
