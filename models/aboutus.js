import { Schema, model, models } from "mongoose";

const aboutUsSchema = new Schema({
    generalText: {
        type: String,
        required: [true, "it is required"],
    },
    firstText: {
        type: String,
        required: [true, "it is required"],
    },
    secondText: {
        type: String,
        required: [true, "it is required"],
    },
    thirdText: {
        type: String,
        required: [true, "it is required"],
    },
    generalEngText: {
        type: String,
        required: [true, "it is required"],
    },
    firstEngText: {
        type: String,
        required: [true, "it is required"],
    },
    secondEngText: {
        type: String,
        required: [true, "it is required"],
    },
    thirdEngText: {
        type: String,
        required: [true, "it is required"],
    },
    generalRusText: {
        type: String,
        required: [true, "it is required"],
    },
    firstRusText: {
        type: String,
        required: [true, "it is required"],
    },
    secondRusText: {
        type: String,
        required: [true, "it is required"],
    },
    thirdRusText: {
        type: String,
        required: [true, "it is required"],
    },
});

const aboutus = models.aboutus || model("aboutus", aboutUsSchema);

export default aboutus;