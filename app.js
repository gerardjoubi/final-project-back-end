require("dotenv").config();
require("./config/mongo-cfg");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require("./routes/index");
const userAPI = require("./api/userAPI").router;
const rentalAPI = require("./api/rentalAPI").router;
app.use("/api/user", userAPI);
app.use("/api/rental", rentalAPI);
app.use("/", index);

module.exports = app;
