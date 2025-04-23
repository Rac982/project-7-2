const express = require("express");
const app = express.Router();

const { login } = require("../controllers/auth");

/**
 * @path /auth/login
 * @method POST
 */
app.use("/", login);

module.exports = app;