const express = require("express");
const app = express();
const products = require("./routes/routes");
require("dotenv").config();
const connectDB = require("./db/connect");

app.use(express.json());

app.get("/test", (req, res) => {
  res.send(`<h1>Store-API</h1> <a href="api/v1/products">Products Route</a>`);
});

app.use("/api/v1/products", products);

const init = async () => {
  try {
    await connectDB(process.env.MongoDB_URI);
    app.listen(3000, () => {
      console.log(`Server is listening on port: 3000...`);
    });
  } catch (error) {
    console.log(`Couldn't connect to DB ...`);
  }
};

init();
