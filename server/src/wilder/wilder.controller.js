const express = require("express");
const router = express.Router();
const WilderModel = require("./wilder.model");

router.get("/", (req, res) => {
  res.send("Hello, I'm the get route");
});

router.post("/", async (req, res) => {
  console.log("Got a post", req.body);
  const wilder = new WilderModel(...req.body);
  const result = await wilder.save();
  res.status(200).json({ message: "Hey, I saved a wilder", result });
});

module.exports = router;
