//controller
const debug = require("debug")("app");
const messageServices = require("../../services/messageServices");
const controller = require("./../controller");
const _ = require("lodash");

module.exports = new (class extends controller {
  async postMessage(req, res) {
    const result = await messageServices.sendMessage(req, res);
    return this.response({
      res,
      message: "پیام شما ارسال شد",
    });
  }
})();
