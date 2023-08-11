import Sahalar from "../models/Sahalar.js";
import Halisaha from "../models/Halisaha.js";
import { createError } from "../utils/error.js";

export const createSaha =async(req,res,next)=>{
    const halisahaId = req.params.halisahaid;
    const newSaha = new Sahalar(req.body)


    try {
        const savedSaha = await newSaha.save()
        try {
            await Halisaha.findByIdAndUpdate(halisahaId,{$push:{sahalar:savedSaha._id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedSaha)
    } catch (err) {
        next(err)
    }

}

export const updateSaha = async(req,res,next) =>{
    try {
        const updatedSaha = await Saha.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedSaha)
     } catch (err) {
       next(err)
     }
    }

export const deleteSaha = async(req,res,next) =>{
    const halisahaId = req.params.halisahaid;
    

    try {
        const updatedSaha = await Saha.findByIdAndDelete(req.params.id)
        try {
            await Halisaha.findByIdAndUpdate(halisahaId,{$pull:{sahalar:req.params.id},})
        } catch (err) {
            next(err)
        }
        res.status(200).json("Saha silindi.")
     } catch (err) {
        next(err)
     }
}
export const getSaha = async(req,res,next) =>{
    try {
        const saha = await Saha.findById(req.params.id)
        res.status(200).json(saha)
     } catch (err) {
        next(err)
     }
       
}
export const getSahalar = async(req,res,next) =>{
    try {
        const sahalar = await Saha.find(req.params.id)
        res.status(200).json(sahalar)
     } catch (err) {
        next(err)
     }
       
}