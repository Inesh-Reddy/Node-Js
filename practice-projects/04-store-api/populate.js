require("dotenv").config();
const connectDB = require("./db/connect");

const Product = require("./models/products");
const jsonProducts = require("./product.json");

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
