const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
  title: String,
  message: String,
  image: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  category: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Rental = mongoose.model("Rental", RentalSchema);
module.exports = Rental;
