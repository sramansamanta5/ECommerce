import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const Connected=await mongoose.connect(process.env.Mongo_URI);
        console.log(`Connected with Database: ${Connected.connection.host}`)
    } catch (error) {
        console.log(`Error:${error.message}`)
        process.exit(1);
    }
}

export default connectDB;