import express from 'express'
import {getMyOrders,createOrder}from '../controllers/orderControllers.js' 
import { protect,admin } from '../middlewares/authMiddleware.js';


const router=express.Router();


router.post('/',protect,createOrder)
router.get('/myorders',protect,getMyOrders)
//router.get('/',protect,admin,getOrders)
//router.get('/:id',protect,admin,getOrderById)
//router.put('/:id/pay',protect,admin,updateOrderToPaid)
//router.put('/:id/pay',protect,admin,updateOrderToDelivered)


export default router