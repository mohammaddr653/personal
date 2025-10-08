const serviceResponse = require("../helpers/serviceResponse");
const projects = require("../mocks/projects.json");

class ProjectServices {
  async getAllProjects(req, res) {
    //خواندن تمام نمونه کار ها از دیتابیس
    const findOp = projects;
    return serviceResponse(200, findOp);
  }
}
module.exports = new ProjectServices();
