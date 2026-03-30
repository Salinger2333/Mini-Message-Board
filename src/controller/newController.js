const { newMessage } = require("../db/queries");

async function getNewMessages(req, res) {
  res.render("form", { title: "add new message" });
}

async function postNewMessage(req, res) {
  const { messageUser, messageText } = req.body;
  await newMessage(messageUser, messageText);
  res.redirect("/");
}

module.exports = { getNewMessages, postNewMessage };
