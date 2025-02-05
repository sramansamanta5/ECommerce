import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import products from './data/products.js'


dotenv.config()
const app=express();
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hello From home page")
})


app.get('/api/products',(req,res)=>{
    res.send(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id===req.params.id)
    res.send(product)
})

app.listen(PORT,()=>{
 console.log("server is running...")
})