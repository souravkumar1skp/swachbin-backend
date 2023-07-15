const express = require("express");
const router = express.Router();
const locate = require("../models/Location");
const { body, validationResult } = require("express-validator");

router.get("/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const check = await locate
      .find({
        user_id: req.params.id,
      })
      .select({ lat: 1, lng: 1 });
    if (!check) return res.status(400).json({ error: "No data availaible" });
    res.status(200).send(check);
    res.end();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
});

router.get("/", async (req, res) => {
  try {
    const check = await locate.find({}).populate("user_id");
    if (!check) return res.status(400).json({ error: "No data availaible" });
    res.status(200).send(check);
    res.end();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
