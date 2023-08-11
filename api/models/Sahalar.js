import mongoose from 'mongoose';

const SahalarSchema = new mongoose.Schema(
    {

    title:{
        type:String,
        required: true,
        
    }, 
    price:{
        type:Number,
        required: true,
       
    },
    desc:{
        type:String,
        required: true,
    },
    sahaSayisi:[{number:Number,müsaitTarih:{type:[Date]}}],
},
{timestamps:true}
)


export default mongoose.model("Sahalar",SahalarSchema)