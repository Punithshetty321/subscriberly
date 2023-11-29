const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const ProductController = require('../controller/Product');

// Create product validation rules
const createProductValidationRules = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('price').isNumeric().withMessage('Price must be a number'),
];

// Update product validation rules
const updateProductValidationRules = [
  check('name').optional().not().isEmpty().withMessage('Name is required'),
  check('price').optional().isNumeric().withMessage('Price must be a number'),
];

// Define product routes
router.post('/products', createProductValidationRules, ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/:productId', ProductController.getProductById);
router.put('/products/:productId', updateProductValidationRules, ProductController.updateProduct);
router.delete('/products/:productId', ProductController.deleteProduct);

module.exports = router;