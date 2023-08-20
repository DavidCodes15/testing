import { Schema, model, models } from "mongoose";

const emailSchema = new Schema({
    name: {
        type: String,
        required: [true, "it is required"],
    },
    phone: {
        type: String,
        required: [true, "it is required"],
    },
    email: {
        type: String,
        required: [true, "it is required"],
    },
    message: {
        type: String,
        required: [true, "it is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

const emails = models.emails || model("email", emailSchema);

export {emails};
