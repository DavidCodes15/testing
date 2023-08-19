import { Schema, model, models } from "mongoose";

const fittingsSchema = new Schema({
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
    firstCarouselImageName: {
        type: String,
    },
    firstCarouselImageUrl: {
        type: String,
    },
    firstCarouselPublicId: {
        type: String,
    },
    firstCarouselImageAlt: {
        type: String,
    },
    secondCarouselImageName: {
        type: String,
    },
    secondCarouselImageUrl: {
        type: String,
    },
    secondCarouselPublicId: {
        type: String,
    },
    secondCarouselImageAlt: {
        type: String,
    },
    thirdCarouselImageName: {
        type: String,
    },
    thirdCarouselImageUrl: {
        type: String,
    },
    thirdCarouselPublicId: {
        type: String,
    },
    thirdCarouselImageAlt: {
        type: String,
    },
    fittingId: {
        type: String,
        required: [true, "it is required"],
    },
    fittingName: {
        type: String,
        required: [true, "it is required"],
    },
    fittingNameEng: {
        type: String,
        required: [true, "it is required"],
    },
    fittingNameRus: {
        type: String,
        required: [true, "it is required"],
    },
});
const fittings =  models.fittings || model("fittings", fittingsSchema);

export default fittings;