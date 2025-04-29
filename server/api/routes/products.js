const express = require("express");
const { authUser } = require("../../middleware/auth");
const { getAllProducts, createProduct, updateProductById, deleteProductById } = require("../controllers/products");
const app = express.Router();

/**
 * @path /api/products/:category_id
 * @method GET
 */
app.get("/:category_id", authUser(), getAllProducts);

/**
 * @path /api/products
 * @method POST
 */
app.post("/", authUser(["business"]), createProduct);

/**
 * @path /api/products/:product_id
 * @method PUT
 */
app.put("/:product_id", authUser(["business"]), updateProductById);

/**
 * @path /api/products/:product_id
 * @method DELETE
 */
app.delete("/:product_id", authUser(["business"]), deleteProductById);

module.exports = app;