//validator
const validator = require("../validator");
const { check } = require("express-validator");

module.exports = new (class extends validator {
  registerValidator() {
    return [
      check("email", "فرمت ایمیل صحیح نیست").isEmail(),
      check("password", "پسورد وارد شده مورد قبول نیست").notEmpty(),
    ];
  }
  loginValidator() {
    return [
      check("email", "فرمت ایمیل صحیح نیست").isEmail(),
      check("password", "پسورد وارد شده مورد قبول نیست").notEmpty(),
    ];
  }
})();
