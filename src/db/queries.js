const pool = require("./pool");
async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessage(messageUser, messageText) {
  await pool.query("INSERT INTO messages (user_name, content) VALUES ($1, $2)", [messageUser, messageText]);
}

module.exports = { getMessages, newMessage };
