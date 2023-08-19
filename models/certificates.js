import { Schema, model, models } from "mongoose";

const certificatesSchema = new Schema({
    imageName: {
        type: String,
        required: [true, "it is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "it is required"],
    },
    publicId: {
        type: String,
        required: [true, "it is required"],
    },
    imageAlt: {
        type: String,
        required: [true, "it is required"],
    },
    certId: {
        type: String,
        required: [true, "it is required"],
    },
});

const certificates = models.certificates || model("certificates", certificatesSchema);

export default certificates;