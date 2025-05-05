const express = require("express");
const app = express.Router();

const { searchCateogriesAndProducts } = require("../controllers/search");
const { authUser } = require("../../middleware/auth");

/**
 * @path /api/search
 * @method GET
 */
app.get("/", authUser(["user"]), searchCateogriesAndProducts);

module.exports = app;