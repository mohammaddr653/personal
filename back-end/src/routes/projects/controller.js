//controller
const debug = require("debug")("app");
const projectServices = require("../../services/projectServices");
const controller = require("./../controller");
const _ = require("lodash");

module.exports = new (class extends controller {
  async getProjects(req, res) {
    const result = await projectServices.getAllProjects(req, res);
    return this.response({
      res,
      message: "لیست تمام نمونه کار ها",
      data: result.data,
    });
  }
})();
