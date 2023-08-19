import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
});

const User = models.User || model("User", UserSchema);

export default User;

