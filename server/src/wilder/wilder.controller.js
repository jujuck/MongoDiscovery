const express = require("express");
const router = express.Router();
const WilderModel = require("./wilder.model");

router.get("/", (req, res) => {
  res.send("Hello, I'm the get route");
});

router.post("/", async (req, res) => {
  console.log("Got a post", req.body);
  res.send("Hello, I'm the post route");
});
