const Joi = require("joi");
const { outError } = require("../../utilities/errors");
const { Product } = require("../../db");

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
    const { name, price, description, category } = req.body;

    // Se è presente il file, salviamo il percorso pubblico
    const imagePath = req.file ? `/assets/${req.file.filename}` : "";
    //console.log("BODY:", req.body);
    //console.log("USER:", req.user);
   // console.log("FILE:", req.file);

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
    image: Joi.string().optional(),
  });

  try {
    const data = await schema.validateAsync(req.body);

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
    await Product.deleteOne({ user, _id });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    outError(res, err);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
};