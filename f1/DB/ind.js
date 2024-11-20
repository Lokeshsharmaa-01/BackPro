import mongoose from "mongoose";

const DBConnection = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://iamlokesh2024:iamlokesh@cluster0.ue63p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB is connected ")
        
    } catch (error) {
        console.log("db is not connected")
    }
}

export default DBConnection;