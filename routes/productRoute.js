const express = require('express');
const Product = require('../models/productModels')
const router = express.Router();
const {getProducts, getProduct, deleteProduct, createProduct, updateProduct} = require('../controllers/productController')



// get all products
router.get('/', getProducts);

// get one product
router.get('/:id', getProduct)

//update the product
router.put('/:id', updateProduct)

//delete a product
router.delete('/:id', deleteProduct)

// create a product
router.post('/', createProduct)

module.exports = router;