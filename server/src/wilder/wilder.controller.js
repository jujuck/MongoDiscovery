const express = require("express");
const router = express.Router();
const WilderModel = require("./wilder.model");

router.get("/", async (req, res) => {
  const wilders = await WilderModel.find();
  res.status(200).json(wilders);
});

router.get("/:id", async (req, res) => {
  const wilder = await WilderModel.findById(req.params.id);
  res.status(200).json(wilder);
});

router.post("/", async (req, res) => {
  const wilder = new WilderModel(req.body);
  const result = await wilder.save();
  res.status(201).json(result);
});

router.put("/:id", async (req, res) => {
  const wilder = await WilderModel.findById(req.params.id);
  wilder.training.push(req.body.training);
  await wilder.save();
  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const wilder = await WilderModel.findById(req.params.id);
  await wilder.deleteOne();
  res.sendStatus(204);
});

module.exports = router;
