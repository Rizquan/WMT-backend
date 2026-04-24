const express = require("express");
const router = express.Router();
const { login } = require("./controller");

router.post("/Login", login);

module.exports = router;