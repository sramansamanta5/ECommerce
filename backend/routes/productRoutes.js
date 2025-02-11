import express from 'express'

import { getProducts,getProductbyID } from '../controllers/productControllers.js';


 const router=express.Router();



router.get('/',getProducts)

router.get('/:id',getProductbyID)

export default router