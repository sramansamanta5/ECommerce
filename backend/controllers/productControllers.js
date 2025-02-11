import Product from '../models/productModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';


//Fetch all products
//public route
//----->  /api/products
export const getProducts=async(req,res,next)=>{
    try {
        const products=await Product.find({})                       
        res.json(products)
    } catch (error) {
       next(error)
    }
}


//fetch Products by ID
//public route
//----->/api/product/:id
export const getProductbyID=async(req,res,next)=>{
    try {

        const product=await Product.findById(req.params.id)

    if(product){
       return res.json(product)
    }
    res.status(404).json({message:"Product not found!"})
        
    } catch (error) {
        next(error)
    }
    
}