import { Schema, model, models } from "mongoose";

const blogTextsSchema = new Schema({
    leftMessage: {
        type: String,
        required: [true, "it is required"],
    },
    blogMessage: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogMessage: {
        type: String,
        required: [true, "it is required"],
    },
    leftMessageEng: {
        type: String,
        required: [true, "it is required"],
    },
    blogMessageEng: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogMessageEng: {
        type: String,
        required: [true, "it is required"],
    },
    leftMessageRus: {
        type: String,
        required: [true, "it is required"],
    },
    blogMessageRus: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogMessageRus: {
        type: String,
        required: [true, "it is required"],
    },
});

const blogtexts = models.blogtexts || model("blogtexts", blogTextsSchema);

export default blogtexts;