const { getMessages } = require("../db/queries");
async function getMessagesIndex(req,res) {
  const messages = await getMessages();
  res.render("index", { title: "mini message", messages });
}

module.exports = getMessagesIndex;