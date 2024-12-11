const express = require("express");
const router = express.Router();

const Job = require("../models/jobPosting");

//
//router.get();
//
router.get("/seed", async (req, res) => {
  try {
    await Job.create([
      {
        title: "UI/UX",
        description:
          "Need a full stack engineer who is knowlegable in frontend.",
        readyToHire: true,
      },
      {
        title: "UI/UX",
        description:
          "Need a full stack engineer who is knowlegable in frontend.",
        readyToHire: true,
      },
      {
        title: "UI/UX",
        description:
          "Need a full stack engineer who is knowlegable in frontend.",
        readyToHire: true,
      },
      {
        title: "UI/UX",
        description:
          "Need a full stack engineer who is knowlegable in frontend.",
        readyToHire: true,
      },
      {
        title: "UI/UX",
        description:
          "Need a full stack engineer who is knowlegable in frontend.",
        readyToHire: true,
      },
    ]);

    res.status(200).redirect("/api/jobPosting");
  } catch (err) {
    res.status(400).send(err);
  }
});

//BASE
router.get("/", async (req, res) => {
  try {
    // If you want to filter jobs based on query parameters (e.g., 'name' or 'readyToEat')
    const { title, readyToHire } = req.query; // Retrieve query parameters from the URL

    // Build the filter object dynamically based on provided query parameters
    let filter = {};
    if (title) filter.title = title; // Filter by 'name' if provided
    if (readyToHire !== undefined) filter.readyToHire = readyToHire === "true"; // Convert 'true'/'false' string to Boolean

    // Find jobs with the specified filter
    const foundJobs = await Job.find(filter);

    // Return the jobs in the response
    res.status(200).json(foundJobs);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

// DELETE
router.delete("/remove/:_id", async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.body);
    // console.log(deletedJob);
    res.status(200).redirect("/api/jobPosting/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// UPDATE
// put replaces a resource
router.get("/update/:id", async (req, res) => {
  const result = await Job.findById(req.params.id);
  if (result) {
    res.render("jobPosting/edit", {
      title: result.title,
      description: result.description,
      id: req.params.id,
    });
  } else {
    res.send("not result");
  }
});
router.put("/add/:id", async (req, res) => {
  if (req.body.readyToHire === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToHire = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToHire = false;
  }

  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedJob);
    res.redirect("/api/jobPosting");
  } catch (err) {
    res.send(err).status(400);
  }
});

//SHOW

// CREATE
router.post("/", async (req, res) => {
  console.log(req.body);

  if (req.body.readyToHire === "on") {
    req.body.readyToHire = true;
  } else {
    req.body.readyToHire = false;
  }

  try {
    const createdJob = await Job.create(req.body);
    res.status(200).redirect("/api/jobPosting");
  } catch (err) {
    res.status(400).send(err);
  }
});
//

module.exports = router;
