import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    mobile: Number,
    designation: String,
    imagePath: String
})

const User = mongoose.model("users", userSchema);

export default User;