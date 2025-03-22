import express from 'express';
import { getProductsByCategory, getAllProducts, getProductById } from '../controllers/product.contoller.js';

const router = express.Router();

router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);
router.get('/', getAllProducts);

export default router;