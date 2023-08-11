import express  from "express";
import dotenv  from "dotenv";
import mongoose  from "mongoose";
import authRoute from "../api/routes/auth.js";
import usersRoute from "../api/routes/users.js";
import halisahaRoute from "../api/routes/halisaha.js";
import sahalarRoute from "../api/routes/sahalar.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
dotenv.config()


const connect = async ()=>{
    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected mongoDB")
    } catch (error) {
        throw err
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

//ara katmanlar=middlewares Hata yönetimi için bir kullanıdlır Eğer bir hata oluşursa, 
app.use(cors());

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/halisaha",halisahaRoute)
app.use("/api/sahalar",sahalarRoute)


app.use((err,req,res,next)=>{
const errorStatus = err.status || 500
const errorMessage = err.message || "hatalar var"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})



app.listen(8800,()=>{
    connect()
    console.log("Connected backend.")
})