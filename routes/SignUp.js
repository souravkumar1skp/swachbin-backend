const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { validationResult } = require("express-validator");

router.post("/", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const check = await user.findOne({
      email: req.body.email,
    });
    if (check)
      return res.status(400).json({ error: "You are already registered" });
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({ success: "successfully User added" });
    res.end();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
});

router.post("/getid", async (req, res) => {
  try {
    const check = await user
      .findOne({
        email: req.body.email,
        password: req.body.password,
      })
      .select({ _id: 1, name: 1 });
    if (!check) return res.status(400).json({ error: "Invalid data provided" });
    res.status(200).send(check);
    res.end();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
