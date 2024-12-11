const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    readyToHire: Boolean,
  },
  { timestamps: true }
);
// Index on 'name' to speed up searches by name
jobSchema.index({ name: 1 }); // Ascending index on the 'name' field

// Index on 'readyToEat' to optimize searches where jobs are ready to eat
jobSchema.index({ readyToHire: 1 }); // Ascending index on the 'readyToEat' field
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
