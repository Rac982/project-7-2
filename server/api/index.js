const express = require("express");
const app = express.Router();

/**
 * @path /api/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /api/me
 */
app.use("/me", require("./routes/me"));

/**
 * @path /api/categories
 */
app.use("/categories", require("./routes/categories"));

/**
 * @path /api/products
 */
app.use("/products", require("./routes/products"));

module.exports = app;