import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,  // This is a boolean value
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;