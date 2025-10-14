const serviceResponse = require("../helpers/serviceResponse");
const sendEmail = require("../mails/newMessage");

class MessageServices {
  async sendMessage(req, res) {
    //ارسال پیغام جدید
    let content = `
        <p>نام : ${req.body.name}</p>
        <p>ایمیل : ${req.body.email}</p>
        <p>متن پیام : ${req.body.message}</p>`;

    sendEmail("پیغام جدیدی دارید", "mohammaddr653@gmail.com", content);

    return serviceResponse(200, {});
  }
}
module.exports = new MessageServices();
