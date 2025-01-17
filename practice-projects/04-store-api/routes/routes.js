const express = require("express");
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts).get(getAllProductsStatic);

module.exports = router;
