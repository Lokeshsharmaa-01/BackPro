import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://iamlokesh2024:iamlokesh@cluster0.ue63p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log("DB Connected Successfully")

    } catch (error) {
        console.log("Error hi error hai bhago bc")
        process.exit(1)
        
    }
}

export default connectDB;