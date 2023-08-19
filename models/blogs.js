import { Schema, model, models } from "mongoose";

const blogsSchema = new Schema({
    blogImageName: {
        type:String,
        required: [true, "it is required"],
    },
    blogImageUrl: {
        type:String,
        required: [true, "it is required"],
    },
    blogImagePublicId: {
        type:String,
        required: [true, "it is required"],
    },
    blogImageAlt: {
        type:String,
        required: [true, "it is required"],
    },
    blogTitle: {
        type:String,
        required: [true, "it is required"],
    },
    blogTag: {
        type:String,
        required: [true, "it is required"],
    },
    blogDate: {
        type:String,
        required: [true, "it is required"],
    },
    blogTitleEng: {
        type:String,
        required: [true, "it is required"],
    },
    blogTagEng: {
        type:String,
        required: [true, "it is required"],
    },
    blogDateEng: {
        type:String,
        required: [true, "it is required"],
    },
    blogTitleRus: {
        type:String,
        required: [true, "it is required"],
    },
    blogTagRus: {
        type:String,
        required: [true, "it is required"],
    },
    blogDateRus: {
        type:String,
        required: [true, "it is required"],
    },
    blogPageImageName: {
        type:String,
        required: [true, "it is required"],
    },
    blogPageImageUrl: {
        type:String,
        required: [true, "it is required"],
    },
    blogPageImagePublicId: {
        type:String,
        required: [true, "it is required"],
    },
    blogPageImageAlt: {
        type:String,
        required: [true, "it is required"],
    },
    secondBlogPageImageName: {
        type:String,
    },
    secondBlogPageImageUrl: {
        type:String,
    },
    secondBlogPageImagePublicId: {
        type:String,
    },
    secondBlogPageImageAlt: {
        type:String,
    },
    views: {
        type: Number,
        default: 0,
      },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
const blogs = models.blogs || model("blogs", blogsSchema);
export default blogs;