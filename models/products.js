import { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
    imageName: {
        type: String,
        required: [true, "it is true"],
    },
    imageUrl: {
        type: String,
        required: [true, "it is true"],
    },
    publicId: {
        type: String,
        required: [true, "it is true"],
    },
    imageAlt: {
        type: String,
        required: [true, "it is true"],
    },
    productName: {
        type: String,
        required: [true, "it is true"],
    },
    productNameEng: {
        type: String,
        required: [true, "it is true"],
    },
    productNameRus: {
        type: String,
        required: [true, "it is true"],
    },
    productId: {
        type: String,
        required: [true, "it is true"],
    },
    productLink: {
        type: String,
        required: [true, "it is true"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

const products = models.products || model("products", productsSchema);

export default products;