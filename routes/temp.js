const express = require("express");
const router = express.Router();

const Food = require("../models/Food");

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const food = new Food({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    });

    const savedFood = await food.save();

    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;