import mongoose from 'mongoose';

const HalisahaSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }, type:{
        type:String,
        required: true
    }, 
    city:{
        type:String,
        required: true
    }, 
    address:{
        type:String,
        required: true
    }, 
    photos:{
        type:[String],
        required: true
    },
    title:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    sahalar:{
        type:[String],
        
    },
    ucuzFiyat:{
        type:Number,
        required: true
    },
    featured:{
        type:Boolean,
        default:false
    }
    

})

export default mongoose.model("Halisaha",HalisahaSchema)