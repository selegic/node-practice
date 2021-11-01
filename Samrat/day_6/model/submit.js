const mongoose = require("mongoose");

const SubmitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    marks: {
      type: Number,
    },

    todo: {
      type: mongoose.Schema.ObjectId,
      ref: "Todo",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Submit", SubmitSchema);
