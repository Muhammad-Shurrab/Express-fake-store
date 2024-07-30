const express = require("express");
const request = require("request");
const router = express.Router();
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  request({ uri: "https://fakestoreapi.com/docs" }).pipe(res);
});

app.listen(port, () => {
  console.log(`Is it working ${port}`);
});
