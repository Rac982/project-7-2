const express = require("express");
const { authUser } = require("../../middleware/auth");
const { getAllProducts } = require("../controllers/products"); // Assicurati che il nome sia corretto
const { createProduct, updateProductById, deleteProductById } = require("../controllers/products");
const { upload } = require("../../middleware/upload"); // aggiunto
const app = express.Router();

/**
 * @path /api/products
 * @method GET
 * @description Ottiene tutti i prodotti
 */
app.get("/", authUser(), (req, res, next) => {
    req.params.category_id = 'all'; // Simula un category_id 'all' per la tua funzione
    next();
}, getAllProducts);

/**
 * @path /api/products/:category_id
 * @method GET
 * @description Ottiene i prodotti per una specifica categoria
 */
app.get("/:category_id", authUser(), getAllProducts);

/**
 * @path /api/products
 * @method POST
 * @description Crea un nuovo prodotto con immagine (upload incluso)
 */
app.post("/", authUser(["business"]), upload.single("image"), createProduct);

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