//managing all routes
const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const tokenRouter = require("./token");

const {
  isLoggedIn,
  isAdmin,
  notLoggedIn,
  setReqUser,
} = require("./../middlewares/auth");

const error = require("./../middlewares/error");

router.use(setReqUser); //if invalid token exists in request header set the req.user value
router.use("/token", tokenRouter);
router.use("/auth", notLoggedIn, authRouter);

router.use(error);

module.exports = router;
