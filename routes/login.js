const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("login/new");

  //
});
router.get("/", async (req, res) => {
  try {
    const foundJobs = await Job.find({});
    res.status(200).json(foundJobs);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
