const User = require("../models/User");
const express = require("express");
const router = express.Router();

const getAll = () => User.find();
const getOne = id => User.findById({ _id: id });
const deleteOne = id => User.deleteOne({ _id: id });
const updateOne = (id, data) => User.update({ _id: id }, data);
const create = data => User.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(dbRes => {
      if (dbRes.length) res.status(200).send(dbRes);
      else res.status(200).send("No body here");
    })
    .catch(dbErr => res.status(500).send("Fatal Error"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(dbRes => res.status(200).send("Deleted"))
    .catch(dbErr =>
      res.status(500).send("Something went wrong with the request")
    );
});

router.post("/create", (req, res) => {
  create(req.body)
    .then(dbRes => res.status(200).send("Success"))
    .catch(dbErr => res.status(500).send(dbErr));
});

router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body)
    .then(dbRes => res.status(200).send("Success"))
    .catch(dbErr => res.status(500).send(dbErr));
});

module.exports = { router, getAll, getOne, deleteOne, updateOne, create };
