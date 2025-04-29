const Joi = require("joi");
const { outError } = require("../../utilities/errors");
const { Product } = require("../../db");

/**
 * Get all prodycts
 * @param {Request} req 
 * @param {Response} res 
 * @permission Business
 */
const getAllProducts = async (req, res) => {
    const category = req.params.category_id;

    try {
        const products = await Product.find({ category }, null, { lean: true })
            .populate("category")
            .populate("labels");

        return res.status(201).json(products);
    } catch (err) {
        outError(res, err);
    }
}

/**
 * Create a new product
 * @param {Request} req 
 * @param {Response} res 
 * @permission Business
 */
const createProduct = async (req, res) => {
    const user = req.user;
    
    const schema = Joi.object().keys({
        category: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const product = (await new Product({ user, ...data }).save()).toObject();

        return res.status(201).json(product);
    } catch (err) {
        outError(res, err);
    }
}

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
}

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
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById,
}