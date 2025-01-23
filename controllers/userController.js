const { findUserByUsername, splitFullName } = require("../models/userModels");

// grab users full name
function getUserFullName(req, res) {
  const { username } = req.body;
  //call it on current user

  const user = findUserByUsername(username);

  if (user) {
    const name = splitFullName(user.fullName);
    return res.json({ name });
  }

  res.status(404).json({ error: "User not found" });
}

function loginUser(req, res) {
  const { username, password } = req.body;

  const user = findUserByUsername(username);

  if (user && user.userPassword === password) {
    const token = Math.random().toString(36).substr(2, 10);
    return res.json({ success: true, token });
  }

  res.status(401).json({ error: "Unauthorized" });
}

module.exports = {
  getUserFullName,
  loginUser,
};
