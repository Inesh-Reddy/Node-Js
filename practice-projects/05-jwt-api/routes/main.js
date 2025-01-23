const express = require("express");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.route("/").get(auth);

module.exports = router;
