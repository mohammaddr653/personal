const User = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const serviceResponse = require("../helpers/serviceResponse");

class UserServices {
  async registerUser(req, res) {
    // create user , same as register , after user created , the cart will automaticly create
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return serviceResponse(400, {});
    }
    user = new User(_.pick(req.body, ["email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const saveOp = await user.save({ session });
    return serviceResponse(200, saveOp);
  }
}
module.exports = new UserServices();
