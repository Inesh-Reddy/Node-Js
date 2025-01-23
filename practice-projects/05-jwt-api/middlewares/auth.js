const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const authMiddleware = async (req, res, next) => {
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
    req.user = verified;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "Not authorized to access this route",
    });
  }
};

module.exports = authMiddleware;
