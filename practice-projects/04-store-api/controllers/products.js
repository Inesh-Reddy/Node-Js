const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    // name: "vase table",
    company: "marcos",
  });
  res.status(200).json({
    msg: products,
    nbHits: products.length,
  });
};

const getAllProducts = (req, res) => {
  res.json({
    msg: `Here is all your products...`,
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
