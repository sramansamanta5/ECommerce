import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()

connectDB();// Connecting to the database.

const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hello From home page")
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)


app.listen(PORT,()=>{
 console.log("server is running...")
})