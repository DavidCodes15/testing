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
    },
    secondBlogPageTextEng: {
        type: String,
        
    },
    secondBlogPageTextRus: {
        type: String,
    },
    id: {
        type: String,
        required: [true, "it is required"],
    },
});

const blogpagetexts = models.blogpagetexts || model("blogpagetexts", blogPageTextSchema);

export default blogpagetexts;