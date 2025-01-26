import mongoose, { mongo } from "mongoose"

export const connectDb=async()=>{
try {
    const conn =await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDb is connected:${conn.connection.host}`);
} catch (error) {
    console.log("Error connection to MongoDB :",error.message);
    process.exit(1);
}
}