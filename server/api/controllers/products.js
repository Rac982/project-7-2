const Joi = require("joi");
const { outError } = require("../../utilities/errors");
const { Product } = require("../../db");
const fs = require("fs");
const path = require("path");

/**
 * Get all prodycts
 * @param {Request} req
 * @param {Response} res
 * @permission Business
 */
const mongoose = require("mongoose");

const getAllProducts = async (req, res) => {
  const categoryId = req.params.category_id;

  try {
    let query = {};

    if (categoryId && categoryId !== 'all') {
      // Controlla che sia un ObjectId valido prima di usarlo
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ error: "ID categoria non valido" });
      }
      query.category = categoryId;
    }

    const products = await Product.find(query, null, {
      lean: true,
      sort: { createdAt: -1 },
    })
      .populate("category")
      .populate("labels");

    return res.status(201).json(products);
  } catch (err) {
    outError(res, err);
  }
};

/**
 * Create a new product
 * @param {Request} req
 * @param {Response} res
 * @permission Business
 */
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;
    let imagePath = "";

    if (req.file) {
      // Immagine caricata tramite form
      imagePath = `/assets/${req.file.filename}`;
    } else if (image && image.startsWith("/assets/")) {
      // Immagine duplicata: copiamo il file fisico
      const originalPath = path.join(__dirname, "../../assets", path.basename(image));
      const ext = path.extname(image);
      const uniqueName = `copy-${Date.now()}${ext}`;
      const newPath = path.join(__dirname, "../../assets", uniqueName);

      if (fs.existsSync(originalPath)) {
        fs.copyFileSync(originalPath, newPath);
        imagePath = `/assets/${uniqueName}`;
      } else {
        console.warn("Immagine da duplicare non trovata:", originalPath);
      }
    }

    const newProduct = new Product({
      name,
      price,
      description,
      category,
      image: imagePath,
      user: req.user._id,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Errore nella creazione del prodotto:", error);
    res.status(500).json({ error: "Errore durante la creazione del prodotto" });
  }
};
/**
 * Update a product
 * @param {Request} req
 * @param {Response} res
 * @permission Business
 */
const updateProductById = async (req, res) => {
  const user = req.user;
  const _id = req.params.product_id;

  const schema = Joi.object().keys({
    category: Joi.string().optional(),
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    price: Joi.number().optional(),
    image: Joi.string().optional(), // facoltativa
  });

  try {
    let data = await schema.validateAsync(req.body);

    if (req.file) {
      const imagePath = `/assets/${req.file.filename}`;
      data.image = imagePath;
    }

    await Product.updateOne({ user, _id }, { ...data });

    return res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    outError(res, err);
  }
};

/**
 * Delete a product
 * @param {Request} req
 * @param {Response} res
 * @permission Business
 */
const deleteProductById = async (req, res) => {
  const user = req.user;
  const _id = req.params.product_id;

  try {
    // 1. Trova il prodotto per accedere al campo immagine
    const product = await Product.findOne({ user, _id });
    if (!product) {
      return res.status(404).json({ error: "Prodotto non trovato" });
    }

    // 2. Se ha un'immagine associata e salvata in /assets, rimuovila dal file system
    if (product.image && product.image.startsWith("/assets")) {
      const imagePath = path.join(__dirname, "../../assets", path.basename(product.image));

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log("Immagine eliminata:", imagePath);
      }
    }

    // 3. Elimina il prodotto dal DB
    await Product.deleteOne({ user, _id });

    return res.status(200).json({ message: "Prodotto e immagine eliminati con successo" });
  } catch (err) {
    console.error("Errore durante l'eliminazione:", err);
    outError(res, err);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
};