const express = require("express");
const { dashboard, login } = require("../controllers/main");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
