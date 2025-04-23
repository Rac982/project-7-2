const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    }
}, { strict: true, timestamps: true, versionKey: false });

const Category = model("Category", CategorySchema);

module.exports = Category;