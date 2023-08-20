import { Schema, model, models } from "mongoose";

const HeroImagesSchema = new Schema({
    imageName: {
        type: String,
        required: [true, "image name is required"],
    },
    imageUrl : {
        type: String,
        required: [true, "image Url is required"],
    },
    publicId: {
        type: String,
        required: [true, "publicId is required"],
    },
});

const heroimages = models.heroimages || model("heroimages", HeroImagesSchema);
export {heroimages};