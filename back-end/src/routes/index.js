//managing all routes
const express = require("express");
const router = express.Router();
const authRouter = require("./auth");

const {
  isLoggedIn,
  isAdmin,
  notLoggedIn,
  setReqUser,
} = require("./../middlewares/auth");

const error = require("./../middlewares/error");

router.use("/", (req, res) => {
  res.send("this is api");
});
router.use("/auth", notLoggedIn, authRouter);

router.use(error);

module.exports = router;
