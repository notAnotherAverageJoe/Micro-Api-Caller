const express = require("express");
const { getUserFullName, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/getUserFullName", getUserFullName);
router.post("/login", loginUser);

module.exports = router;
