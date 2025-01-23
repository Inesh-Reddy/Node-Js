const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  //possible ways to check the {mongDB(mongoose validation) ,another layer join ,check them here}
  if (!username || !password) {
    res.status(400).json({
      msg: `Please send proper creds`,
    });
  } else {
    const id = new Date().getDay();
    const token = jwt.sign({ id, username }, secret, { expiresIn: "30d" });
    res.status(200).json({
      msg: `user created`,
      token,
    });
  }
};

const dashboard = async (req, res) => {
  const verified = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  return res.status(200).json({
    msg: `Hello, ${verified.username || "User"}`,
    secret: `Here is your authorized data: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
