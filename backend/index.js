import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import cookieParser from "cookie-parser";
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


dotenv.config()

connectDB();// Connecting to the database.

const app=express();
app.use(cors({
    origin: 'http://localhost:5173', //  frontend URL
    credentials: true, // THIS IS CRITICAL - allows cookies to be sent/received
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(express.json())
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hello From home page")
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)


app.listen(PORT,()=>{
 console.log("server is running...")
})