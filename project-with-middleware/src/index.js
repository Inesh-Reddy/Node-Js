const express = require("express");
const app = express();
app.use(express.json());

let requestCount = 0;
let errorCount = 0;

const requestCountMiddleware = (req, res, next) => {
  requestCount++;
  next();
};

let numberOfRequestsForuser = {};

setInterval(() => {
  numberOfRequestsForuser = {};
}, 5000);

const rateLimiter = (req, res, next) => {
  const userID = req.headers["user-id"];

  if (!userID) {
    errorCount++;
    return res.status(400).json({ msg: "User ID is required" });
  }

  if (!numberOfRequestsForuser[userID]) {
    numberOfRequestsForuser[userID] = 1;
  } else {
    numberOfRequestsForuser[userID] += 1;

    if (numberOfRequestsForuser[userID] > 5) {
      errorCount++;
      return res.status(429).json({ msg: "You exceeded the rate limit" });
    }
  }

  next();
};

const checkerMiddleware = (req, res, next) => {
  const age = req.body.age;
  if (age >= 13) {
    next();
  } else {
    errorCount++;
    res.json({
      msg: "Sorry you cannot hop on this ride...",
    });
  }
};

app.use(checkerMiddleware, requestCountMiddleware, rateLimiter);

app.get("/ride1", (req, res, next) => {
  res.status(200).json({
    msg: "Gaint wheel Ride completed successsfully",
    currentReqsCount: requestCount,
    CurrentErroCount: errorCount,
  });
});

app.get("/ride2", (req, res, next) => {
  res.status(200).json({
    msg: "Rollarcoaster Ride completed successfully",
    currentReqsCount: requestCount,
    CurrentErroCount: errorCount,
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port:3000...`);
});
