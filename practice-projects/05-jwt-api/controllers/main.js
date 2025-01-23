const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth");
const secret = process.env.SECRET;

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
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      msg: "No token provided",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const verified = jwt.verify(token, secret);
    if (!verified) {
      return res.status(401).json({
        msg: "Invalid token",
      });
    }
    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
      msg: `Hello, ${verified.username || "User"}`,
      secret: `Here is your authorized data: ${luckyNumber}`,
    });
  } catch (err) {
    return res.status(400).json({
      msg: "Not authorized to access this route",
    });
  }
};

module.exports = {
  login,
  dashboard,
};
