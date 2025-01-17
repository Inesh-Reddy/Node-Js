const getAllProductsStatic = (req, res) => {
  res.json({
    msg: `static products api...`,
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
