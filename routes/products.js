import express from 'express';
import * as product from '../controllers/products.js'
const router = express.Router();

router.get('/', product.productList)
router.post('/', product.productAdd)
router.put('/:id', product.productUpdate)
router.delete('/:id', product.productDelete)
export default router

