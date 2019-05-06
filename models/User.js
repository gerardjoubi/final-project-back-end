const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  picture: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true
  },

  rentals: [{ type: Schema.Types.ObjectId, ref: "Rental" }],

  earnings: {
    type: Number
  },

  consumerPoints: {
    type: Number
  },

  renterPoints: {
    type: Number
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
