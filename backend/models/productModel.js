import mongoose from "mongoose";

const reviewShema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,   // This is the user ID
        required: true,
        ref: "User",                            // This is the User model
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,   // This is the user ID
        required: true,
        ref: "User",                            // This is the User model
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewShema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;