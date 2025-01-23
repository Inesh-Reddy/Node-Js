const express = require("express");
const app = express();
require("dotenv").config();

console.log(`JWT authentication - app`);

app.use(express.json());

app.use("/api/v1/jwt");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
