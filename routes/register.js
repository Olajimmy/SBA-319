const express = require("express");
const router = express.Router();
const users = require("./users");

//
router.get("/new", (req, res) => {
  res.render("register/new");
});

//
router.post("/", async (req, res) => {
  console.log(req.body);
  const registeration = req.body;
  res.json(registeration);
  //   const createdJob = await Job.create(req.body);
  //   res.status(200).redirect("/api/jobPosting");
});
//
module.exports = router;
