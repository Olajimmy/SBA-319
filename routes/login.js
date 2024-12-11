const express = require("express");
const router = express.Router();
const users = require("./users");

router.get("/new", (req, res) => {
  res.render("login/new");

  //
});
router.get("/", (req, res) => {
  try {
    const foundUser = users.find({});
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
