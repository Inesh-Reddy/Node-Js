const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("./public"));
app.use(express.json());

console.log("Task Manager App");

// app.get("/test", (req, res) => {
//   res.json({
//     msg: "Welcome to taks manager api",
//   });
// });

app.use("/api/v1/tasks", tasks);

const PORT = 3000;
const url = process.env.mongodb_URI;
const init = async (url) => {
  try {
    await connectDB(url);
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

init(url);
