const Joi = require('joi');
const { outError } = require('../../utilities/errors');
const { Category, Product } = require('../../db');

/**
 * Search for categories and products by name
 * @param {Request} req 
 * @param {Response} res 
 * @permission User
 */
const searchCateogriesAndProducts = async (req, res) => {
    const user = req.user;

    const schema = Joi.object().keys({
        q: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.query);

        const { q } = data;

        const categories = await Category.find({ user, name: { $regex: q, $options: 'igm' } }, null, { lean: true });
        const products = await Product.find({ user, name: { $regex: q, $options: 'igm' } }, null, { lean: true })
            .populate('category')
            .populate('labels');

        return res.status(200).json({ categories, products });
    } catch (err) {
        outError(res, err);
    }
}

module.exports = {
    searchCateogriesAndProducts,
};