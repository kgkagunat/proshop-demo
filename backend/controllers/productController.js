import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const productsAll = await Product.find({});
    res.json(productsAll);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const productId = await Product.findById(req.params.id);

    if (productId) {
        return res.json(productId);
    } else {
        res.status(404).json({ message: 'Product not found' });
        throw new Error('Product not found');
    }
});

export { getProducts, getProductById };