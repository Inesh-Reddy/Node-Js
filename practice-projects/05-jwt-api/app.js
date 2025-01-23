const express = require("express");
const app = express();

require("dotenv").config();

const mainRouter = require("./routes/main");

console.log(`JWT authentication - app`);

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  try {
    console.log(`Server is listening on port: ${port}...`);
  } catch (error) {
    console.log(error);
  }
});
