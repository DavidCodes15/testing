import { Schema, model, models } from "mongoose";

const blogPageTextSchema = new Schema({
    blogPageText: {
        type: String,
        required: [true, "it is required"],
    },
    blogPageTextEng: {
        type: String,
        required: [true, "it is required"],
    },
    blogPageTextRus: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogPageText: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogPageTextEng: {
        type: String,
        required: [true, "it is required"],
    },
    secondBlogPageTextRus: {
        type: String,
        required: [true, "it is required"],
    },
    id: {
        type: String,
        required: [true, "it is required"],
    },
});

const blogpagetexts = models.blogpagetexts || model("blogpagetexts", blogPageTextSchema);

export default blogpagetexts;